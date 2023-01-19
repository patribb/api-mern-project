import { Request, Response } from 'express';
//import { StatusCodes } from 'http-status-codes';

interface ICity {
  name: string
}

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body.name)
  return res.send('OKKKK');
};
