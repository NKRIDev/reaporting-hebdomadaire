/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/api/hello', async () => {
  return {
    message: 'Hello depuis le BACKEND ! adonisjs',
  }
})
