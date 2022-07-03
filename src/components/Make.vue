<template>
    <p class="v-make text-center">{{this.id}} - {{this.name}}</p>
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
    width: 90%;
    margin-left: 5%;
}
</style>
