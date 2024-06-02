<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  data: IEmployee;
}

defineProps<EmployeeProps>();
</script>

<template>
  <article class="employee-card">
    <div class="employee-card__img-container">
      <img :src="data.avatar" :alt="`${data.first_name} ${data.last_name}`" />
    </div>
    <h2>{{ data.first_name }} {{ data.last_name }}</h2>
    <div class="employee-card__contact">
      <a :href="`mailto:${data.email}`">Contact me</a>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";

.employee-card {
  background-color: rgba(255, 255, 255, 0.562);
  border-radius: 5%;
  width: 200px;
  height: 250px;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &__img-container {
    img {
      width: 100px;
      min-height: 100px;
      object-fit: cover;
      transition: transform 0.2s;
      margin-top: 30px;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(to bottom, #cbddff, #fcd0ef) border-box;
      border-radius: 50%;
      border: 4px solid transparent;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  h2 {
    color: $text-color;
    font-size: 1.2rem;
    margin-top: 20px;
    margin-bottom: 0px;
  }

  &__contact {
    a {
      font-weight: 500;
      color: $text-color;
      text-decoration: inherit;
      transition-duration: 0.2s;

      &:hover {
        color: #5a94ff;
        font-size: 1.05rem;
      }
    }
  }
}
</style>
