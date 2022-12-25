import { loginSchema } from '@auth/schemes/signin';
import { joiValidation } from '@global/decorators/joi-validation.decorators';
import { Request, Response } from 'express';

export class SignIn {
  @joiValidation(loginSchema)
  public async read(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
  }
}
