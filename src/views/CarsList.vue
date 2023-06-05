
<script>
import SingleCar from '../components/SingleCar.vue';
import SingleCar from '../components/SingleCar.vue';
import SingleCar from '../components/SingleCar.vue';
import axios from 'axios';

  export default{
    name: "CarsList",
    data() {
        return {
            carsList: [],
            UrlBase: "http://localhost:8000"
        };
    },
    methods: {
        async getCars() {
            await axios.get(`${UrlBase}/api/cars`).then(response => {
                this.carsList = response.data.results.data;
            });
        }
    },
    mounted() {
        this.getCars();
    },
    components: { SingleCar }
}
</script>


<template>
  <div v-for="car in carsList">
  <SingleCar :SingleCar="car"/>
  </div>
</template>

<style>

</style>
