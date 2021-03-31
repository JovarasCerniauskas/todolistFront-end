<template>
  <div class="rounded">
    <form @submit="addTodo">
      <input class="form-control" type="text" v-model="text" name="text" placeholder="Add new task" required />
      <input class="btn btn-primary btn-sm btn btn-success" type="submit" value="Add task" />
    </form>
  </div>
</template>

<script>

export default {
  name: "AddTodo",
  data() {
      return {
          text: ''
      }
  },
  methods: {
      addTodo(e) {
          e.preventDefault();
          const newTodo = {
                text: this.text,
                date: new Date(),
                isCompleted: false
          }
          this.$emit('add-todo', newTodo);

          this.text= '';
      }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>
