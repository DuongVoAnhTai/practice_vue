<script setup>
defineProps({
  title: String,
  content: String,
  onSave: Function,
  onDelete: Function,
  onUpdateTitle: Function,
  onUpdateContent: Function,
})
</script>

<template>
  <div class="container">
    <div class="btn-group">
      <button class="save-btn" @click="onSave">Save</button>
      <button class="delete-btn" @click="onDelete">Delete</button>
    </div>

    <input
      type="text"
      class="title-input"
      placeholder="Title"
      @input="onUpdateTitle($event.target.value)"
      :value="title"
    />
    <textarea
      name=""
      id=""
      class="content-input"
      placeholder="Content"
      @input="onUpdateContent($event.target.value)"
      :value="content"
    ></textarea>
  </div>
</template>

<style scoped>
.container {
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
}
</style>
