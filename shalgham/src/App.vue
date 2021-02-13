<template>
  <div id="app">
    <div id="nav">
      <div class="hello">Hi... please joise Location</div>
      <div class="links">
        <router-link class="location-btn" to="/">Home</router-link> |
        <router-link class="location-btn" to="/location1">Location_1</router-link>
        <router-link class="location-btn" to="/location2">Location_2</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.location-btn {
  margin: 30px;
  background: rgb(35, 123, 150);
}
.vue-map-container{
  width:90%;
}
</style>
