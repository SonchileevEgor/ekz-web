<template>
    <h3><b>All Models by Make_ID: ({{chosen_make}})</b></h3>
    <p v-for="model in allModels.Results" :key="model">
        {{model.Model_Name}}
    </p>
</template>

<script>
export default {
  name: 'v-models',
  data() {
    return {
      allModels: [],
      chosen_make: '',
    }
  },
  props: {
    data: String
  },
  methods: {

    async getFilterData() {
      var url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/" + this.$root.$refs.makeId.value + "?format=json";
      fetch(url)
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          this.allModels = data;
          this.chosen_make = data.Results[0].Make_Name;
          localStorage.setItem('allModels', JSON.stringify(this.allModels));
          localStorage.setItem('chosen_make', JSON.stringify(this.chosen_make));
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },

    sortByName() {
        this.allModels.Results.sort(function (a, b) {
            if (a.Model_Name > b.Model_Name)
                return 1;
            if (a.Model_Name < b.Model_Name)
                return -1;

            return 0;
        }); 
    },
    
  },

  beforeMount: function() {
      if (!JSON.parse(localStorage.getItem('allModels')))
        alert ('local storage is empty!');
  },

  updated: function() {
    alert('models found: ' + this.allModels.Count);
  },

  mounted: function() {
    this.allModels = JSON.parse(localStorage.getItem('allModels'));
    this.chosen_make = JSON.parse(localStorage.getItem('chosen_make'));
  }
}
</script>

<style scoped>
</style>
