<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  data: IEmployee;
}

defineProps<EmployeeProps>();
</script>

<template>
  <article class="employeeCard">
    <div class="imgContainer">
      <img :src="data.avatar" :alt="data.first_name" />
    </div>
    <h2>{{ data.first_name }} {{ data.last_name }}</h2>
    <!-- <h3>{{ data.email }}</h3> -->
    <div class="contact">
      <a :href="`mailto:${data.email}`">Contact me</a>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.employeeCard {
  // background-image: linear-gradient(to top, #b58caa 0%, #697a98 100%);
  background-color: #ffffff;
  border-radius: 5%;
  width: 200px;
  height: 250px;
  // filter: drop-shadow(0px 1px 1px #717171);
  box-shadow: 0px 1px 7px 0px rgba(122, 122, 122, 0.75);
}
.imgContainer {
  img {
    width: 100px;
    border-radius: 50%;
    min-height: 100px;
    object-fit: cover;
    transition: transform 0.2s;
    margin-top: 30px;
    border: #d5d5d5 5px solid;
  }
}

img:hover {
  transform: scale(1.2);
}
h3 {
  font-size: 1rem;
  color: black;
}
h2 {
  color: black;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 0px;
}

a {
  font-weight: 500;
  color: #000000;
  text-decoration: inherit;
  transition-duration: 0.2s;
}

a:hover {
  color: #7284a4;
  font-size: 1.07rem;
}
</style>
