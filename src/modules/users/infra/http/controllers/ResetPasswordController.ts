import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ResetPasswordService from '../../../services/ResetPasswordService';

export default class ResetPasswordController {
  public static async create(req: Request, res: Response): Promise<Response> {
    const { token, password } = req.body;
    const resetPassword = container.resolve(ResetPasswordService);
    await resetPassword.execute({ token, password });
    return res.status(204).json();
  }
}
