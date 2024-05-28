<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  data: IEmployee;
}

defineProps<EmployeeProps>();

</script>

<template>
  <article>
    <h2>{{ data.first_name }}</h2>
    <h2>{{ data.last_name }}</h2>
    <div class="imgContainer">
      <img :src="data.avatar" :alt="data.first_name" />
    </div>
  <h3>{{ data.email }}</h3>
  </article>
</template>

<style scoped lang="scss">
.imgContainer {
  img {
    width: 100%;
  }
}
</style>
