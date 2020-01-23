import { store } from '../store/'

export default (to, from, next) => {
  if (store.state.usuario.usuario) {
    next()
  } else {
    next('/login')
  }
}