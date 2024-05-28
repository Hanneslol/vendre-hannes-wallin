<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  data: IEmployee;
}

defineProps<EmployeeProps>();
</script>

<template>
  <article>
    <h2>{{ data.first_name }} {{ data.last_name }}</h2>
    <div class="imgContainer">
      <img :src="data.avatar" :alt="data.first_name" />
    </div>
    <h3>{{ data.email }}</h3>
    <div class="contact">
      <a :href="`mailto:${data.email}`">Contact me</a>
    </div>
  </article>
</template>

<style scoped lang="scss">
.imgContainer {
  img {
    width: 100px;
    border-radius: 50%;
    min-height: 100px;
    object-fit: cover;
    transition: transform 0.2s;
  }
}

img:hover {
  transform: scale(1.2);
}
h3 {
  font-size: 1rem;
}
</style>
