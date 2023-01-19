import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'

interface ICity {
  state    : string
  name     : string
}

const bodyValidation: yup.SchemaOf<ICity> = yup.object().shape({
  state: yup.string().required().min(3),
  name: yup.string().required().min(3)
})

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false })
    return next()
  } catch (err) {
    const yupError = err as yup.ValidationError
    const errors: Record<string, string> = {}
    yupError.inner.forEach((error) => {
      if(error.path === undefined) return
      errors[error.path] = error.message
    })
    return res.status(StatusCodes.BAD_REQUEST).json({errors: errors})
  }
}

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body)
  return res.send('OKKKK');
};
