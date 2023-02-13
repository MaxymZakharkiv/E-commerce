export const routes = [
  {
    path: '/',
    name: 'main-layout',
    component: () => import('@/layouts/MainLayout'),
    children: [
      {
        path: '',
        name: 'main-page',
        component: () => import('@/views/Main/MainPage'),
      },
      {
        path: '/my-account',
        name: 'my-account',
        component: () => import('@/views/Main/UserAccount'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth-layout',
    component: () => import('@/layouts/AuthLayout'),
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: () => import('@/views/Auth/SignIn'),
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('@/views/Auth/SignUp'),
      },
    ],
  },
]
