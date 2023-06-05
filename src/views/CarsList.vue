
<script>
import SingleCar from '../components/SingleCar.vue';
import axios from 'axios';

export default {
    name: "CarsList",
    data() {
        return {
            carsList: [],
            UrlBase: "http://localhost:8000"
        };
    },
    methods: {
        async getCars() {
            await axios.get(`${this.UrlBase}/api/cars`).then(response => {
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
    <div class="container">
        <div class="row py-5">
            <div class="col-10 mx-auto">
              <div class="row">
                <div v-for="car in carsList" class="col mb-3 text-center">
                    <SingleCar :car="car" />
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style></style>
