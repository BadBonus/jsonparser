<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">View</router-link> |
      <router-link to="/editor">JSON Editor</router-link> |
      <router-link to="/text-editor">Text Editor</router-link>
    </div>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
