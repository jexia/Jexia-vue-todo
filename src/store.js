/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import Jexia_API from './jexia'
import { jexiaClient, dataOperations, field } from 'jexia-sdk-js/browser' // We use browser as our code will be run on browser not as node app.

Vue.use(Vuex)

// We need to activate Data Operation to be able to use DataSet operation.
const dataModule = dataOperations()

// Do not forget to create CRUD Policy at JEXIA for JEXIA API, otherwise you will get 404 
/* const Jexia_API = {
  projectID: "project_id",   // Your Project ID at Jexia
  key: "API key",  // Your API key at Jexia
  secret: "API Secret", // Your API secret at JEXIA
} */

jexiaClient().init(Jexia_API, dataModule);
const Jexia = dataModule.dataset('todo') // DataSet name on Jexia Platform

const state = {
  todos: []
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
  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text
    todo.done = done
  }
}

const actions = {
  init({ commit }) {
    Jexia
      .select()
      //.fields('created_at', 'id', 'name')  // if we want to get some specific fields versus all record. As well need to do import { fields } from "jexia-sdk-js/browser";
      .sortDesc("created_at")  //let's identify based on wich field sorting will be
      .execute()
      .then((data) => {
        // All records from DataSet will be in data variable as a Array
        commit("init", data)
      }).catch((error) => {
        console.log(error)
      })
    commit('init')
  },
  addTodo({ commit }, text) {
    Jexia
        .insert({
          text,
          done: false
        })
        .execute()
        .then((result) => {
          commit('addTodo', result)  // Start mutation after receive feedback form Jexia
        }).catch((error) => {
          console.log(error)
        })
  },
  removeTodo({ commit }, todo) {
     Jexia
        .delete()
        .where(field("id").isEqualTo(todo.id))
        .execute()
        .then((data) => {
          commit('removeTodo', todo)
        }).catch((error) => {
          console.log(error)
        })   
  },
  toggleTodo({ commit }, todo) {
    todo.done=!todo.done 
    Jexia
        .update(todo)
        .where(field("id").isEqualTo(todo.id))  
        .execute()
        .then((data) => {
          commit('editTodo', { todo : data[0] }) //as soon as Jexia return array in resutl we need to take 1st element
        }).catch((error) => {
          console.log(error)
        })
  },
  editTodo({ commit }, { todo, value }) {
    todo.text=value
    Jexia
        .update(todo)
        .where(field("id").isEqualTo(todo.id))
        .execute()
        .then((data) => {
          commit('editTodo', { todo : data[0] }) //as soon as Jexia return array in resutl we need to take 1st element
        }).catch((error) => {
          console.log(error)
        })
  },
  toggleAll({ state, commit }, done) {
    // Not working yet
    /* Jexia
        .update({done:'false'})
        //.where(field("id").isNotNull())  // as soon as todo has ID field Jexia automatically fetch record and make update.
        .where(field("id").isEqualTo("9fbcd577-4005-4183-a38c-f03acb028b56")) 
        .execute()
        .then((data) => {
          console.log(data)
           data.forEach((todo) => {
            todo.done= done
            commit('editTodo', { todo : todo })
          }) 
        }).catch((error) => {
          console.log(error)
        }) */
  },
  clearCompleted({ state, commit }) {
    state.todos.filter(todo => todo.done)
      .forEach(todo => {
        commit('removeTodo', todo)
      })
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})
