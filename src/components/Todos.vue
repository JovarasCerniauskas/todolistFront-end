<template>
    <div v-if=" todoList != null" > 
    <div  v-for="(todo, index) in todoList" :key="`todo-${index}`">
    <TodoItem  v-bind:todo="todo" 
    v-on:del-todo="$emit('del-todo', todo.id)"
     v-on:win-todo="$emit('win-todo', todo.id)"/>
    </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
    name: "Todos",
  components: {
    TodoItem
  },
  props: ["todoList"],
  methods: {
    
  }

}

</script>

