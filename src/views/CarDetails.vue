<template>
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <div class="card-text">
                            <div> {{ this.car.brand }}</div>
                            <div> {{ this.car.model }}</div>
                            <div> {{ this.car.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleCar from '../components/SingleCar.vue';
import axios from 'axios';

export default {
    name: "CarsList",
    data() {
        return {
            car: [],
            UrlBase: "http://localhost:8000"
        };
    },
    methods: {
        async getCars() {
            await axios.get(`${this.UrlBase}/api/car/${this.$route.params.id}`).then(response => {
                console.log(response);
                this.car = response.data.result;
            });
        }
    },
    mounted() {
        this.getCars();
    },
    components: { SingleCar }
}
</script>