<script>
export default {
  name: 'SingleCar',
  props: {
    car: Object
  }

}

</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ car.brand }}</h5>
      <p class="card-text text-uppercase">{{ car.model }}</p>
      <span class="badge text-bg-secondary">€ {{ car.price }}</span>
    </div>
  </div>
</template>