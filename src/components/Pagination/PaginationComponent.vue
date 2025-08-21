<script setup>
import { computed, ref } from 'vue'
import data from './data'

const currentPage = ref(1)
const itemPerPage = 4

const start = computed(() => {
  return (currentPage.value - 1) * itemPerPage
})

const paginationData = computed(() => {
  const end = start.value + itemPerPage
  return data.slice(start.value, end)
})

const totalPages = computed(() => {
  return Math.ceil(data.length / itemPerPage)
})

const handlePreBtn = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const handleNextBtn = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const handlePagination = (page) => {
  currentPage.value = page
}

const isActive = (page) => {
  return currentPage.value === page ? 'active' : ''
}
console.log(currentPage.value)
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <h1>Pagination in HTML CSS & JavaScript</h1>
    </header>

    <div class="container">
      <div class="card" v-for="(item, index) in paginationData" :key="index">
        <img :src="item.img" alt="Mern" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="btn-group">
      <button class="btn pre-btn" @click="handlePreBtn">Previous</button>
      <button
        class="btn pagination-btn"
        :class="isActive(index + 1)"
        v-for="(_, index) in totalPages"
        :key="index"
        @click="handlePagination(index + 1)"
      >
        {{ index + 1 }}
      </button>
      <button class="btn next-btn" @click="handleNextBtn">Next</button>
    </div>
    <p>Page {{ currentPage }} of {{ totalPages }}</p>
  </footer>
</template>

<style>
.wrapper {
  text-align: center;
  margin-top: 50px;
}

.header {
  margin: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}

img {
  width: 300px;
  height: 200px;
  margin: 12px;
  border-radius: 12px;
}

.card {
  width: 320px;
  min-height: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

h3 {
  margin: 8px;
}

.footer {
  text-align: center;
  margin-top: 40px;
}

.btn-group {
  margin: 12px;
}

.btn {
  margin: 6px;
  padding: 5px;
  border: 1px solid #1580f1;
  background-color: white;
  color: #1580f1;

  &:hover {
    background-color: #1580f1;
    color: white;
  }
}

.pagination-btn {
  min-width: 30px;
}

.active {
  background-color: #1580f1;
  color: white;
}
</style>
