import { jexiaClient, dataOperations, field } from 'jexia-sdk-js/browser' // We use browser as our code will be run on browser not as node app.
// We need to activate Data Operation to be able to use DataSet operation.
const dataModule = dataOperations()

// Please bare in mind, we put here Key/ Secret just for test reason. So you will be able to test app strate away.
// In real app beeter to use middleware in NodeJS or by using Jexia UMS
const Jexia_API = {
    projectID: '4debe611-fb9b-4734-949c-6d39bb9ec4ae', // Your Project ID at Jexia
    key: 'b8876695-2a25-4b12-99eb-d30ef6af8fd6',  // Your API key at Jexia
    secret: '0ZyHP8RqClSx8DP3Wed0N44YfHPU02mffFsKBsLOkM0Hag+ds3uZpdn1Egkdc0XUgVfQ3kJetZjJqxfJJq494w==' // Your API secret at JEXIA
  } 

jexiaClient().init(Jexia_API, dataModule);
const Jexia = dataModule.dataset('todo') // DataSet name on Jexia Platform    

function jx_read(filter=field("id").isNotNull()) {
  return new Promise((resolve, reject) => {
    Jexia
      .select()
      //.fields('created_at', 'id', 'name')  // if we want to get some specific fields versus all record. As well need to do import { fields } from "jexia-sdk-js/browser";
      .where(filter)
      .sortAsc("created_at")  //let's identify based on wich field sorting will be
      .subscribe(
      data => {
        // All records from DataSet will be in data variable as a Array due to support for batch operations
          resolve(data)      
      },
      error => {
          reject(error)
      })
  })
}

function jx_create(data) {
  return new Promise((resolve, reject) => {
    Jexia
        .insert(data)
        .subscribe(
        res => {
          resolve(res)    
        },
        error => {
          reject(error)
        })
  })
}

function jx_delete(id,filter=field("id").isEqualTo(id)) {
    return new Promise((resolve, reject) => {
      Jexia
      .delete()
      .where(filter)
      .subscribe(
      res => {
        resolve(res)
      },
      error => { 
        reject(error)
      }) 
    })
}

function jx_updateById(id,data,filter=field("id").isEqualTo(id)) {
  let to_save = {
    done:data.done,
    text:data.text
  }
  return new Promise((resolve, reject) => {
    Jexia
        .update(to_save)
        .where(filter) 
        .subscribe(
        res => {
          resolve(res)
        },
        error => {
          reject(error)
        })
  })
}

function jx_update(to_save,filter=field("id").isEqualTo(id)) {
  return new Promise((resolve, reject) => {
    Jexia
        .update(to_save)
        .where(filter) 
        .subscribe(
        res => {
          resolve(res)
        },
        error => {
          reject(error)
        })
  })
}

export { Jexia, jx_create, jx_read, jx_delete, jx_updateById, jx_update, field }