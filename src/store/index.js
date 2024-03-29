import {createStore} from 'vuex';
import rootMutations from '@/store/mutations';
import rootActions from '@/store/actions';
import rootGetters from '@/store/getters';
import productsModule from "@/store/modules/product";
import cartModule from "@/store/modules/cart";


const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule,
    },
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
