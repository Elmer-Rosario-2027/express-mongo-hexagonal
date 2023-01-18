import luhn from 'luhn'
import joi from '@hapi/joi'

import { CardModelItem } from '../domain/cardDataItem'

const joiSchema: joi.AnySchema = joi.object({
    email: joi.string()
        .email()
        .min(5)
        .max(100)
        .pattern(/(\W|^)[\w.\-]{0,25}@(yahoo|hotmail|gmail)\.com(\W|$)/)
        .required(),
    card_number: joi.string()
        .required()
        .custom((value, helper) => {
            if(!luhn.validate(value)){
                return helper.message({})
            }
            return value
        }),
    expiration_month: joi.string()
        .min(1)
        .max(2)
        .pattern(/^(1|2|3|4|5|6|7|8|9|01|02|02|03|04|05|06|07|08|09|10|11|12)$/)
        .required(),
    expiration_year: joi.string()
        .length(4)
        .pattern(/^(2023|2024|2025|2026|2027|2028)$/)
        .required(),
    cvv: joi.string()
        .required()
        .when('card_number', {
        is: joi.string().pattern(/^4/),
        then: joi.string()
            .length(3)
            .pattern(/^[0-9]+$/)
            .required()
        })
        .when('card_number', {
            is: joi.string().pattern(/^5/),
            then: joi.string()
            .length(3)
            .pattern(/^[0-9]+$/)
            .required()
        })
        .when('card_number', {
            is: joi.string().pattern(/^3/),
            then: joi.string()
            .length(4)
            .pattern(/^[0-9]+$/)
            .required()
        }), 
})

export const validatePayload = async (payload: CardModelItem) => {
    const esquemaValido = joiSchema.validate(payload, {
        allowUnknown: true,
        abortEarly: false,
        convert: false,
        errors: { language: 'spanish' }
      });
      if(esquemaValido.error){
        throw new Error(esquemaValido.error?.message)
      }
}