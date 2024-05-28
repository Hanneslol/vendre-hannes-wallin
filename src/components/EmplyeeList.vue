<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Employee from './Employee.vue';
import { IEmployee } from '../models/IEmployee';
import { getEmployees } from '../services/employeeService';

const employees = ref<IEmployee[]>([]);
const total_pages = ref<number>();
const currentPage = ref(1);

const getPagingEmployees = async (page: number) => {
  const response = await getEmployees(page);
  employees.value = response.data;
  total_pages.value = response.total_pages;
};
onMounted(() => {
  getPagingEmployees(currentPage.value);
});

const goToPage = (page: number) => {
  currentPage.value = page;
  getPagingEmployees(page);
  
  
}
const nextPage = (total_pages:number) => {
    if (currentPage.value < total_pages){
    currentPage.value++;
    getPagingEmployees(currentPage.value);
  }
}


const prevPage = () => {
    if (currentPage.value > 1){
    currentPage.value--;
    getPagingEmployees(currentPage.value)
  }
  
}


</script>

<template>
    <div id="employeediv">
      <Employee v-for="employee in employees" :key="employee.id" :data="employee" />
    </div>
    <div id="pagination">
    <button @click="prevPage">Previous</button>
    <div v-for ="pageNumber in total_pages">
        <button @click="goToPage(pageNumber)" :class="{'active-page': pageNumber === currentPage}">{{pageNumber}}</button>
    </div>
    <button @click="nextPage(total_pages as number)">Next</button>
  </div>
  </template>
  

  
  <style scoped lang="scss">
#employeediv {
  display: flex;
  justify-content: space-evenly;
  gap: 100px;
}
#pagination {
  display: flex;
  margin: 50px;
  justify-content: center;
}
button {
  opacity: 0.5;
}
button:hover {
  opacity: 1;
}
.active-page {
  opacity: 1;
  pointer-events: none;
}
  </style>
  