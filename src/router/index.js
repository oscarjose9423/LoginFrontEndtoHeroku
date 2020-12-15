import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },

  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
      
    //                            ! IMPORTANTE !
    // el CHUNCK SE IMPORTA LOS COMPONENTE UNA VEZ ES LLAMADA LA RUTA, PARA QUE NO SE CARGUE 
    // AL INICIALIZARSE EL HOME, a no ser que los componente de esta ruta le esten enviando 
    // informacion al home
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{
      requeiresAuth: true
    }
  }
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue'),
    
//                              ! HIJOS !

  //   // children es uno de los hijos de los enlaces iniciales que no aparecen en la pantalla principal
    
  //   children: [
  //     {
  //       path: 'services/asesoria',
  //       name: 'Asesoria',
  //       component: () => import(/* webpackChunkName: "asesoria" */ '../views/Asesoria.vue'),
  //     }

  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// // propiedad del router para validar la autenticación para otras rutas
// para que identifique que la pagina que estamos visitando to.matched.some crequiere autenticación
// de requerirla continua con el primer if.
router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requeiresAuth)){
    if(localStorage.getItem('jwt') === null){
      next({
        path: '/'
      })
    }else{
      next();
    }
  }
  else{
    next();
  }
})


