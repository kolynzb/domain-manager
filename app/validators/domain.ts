import vine from '@vinejs/vine'

/*
|--------------------------------------------------------------------------
| Create Domain Validator
|--------------------------------------------------------------------------
*/
export const CreateDomainValidator = vine.compile(
  vine.object({
    domainName: vine.string().trim(),
    ownerName: vine.string(),
    telephoneOne: vine.string(),
    telephoneTwo: vine.string().optional(),
    emailOne: vine.string(),
    emailTwo: vine.string().optional(),
    startDate: vine.date(),
    expiryDate: vine.date(),
  })
)

/*
|--------------------------------------------------------------------------
| Update Domain Validator
|--------------------------------------------------------------------------
*/
export const UpdateDomainValidator = vine.compile(
  vine.object({
    domainName: vine.string().optional(),
    ownerName: vine.string().optional(),
    telephoneOne: vine.string().optional(),
    telephoneTwo: vine.string().optional(),
    emailOne: vine.string().optional(),
    emailTwo: vine.string().optional(),
    startDate: vine.date().optional(),
    expiryDate: vine.date().optional(),
  })
)
