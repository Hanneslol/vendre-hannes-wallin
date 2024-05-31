<script setup lang="ts">
import { ref, onMounted } from "vue";
import Employee from "./Employee.vue";
import { IEmployee } from "../models/IEmployee";
import { getEmployees } from "../services/employeeService";

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
};
const nextPage = (total_pages: number) => {
  if (currentPage.value < total_pages) {
    currentPage.value++;
    getPagingEmployees(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    getPagingEmployees(currentPage.value);
  }
};
</script>

<template>
  <main>
    <header>
      <h1>Our Employees</h1>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          odio sed aliquam omnis eligendi, dolore quos dolores obcaecati. Dolor
          quas omnis esse atque quis et. Expedita, dolorum? Inventore, facilis
          aliquid.
        </p>
      </div>
    </header>
    <section id="employeediv">
      <Employee
        v-for="employee in employees"
        :key="employee.id"
        :data="employee"
      />
    </section>
    <nav id="pagination" aria-label="Employee pagination">
      <button class="previousPage" @click="prevPage" aria-label="Previous page">
        &lt;
      </button>
      <div v-for="pageNumber in total_pages" :key="pageNumber">
        <button
          @click="goToPage(pageNumber)"
          :class="{ 'active-page': pageNumber === currentPage }"
          :aria-label="'Page ' + pageNumber"
        >
          {{ pageNumber }}
        </button>
      </div>
      <button
        class="nextPage"
        @click="nextPage(total_pages as number)"
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";

#employeediv {
  display: flex;
  justify-content: space-around;
  gap: 50px;
  width: 600px;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 5rem;
}

@media only screen and (max-width: 768px) {
  #employeediv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

#pagination {
  display: flex;
  margin: 50px;
  justify-content: center;
}
button {
  background-color: $primary-color;
  opacity: 0.5;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);
  border: solid 1px rgb(163, 163, 163);
  color: $text-color;
  border-radius: 20%;
  width: 50px;
  height: 50px;
  margin: 2px;
}
button:hover {
  opacity: 1;
}
.active-page {
  opacity: 1;
  pointer-events: none;
}

.nextPage,
.previousPage {
  width: 50px;
  height: 50px;
}

.description {
  text-align: center;
  p {
    width: 600px;
    text-align: center;
    display: inline-block;
  }
}
</style>
