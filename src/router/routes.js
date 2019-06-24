
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'index' },
      { path: 'lugares', component: () => import('pages/Lugar/Index.vue'), name: 'lugar.index' },
      { path: 'lugar/:id', component: () => import('pages/Lugar/Show.vue'), name: 'lugar.show' },
      { path: 'register/guia', component: () => import('pages/Register/Guia.vue'), name: 'register.guia' },
      { path: 'perfil/:id', component: () => import('pages/Perfil/Show.vue'), name: 'perfil.show' },
      { path: 'welcome', component:() => import('pages/Welcome/Show.vue'), name: 'welcome' }
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
