<template>
  <div style="margin-bottom: 10px" class="todo-item rounded list-group-item list-group-item-action list-group-item-info">
      <p v-if=" todo != null">
        <span class="font-weight-bold">
     {{ todo.text}}
     </span>
      <br>
      <span class="font-weight-light">
      {{ todo.date | formatDate }}
      </span>
      <button @click="$emit('win-todo', todo.id)" class="btn-success rounded float-right btn-lg">V</button>
      <button  @click="$emit('del-todo', todo.id)" class="btn-danger rounded float-right btn-lg">X</button>
    </p>
    </div>
</template>

<script>

export default {

    name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      todoList: this.todo,
    };
  }
}
</script>


<style scoped>
.todo-item {
  text-align: justify;
}

</style>

