<template>
  <header class="container header rounded">
    <h1>Todo list!</h1>
    <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    -->
  </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;

}

.header a {
  color: #fff;
  text-decoration: none;
}
</style>
