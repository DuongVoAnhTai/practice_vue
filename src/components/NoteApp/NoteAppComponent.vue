<script setup>
import { onMounted, reactive, ref } from 'vue'
import NoteForm from './NoteForm.vue'

const container = ref(false)
const title = ref('')
const content = ref('')
const titleList = reactive([])

onMounted(() => {
  // Get item from localStorage with JSON
  const savedNotes = localStorage.getItem('notes')
  if (savedNotes) {
    // Change JSOn to array of object
    const parseNotes = JSON.parse(savedNotes)
    titleList.push(...parseNotes)
  }
})

const saveToLocalStorage = () => {
  localStorage.setItem('notes', JSON.stringify(titleList))
}

const handleAddNote = () => {
  container.value = !container.value
}

const handleSaveBtn = () => {
  if (title.value || (title.value && content.value)) {
    titleList.push({
      title: title.value,
      content: content.value,
    })
    saveToLocalStorage()
    title.value = ''
    content.value = ''
    container.value = !container.value
  }
}
const handleDeleteBtn = () => {
  title.value = ''
  content.value = ''
}

const handleNoteClick = (index) => {
  container.value = !container.value
  title.value = titleList[index].title
  content.value = titleList[index].content
}

const updateTitle = (value) => {
  title.value = value
}

const updateContent = (value) => {
  content.value = value
}
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <button class="add-btn" @click="handleAddNote">+Add note</button>
      <h1>Note Taking App</h1>
    </header>

    <!-- <div class="container" v-if="container">
      <div class="btn-group">
        <button class="save-btn" @click="handleSaveBtn">Save</button>
        <button class="delete-btn" @click="handleDeleteBtn">Delete</button>
      </div>

      <input type="text" class="title-input" placeholder="Title" v-model.lazy="title" />
      <textarea
        name=""
        id=""
        class="content-input"
        placeholder="Content"
        v-model.lazy="content"
      ></textarea>
    </div> -->

    <NoteForm
      v-if="container"
      :title="title"
      :content="content"
      :onSave="handleSaveBtn"
      :onDelete="handleDeleteBtn"
      :onUpdateTitle="updateTitle"
      :onUpdateContent="updateContent"
    />

    <ul v-else class="note-list">
      <li v-for="(value, index) in titleList" :key="index" @click="handleNoteClick(index)">
        {{ value.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 50px;
  width: 500px;
}

.header {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.add-btn {
  width: 100px;
  padding: 10px;
  border-radius: 12px;
  background-color: #2c3133;
  color: white;

  &:hover {
    background-color: #555c5f;
  }
}

/* .container {
  width: 100%;
  min-height: 500px;
  margin: 20px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.btn-group {
  display: flex;
  justify-content: space-between;
  background-color: #107592;
  border-radius: 12px;
}

.save-btn,
.delete-btn {
  padding: 14px;
  background-color: #107592;
  color: white;

  &:hover {
    background-color: #38879c;
  }
}

.save-btn {
  border-top-left-radius: 12px;
}

.delete-btn {
  border-top-right-radius: 12px;
}

.title-input {
  width: 100%;
  height: 80px;
  background-color: #a7ccd5;
  font-size: 2.5rem;
  padding: 30px;
}

.content-input {
  width: 100%;
  min-height: 400px;
  padding: 30px;
  background-color: #f5f5db;
  font-size: 1.6rem;
} */

.note-list {
  width: 150px;
  text-align: center;
  margin: 20px auto;
}

li {
  margin: 12px;
  background-color: #ccc;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #8a8989;
  }
}
</style>
