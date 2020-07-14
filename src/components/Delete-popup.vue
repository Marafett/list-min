<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Delete note?</h2></span>
      </div>
      <hr />
      <div class="popup-content">
        <button class="btn btn-primary" @click="deleteNote">Delete</button>
        <button class="btn btn-danger" @click="closePopup">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["noteId"],
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteId);
      if (this.$route.name !== "Home") {
        this.$router.push("/");
      }
      this.closePopup();
    },
  },
};
</script>
