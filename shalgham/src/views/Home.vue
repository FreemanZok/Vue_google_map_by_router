<template>
  <div class="home">
    <offline @detected-condition="handleConnectivityChange"> </offline>

    <div v-bind:class="[online ? 'on-line' : 'off-line']">
    internet connection 

      <h1 v-if="online">I'm OnLine :)</h1>
      <h1 v-else>Ooh, OffLine... :(</h1>
    </div>
  </div>
</template>

<script>
import offline from "v-offline";

export default {
  data() {
    return {
      online: "",
      offline: "",
    };
  },
  components: {
    offline,
  },
  methods: {
    handleConnectivityChange(status) {
      console.log(status);
      if (status) {
        this.online = true;
        this.offline = false;
      } else {
        this.online = false;
        this.offline = true;
      }
    },
  },
};
</script>


<style>
.on-line {
  background: rgb(65, 225, 172);
  text-align: center;
  color: beige;
  padding: 60px;
}
.off-line {
  background: rgb(255, 160, 195);
  text-align: center;
  color: beige;
}
</style>

