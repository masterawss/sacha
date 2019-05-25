
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'lugares', component: () => import('pages/Lugar/Index.vue'), name: 'lugar.index' },
      { path: 'lugar', component: () => import('pages/Lugar/Show.vue'), name: 'lugar.show' },
      { path: 'register/guia', component: () => import('pages/Register/Guia.vue'), name: 'register.guia' },
    ]
  },
  // { path: '', component: () => import('pages/Index.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
