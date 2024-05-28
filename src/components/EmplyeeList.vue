<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Employee from './Employee.vue';
import { IEmployee } from '../models/IEmployee';
import { getEmployees } from '../services/employeeService';

const employees = ref<IEmployee[]>([]);
const currentPage = ref(1);

const getPagingEmployees = async (page: number) => {
  employees.value = await getEmployees(page);
};
onMounted(() => {
  getPagingEmployees(currentPage.value);
});

const nextPage = () => {
    currentPage.value++;
    getPagingEmployees(currentPage.value);
  }


const prevPage = () => {
    currentPage.value--;
    getPagingEmployees(currentPage.value)
  }



</script>



<template>
    <div id="employeediv">
      <Employee v-for="employee in employees" :key="employee.id" :data="employee" />
    </div>
    <div id="paging">
        <button @click="prevPage">Previous</button>
        <button @click="nextPage">Next</button>
    </div>
  </template>
  

  
  <style scoped lang="scss">
#employeediv {
  display: flex;
  justify-content: space-evenly;
  gap: 100px;
}
  </style>
  