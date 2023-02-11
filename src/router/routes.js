export const routes = [
  {
    path: '/',
    name: 'main-layout',
    component: () => import('@/layouts/MainLayout'),
    children: [],
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
];
