import Home from './pages/home'
import Erro404 from './pages/erro404'

export default [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Erro404,
    path: '*',
  },
]
