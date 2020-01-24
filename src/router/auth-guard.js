import { store } from '../store/'

export default (to, from, next) => {
  if (store.state.usuario.usuario) {
    if(to.name === 'login') {
      next("/")
    }
    next()
  } else {
    next('/login')
  }
}