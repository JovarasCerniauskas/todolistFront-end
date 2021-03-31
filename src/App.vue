<template>
  <div id="container" class="">
    <div id="nav">
      <Header />
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      <vue-confirm-dialog></vue-confirm-dialog>
    </div>
    <router-view @authenticated="setAuthenticated" />
    <router-view/>
  </div>
</template>

<script>
 import Header from './components/layout/Header.vue'
  export default {
  components: {
  Header
  },
  name: 'App',
  data(){
    return{
      authenticated: false,
      mockAccount: {
        username: "admin",
        password: "password"
      }
    }
  },
  mounted() {
    if(this.authenticated){
      this.$router.replace({name: "login"});
    }
  },
  methods: {
    setAuthenticated(status){
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
