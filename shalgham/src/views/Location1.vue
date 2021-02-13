<template>
  <div class="location1">
    <div>
       <GmapMap
        :center="{ lat: 10, lng: 10 }"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 70vh"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GmapMap>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
 
  data(){
    return {
      center:{ lat: 10, lng:10},
      markers:[
        {
          position:{ lat:11, lng:11}
        },
        {
          position:{ lat:9, lng:9}
        },
      ]
    }
  }
};
</script>

