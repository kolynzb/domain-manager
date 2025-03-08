import Domain from '#models/domain'
import { DateTime } from 'luxon'
import type { HttpContext } from '@adonisjs/core/http'

export default class DomainsController {
  public async index({ inertia, request, auth }: HttpContext) {
    const page = request.input('page', 1)
    const filter = request.input('filter', 'all')

    const domainsQuery = Domain.query().orderBy('expiry_date', 'asc')

    // Apply filters
    switch (filter) {
      case 'active':
        domainsQuery.where('expiry_date', '>', DateTime.now().toSQL())
        break
      case 'expiry7':
        domainsQuery
          .where('expiry_date', '>', DateTime.now().toSQL())
          .where('expiry_date', '<=', DateTime.now().plus({ days: 7 }).toSQL())
        break
      case 'expiry30':
        domainsQuery
          .where('expiry_date', '>', DateTime.now().toSQL())
          .where('expiry_date', '<=', DateTime.now().plus({ days: 30 }).toSQL())
        break
      case 'expired':
        domainsQuery.where('expiry_date', '<=', DateTime.now().toSQL())
        break
      case 'redemption':
        domainsQuery
          .where('expiry_date', '<=', DateTime.now().toSQL())
          .where('expiry_date', '>=', DateTime.now().minus({ days: 20 }).toSQL())
        break
    }

    const domains = await domainsQuery.paginate(page, 10)

    return inertia.render('Domains/Index', {
      domains: domains.serialize(),
      filter,
      auth: {
        user: auth.user?.serialize(),
      },
    })
  }

  // public async create({ inertia }: HttpContext) {
  //   return inertia.render('domains/create')
  // }

  // public async store({ request, response, auth, session }: HttpContext) {
  //   const domainSchema = schema.create({
  //     domain_name: schema.string({ trim: true }, [
  //       rules.unique({ table: 'domains', column: 'domain_name' }),
  //     ]),
  //     owner_name: schema.string({ trim: true }),
  //     telephone1: schema.string({ trim: true }),
  //     telephone2: schema.string.optional({ trim: true }),
  //     email1: schema.string({ trim: true }, [rules.email()]),
  //     email2: schema.string.optional({ trim: true }, [rules.email()]),
  //     start_date: schema.date(),
  //     expiry_date: schema.date(),
  //   })

  //   const data = await request.validate({ schema: domainSchema })

  //   await Domain.create({
  //     domainName: data.domain_name,
  //     ownerName: data.owner_name,
  //     telephone1: data.telephone1,
  //     telephone2: data.telephone2,
  //     email1: data.email1,
  //     email2: data.email2,
  //     startDate: data.start_date,
  //     expiryDate: data.expiry_date,
  //     userId: auth.user!.id,
  //   })

  //   session.flash('success', 'Domain created successfully')
  //   return response.redirect().toRoute('domains.index')
  // }

  public async show({ inertia, params }: HttpContext) {
    const domain = await Domain.query().where('id', params.id).firstOrFail()

    return inertia.render('domains', {
      domain: domain.serialize(),
    })
  }

  public async edit({ inertia, params }: HttpContext) {
    const domain = await Domain.findOrFail(params.id)

    return inertia.render('Domains/Edit', {
      domain: domain.serialize(),
    })
  }

  // public async update({ request, response, params, session }: HttpContext) {
  //   const domain = await Domain.findOrFail(params.id)

  //   const domainSchema = schema.create({
  //     domain_name: schema.string({ trim: true }, [
  //       rules.unique({ table: 'domains', column: 'domain_name', whereNot: { id: domain.id } }),
  //     ]),
  //     owner_name: schema.string({ trim: true }),
  //     telephone1: schema.string({ trim: true }),
  //     telephone2: schema.string.optional({ trim: true }),
  //     email1: schema.string({ trim: true }, [rules.email()]),
  //     email2: schema.string.optional({ trim: true }, [rules.email()]),
  //     start_date: schema.date(),
  //     expiry_date: schema.date(),
  //   })

  //   const data = await request.validate({ schema: domainSchema })

  //   domain.domainName = data.domain_name
  //   domain.ownerName = data.owner_name
  //   domain.telephone1 = data.telephone1
  //   domain.telephone2 = data.telephone2
  //   domain.email1 = data.email1
  //   domain.email2 = data.email2
  //   domain.startDate = data.start_date
  //   domain.expiryDate = data.expiry_date

  //   await domain.save()

  //   session.flash('success', 'Domain updated successfully')
  //   return response.redirect().toRoute('domains.index')
  // }

  public async destroy({ response, params, session }: HttpContext) {
    const domain = await Domain.findOrFail(params.id)
    await domain.delete()

    session.flash('success', 'Domain deleted successfully')
    return response.redirect().toRoute('domains.index')
  }
}
