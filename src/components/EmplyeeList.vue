<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Employee from './Employee.vue';
import { IEmployee } from '../models/IEmployee';
import { getEmployees } from '../services/employeeService';

const employees = ref<IEmployee[]>([]);

onMounted(async () => {
  employees.value = await getEmployees();
});
</script>


<template>
    <div>
      <Employee v-for="employee in employees" :key="employee.id" :data="employee" />
    </div>
  </template>
  

  
  <style scoped lang="scss">

  </style>
  