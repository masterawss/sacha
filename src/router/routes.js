
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'index', meta: { auth: true } },
      { path: 'landing', component: () => import('pages/Landing.vue'), name: 'landing' },
      // { path: 'lugares', component: () => import('pages/Lugar/Index.vue'), name: 'lugar.index' },
      // { path: 'lugar/:id', component: () => import('pages/Lugar/Show.vue'), name: 'lugar.show' },
      { path: 'register/guia', component: () => import('pages/Register/Guia.vue'), name: 'register.guia', meta: { auth: true } },
      { path: 'welcome', component:() => import('pages/Welcome/Show.vue'), name: 'welcome', meta: { auth: true } },
      { path: 'prueba', component:() => import('pages/Prueba.vue'), name: 'prueba' },
    ]
  },
  { path: '/lista-lugares/:categoria', component: () => import('pages/Lugar/ListLugares.vue'), name: 'lugares.lista', meta: { auth: true } },
  { path: '/lugar/:id', component: () => import('pages/Lugar/Show.vue'), name: 'lugar.show', meta: { auth: true } },
  { path: '/crear-lugar', component: () => import('pages/Lugar/Create.vue'), name: 'lugar.create', meta: { auth: true } },
  { path: '/perfil/:id?', component: () => import('pages/Perfil/Show.vue'), name: 'perfil.show', meta: { auth: true } },
  { path: '/perfil/edit', component: () => import('pages/Perfil/Edit.vue'), name: 'perfil.edit', meta: { auth: true } },
  { path: '/perfil-mis_lugares', component: () => import('pages/Perfil/MisLugares.vue'), name: 'perfil.mis_lugares', meta: { auth: true } },
  { path: '/perfil-subscripcion', component: () => import('pages/Perfil/Subscripcion.vue'), name: 'perfil.subscripcion', meta: { auth: true } },
  { path: '/login', component: () => import('pages/Login.vue'), name: 'login' },
  { path: '/signup', component: () => import('pages/Signup.vue'), name: 'signup' },
  { path: '/settings', component: () => import('pages/Settings.vue'), name: 'perfil.settings', meta: { auth: true } },
  { path: '/visitar-lugar/:id', component: () => import('pages/Lugar/Visitar.vue'), name: 'lugar.visitar', meta: { auth: true } },
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
