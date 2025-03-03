import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

export default class Domain extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare domainName: string

  @column()
  declare ownerName: string

  @column()
  declare telephoneOne: string

  @column()
  declare telephoneTwo: string | null

  @column()
  declare emailOne: string

  @column()
  declare emailTwo: string | null

  @column.date()
  declare startDate: DateTime

  @column.date()
  declare expiryDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @computed()
  get isActive(): boolean {
    return DateTime.now() < this.expiryDate
  }

  @computed()
  get expiresIn7Days(): boolean {
    const diff = this.expiryDate.diff(DateTime.now(), 'days')
    return diff.days >= 0 && diff.days <= 7
  }

  @computed()
  get expiresIn30Days(): boolean {
    const diff = this.expiryDate.diff(DateTime.now(), 'days')
    return diff.days >= 0 && diff.days <= 30
  }

  @computed()
  get isExpired(): boolean {
    return DateTime.now() > this.expiryDate
  }

  @computed()
  get isInRedemption(): boolean {
    if (!this.isExpired) return false

    const diff = DateTime.now().diff(this.expiryDate, 'days')
    return diff.days <= 20
  }
}
