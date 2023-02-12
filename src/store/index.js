import { createStore } from 'vuex'

import modulesAuth from '@/store/modules/auth'

export default createStore({
  modules: {
    auth: modulesAuth,
  },
})
