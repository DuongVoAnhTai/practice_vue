<script setup>
import { ref } from 'vue'
import * as searchService from '@/services/searchServices'

const isLoading = ref(false)
const inputSearch = ref('')
const user = ref(null)

const fetchApi = async () => {
  if (!inputSearch.value) {
    return
  }

  isLoading.value = true
  user.value = null

  try {
    const res = await searchService.search(inputSearch.value)
    
    user.value = res
    console.log(user.value);
    
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="wrapper">
    <input
      type="text"
      class="search-input"
      placeholder="Search a Github User"
      v-model="inputSearch"
      @keyup.enter="fetchApi"
    />

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="user" class="container">
      <img :src="user.avatar_url" alt="" class="avatar" />

      <div class="info">
        <h2>{{ user.login }}</h2>
        <p>{{ user.followers }} Followers {{ user.following }} Following {{ user.public_repos }} Repos</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
  margin-top: 50px;
}

.search-input {
  width: 600px;
  height: 30px;
  border: 1px solid green;
  background-color: #f1e0c5;
  padding: 18px;
  margin: 12px;
  font-size: 1.6rem;
  border-radius: 12px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 500px;
  height: 250px;
  border-radius: 12px;
  margin: 20px auto;
  background-color: #8cf1f3;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid green;
}

.info {
  background-color: white;
  height: 150px;
  border-radius: 12px;
  padding: 12px;
}

p {
  margin-top: 12px;
}
</style>
