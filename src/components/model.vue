<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1>{{this.Model_Name}}</h1>
            </div>

            <div class="card-body">
                <h1>{{this.Model_ID}}</h1>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'v-model',
  props: {
    Make_ID: Number,
    Make_Name: String,
    Model_ID: Number,
    Model_Name: String
  },

}
</script>

<style scoped>
</style>
