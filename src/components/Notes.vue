<template>
  <div class="shadow-wrapper">
    <DeletePopup
      v-if="isPopupVisible"
      @closePopup="closePopup"
      v-bind:noteId="noteId"
    />
    <div class="card" v-for="note of notes" :key="note.id">
      <div class="card-content">
        <h3>{{ note.title }}</h3>
        <div v-if="note.todo.length === 1 || note.todo.length === 2">
          <p v-for="(todo, idx) of note.todo" :key="idx">
            {{ todo.title }}
          </p>
        </div>
        <div v-else-if="note.todo.length > 2">
          <p>{{ note.todo[0].title }}</p>
          <p>{{ note.todo[1].title }}</p>
        </div>
        <div v-else-if="!note.todo.length">
          <p>No todos</p>
        </div>
      </div>
      <div class="card-actions">
        <router-link
          tag="button"
          class="btn btn-primary"
          :to="'/change/' + note.id"
        >
          Change
        </router-link>
        <button class="btn btn-danger" @click="deleteNote(note.id)">
          Delete
        </button>
      </div>
    </div>
    <div class="center" v-if="!notes.length">Сreate your first note!</div>
  </div>
</template>

<script>
import DeletePopup from "../components/Delete-popup";
export default {
  data: () => ({
    isPopupVisible: false,
    noteId: null,
  }),
  methods: {
    deleteNote(id) {
      this.noteId = id;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
  components: { DeletePopup },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
}
p {
  color: rgb(158, 158, 158);
}
.center {
  text-align: center;
}
</style>
