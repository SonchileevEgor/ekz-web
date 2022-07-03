<template>
  <h3><b>Total: {{allMakes.Count}}</b></h3>
  <div class="v-all">
    <p v-for="make in allMakes.Results" :key="make">
      <Make  :name="make.Make_Name" :id="make.Make_ID" />
    </p> 
    </div>
</template>

<script>
import Make from './Make.vue'
export default {
  name: 'allMakes',
  components: {
    Make
  }, 
  props: {
    allMakes: Object
  },
}
</script>

<style>
.v-all {
  background-color: antiquewhite;
}
</style>
