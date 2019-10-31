/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { jx_create, jx_read, jx_delete, jx_updateById, jx_update, field } from './jexia'

Vue.use(Vuex)

const state = {
  todos: [],
}

const mutations = {
  init(state, data) {
    if (Array.isArray(data)) {
      data.forEach((element) => {
        state.todos.push(element)
      })
    } 
  },
  addTodo(state, todo) {
    // as soon as Jexia return array always we need to merge arrays  
    todo.forEach((element) => {
      state.todos.push(element)
    })
  },
  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  editTodo(state, data) {
    data.forEach(res=>{
      var foundIndex = state.todos.findIndex(x => x.id == res.id);
      state.todos[foundIndex] = res;
    })
    
  }
}

const actions = {
  init({ commit }) {
    jx_read().then(data=>commit("init", data))
    commit('init')
  },

  addTodo({ commit }, text) {
    let data= {
      text,
      done: false
    }
    jx_create(data).then(res=>commit('addTodo', res))
  },
  removeTodo({ commit }, todo) {
    jx_delete(todo.id).then(res=>commit('removeTodo', todo))
  },
  toggleTodo({ commit }, todo) {
    todo.done=!todo.done
    jx_updateById(todo.id,todo).then(res=>commit('editTodo', res )) //as soon as Jexia return array in resutl we need to take 1st element 
  },
  editTodo({ commit }, { todo, value }) {
    todo.text=value
    jx_updateById(todo.id,todo).then(res=>commit('editTodo', res )) //as soon as Jexia return array in resutl we need to take 1st element 
  },
  clearCompleted({ state, commit }) {
    jx_delete(null,field("done").isEqualTo(true))
    .then(res=>res.forEach(todo => {commit('removeTodo', todo)}))
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})
