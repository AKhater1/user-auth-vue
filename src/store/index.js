import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
Vue.use(Vuex);
Vue.use(VueRouter);


export default new Vuex.Store({
  state: {
    state: {
      idToken: null,
      userId: null,
      user: null
    }
  },

  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    clearAuth (state) {
      state.idToken = null
      state.userId = null
    }
  },
  
  actions: {
  
  signup ({commit}, authData) {
    axios.post('https://think-smarter.lenovomeaevents.com/auth/register', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    .then(res => {
      console.log(res)
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId
      })
      localStorage.setItem('token', res.data.idToken)
      localStorage.setItem('userId', res.data.localId)
      VueRouter.push("/home")
    })
    .catch(error => console.log(error))
  },

  login ({commit}, authData) {
    axios.post('https://think-smarter.lenovomeaevents.com/auth/login', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    .then(res => {
      console.log(res)
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId
      })
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
      VueRouter.push("/home")
    })
    .catch(error => console.log(error))
    },

    logout ({commit}) {
      axios.post('https://think-smarter.lenovomeaevents.com/auth/logout', {
        
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
        commit('clearAuth')
          localStorage.clear
          VueRouter.replace("/home")
        })
      .catch(error => console.log(error))
    }
  },
  
  modules: {
    onSubmit () {
      const formData = {
        email : this.email,     
        password : this.password
      }
      this.$store.dispatch('signin', formData)
      }
    },

    getters: {
      user (state) {
        return state.user
      },
      ifAuthenticated (state) {
        return state.idToken !== null
      }
    }

});
