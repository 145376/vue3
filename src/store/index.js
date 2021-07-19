import {createStore} from 'vuex'
import getters from './gettter'
import layout from './modules/layout'

export default createStore({
  modules:{
    layout
  },
  getters
})