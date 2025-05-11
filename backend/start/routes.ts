/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from "#controllers/Http/AuthController";

router.get('/', async () => {
  return {
    hello: 'world',
  }
});

router.get('/api/hello', async () => {
  return {
    hello: 'Bonjour depuis AdonisJS!',
  }
});

const authController = new AuthController();
router.post("/login", (ctx) => authController.login(ctx));
