import {HttpContext} from "@adonisjs/core/http";
import Env from "#start/env";

export default class AuthController {
  public async login({ request, response, session }: HttpContext) {
    const { password } = request.only(['password']);
    const correctPassword = Env.get("ADMIN_PASSWORD");

    if (password === correctPassword) {
      session.put('isLoggedIn', true);
      return response.ok({ message: 'Connexion réussie' });
    }

    return response.unauthorized({ message: 'Mot de passe incorrect' });
  }
}
