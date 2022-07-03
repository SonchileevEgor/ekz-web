<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>NATIONAL HIGHWAY TRAFFIC SAFETY ADMINISTRATION</h1>
  <div class="card">
    <div class="card-header d-flex justify-content-around">
        <button @click="lsClear()" class="btn btn-danger">Очистить localStorage</button>
        <input ref="makeId" placeholder="Введите Make_ID" type="number" class="form-control w-25">
        <button @click="getModels()" class="btn btn-primary">Получить данные</button>
        <button @click="sortByName()" class="btn btn-secondary">Сортировать по имени</button>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h3><b>Unhandled data: </b></h3>
          <pre>
            {{allMakes}}
          </pre>
        </div>
        <div class="col">
          <h3><b><span class="v-all">Component</span> of <span style="background-color: skyblue;">components</span> :</b></h3>
          <allMakes :allMakes="this.allMakesClear"/>
        </div>
        <div class="col">
          <Models ref="allModels" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import allMakes from './components/allMakes.vue'
import Models from './components/Models.vue'

export default {
  name: 'App',
  data() {
    return {
      allMakes: [],
      allMakesClear: [],
    }
  },
  components: {
    allMakes, Models
  }, 
  methods: {
    async getData() {
      fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json")
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          this.allMakes = data;
          this.allMakesClear = data;
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },

    lsClear() {
      localStorage.clear();
      window.location.reload();
    },

    getModels() {
      this.$refs.allModels.getFilterData();
    },

    sortByName() {
      this.$refs.allModels.sortByName();
    }

  },

  mounted: function() {
    this.getData();
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
  margin-top: 60px;
}
</style>
