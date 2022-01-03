import {createStore} from 'vuex';
import rootMutations from '@/store/mutations';
import rootActions from '@/store/actions';
import rootGetters from '@/store/getters';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
})

export default store;
