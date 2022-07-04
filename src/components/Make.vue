<template>
    <button @click="openSingleMake()" class="btn btn-primary v-make text-center">{{this.id}} - {{this.name}}</button>
</template>

<script>
export default {
  name: 'v-Make',
  props: {
    id: Number,
    name: String,
  },
}
</script>

<style>
.v-make{
    background-color: skyblue;
    /* width: 90%; */
    width: 300px;
    /* margin-left: 5%; */
}
</style>
