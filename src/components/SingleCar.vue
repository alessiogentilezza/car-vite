<script>
    export default{
        name: 'SingleCar',
        props:{
            SingleCar: Object
        }
    
    }
    
</script>

<template>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ SingleCar.brand }}</h5>
    <p class="card-text">{{ SingleCar.model }}</p>
    <a href="#" class="btn btn-primary">{{ SingleCar.price }}</a>
  </div>
</div>
</template>