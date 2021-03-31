<template>
   <div class="container">
     <div class="" >
     <button type="button" class="btn btn-outline-secondary action_btn" v-on:click="created()">To be done </button> 
     <button type="button" class="btn btn-outline-warning action_btn" v-on:click="created(true)" >Completed</button>
     </div>
     <br>
     <AddItem v-on:add-todo="addTodo" />
     <br>
   <Todos v-bind:todoList="todoList" 
   v-on:del-todo="handleClick" v-on:win-todo="completeTask"/> 
  </div>
 
</template>

<script>
import axios from "axios";
import Todos from "../components/Todos.vue";
import AddItem from "../components/AddItem.vue";

export default {
  name: 'Home',
  components: {
    Todos,
    AddItem,
    
  },
  data() {
    return {
      todoList: [this.created()],
    };
    
},
methods:{
created(isCompleted = false) {
      axios
        .get(`https://localhost:44381/api/TaskController/GetTaskList`, {params: {'isCompleted' : isCompleted}}) 
        .then(response => {this.todoList = response.data})
        .catch(error => console.log(error))
    },
    
    addTodo(newTodo) {
      const { text, date, isCompleted } = newTodo;
      axios.post('https://localhost:44381/api/TaskController/PostTask/', {text, date, isCompleted})
      .then(res => this.todoList.push(res.data))
      .catch(err => console.log(err));
      
    },
    /* button used for deleting tasks with confirmation box */
    handleClick(id){
      this.$confirm(
        {
          message: `Do you want to delete the task?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: confirm => {
            if(confirm) {
              axios.delete(`https://localhost:44381/api/TaskController/DeleteTask/`, {data: {'id' : id }})
      .then(this.todoList = this.todoList.filter((todo) => todo.id != id))
      .catch(err => console.log(err))
            }
          }
        }
      )
    },
    /* button which changes tasks status to "completed" */
    completeTask(id){
            axios.put(`https://localhost:44381/api/TaskController/PutTaskIsCompleted/`,{id})
            .then(this.todoList = this.todoList.filter((todo) => todo.id != id))
            .catch(err => console.log(err))
    }
}
}


</script>

<style >

    .action_btn {
width: 50%;
    }

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn:hover {
  background: #666;
}

</style>
