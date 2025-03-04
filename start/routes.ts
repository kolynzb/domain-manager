/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { loginValidator } from '#validators/auth'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.get('/login', async ({ inertia, request }) => {
  const data = await request.validateUsing(loginValidator)
  return inertia.render('auth/login')
})
