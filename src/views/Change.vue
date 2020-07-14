<template>
  <div class="shadow-wrapper">
    <CancelPopup 
      v-if="isPopupVisibleOut" 
      @closePopup="closePopup"/>
    <DeletePopup
      v-if="isPopupVisibleDel"
      @closePopup="closePopup"
      v-bind:noteId="noteId"
    />
    <h1>Edit note</h1>
    <hr />
    <div v-if="note">
      <form @submit.prevent="updateNote">
        <span class="note-control">
          <input class="change-input hb" v-model="title" type="text" />
          <span class="button-control">
            <button class="btn btn-primary" type="submit">
              Save
            </button>
            <button class="btn btn-danger" @click.prevent="deleteNote">
              Delete
            </button>
            <button class="btn btn-blue" @click.prevent="refresh">
              Refresh
            </button>
            <button class="btn" @click.prevent="cancelEditing">
              Cancel
            </button>
          </span>
        </span>
        <Todos :todoArr="todoArr" />
      </form>
    </div>
    <p v-else>Note not found</p>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import DeletePopup from "../components/Delete-popup";
import CancelPopup from "../components/Cancel-popup";
export default {
  data: () => ({
    title: "",
    todoArr: [],
    noteId: null,
    isPopupVisibleDel: false,
    isPopupVisibleOut: false,
  }),
  methods: {
    deleteNote() {
      this.isPopupVisibleDel = true;
    },
    closePopup() {
      this.isPopupVisibleDel = false;
      this.isPopupVisibleOut = false;
    },
    updateNote() {
      this.$store.dispatch("updateNote", {
        id: this.noteId,
        title: this.title,
        todo: this.todoArr,
      });
      this.$router.push("/");
    },
    cancelEditing() {
      this.isPopupVisibleOut = true;
    },
    loadedData() {
      this.title = this.note.title;
      this.noteId = +this.$route.params.id;
      this.todoArr = this.note.todo;
    },
    refresh() {
      this.$router.go(0);
    },
  },
  computed: {
    note() {
      const objStart = this.$store.getters.noteGetId(+this.$route.params.id);
      const objNew = Object.assign({}, objStart);
      const arrayNew = [];
      objStart.todo.map((t) => {
        arrayNew.push(Object.assign({}, t));
      });
      objNew.todo = arrayNew;
      return objNew;
    },
  },
  mounted() {
    this.loadedData();
  },
  components: { Todos, DeletePopup, CancelPopup },
};
</script>

<style scoped lang="scss">
.change-input {
  border: none;
}
.note-control {
  display: flex;
  justify-content: space-between;
  align-content: center;
  .button-control {
    margin-bottom: 10px;
    padding: 0.4rem;
  }
}
.hb {
  font-size: 32px;
  font-weight: bold;
}
</style>
