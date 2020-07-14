<template>
  <div>
    <CreatePopup v-if="isPopupVisible" @closePopup="closePopup" />
    <h1>Note sheet</h1>
    <button class="btn btn-primary" @click="createNote">Create</button>
    <hr />
    <Notes />
  </div>
</template>

<script>
import CreatePopup from "../components/Create-popup";
import Notes from "../components/Notes";
export default {
  data: () => ({
    isPopupVisible: false,
  }),
  methods: {
    createNote() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
  components: {
    CreatePopup,
    Notes,
  },
};
</script>
