<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Create note</h2></span>
      </div>
      <div class="popup-content">
        <form @submit.prevent="submitCreateNote">
          <input v-model="title" type="text" placeholder="Enter the title" />
          <button
            class="btn btn-primary"
            type="submit"
            v-bind:disabled="!title"
            v-bind:class="{ disabled: !title }"
          >
            Create
          </button>
          <button class="btn btn-danger" @click="closePopup">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
  }),
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    submitCreateNote() {
      const note = {
        id: Date.now(),
        title: this.title,
        todo: [],
      };
      this.$store.dispatch("createNote", note);
      this.closePopup();
    },
  },
};
</script>

<style scoped lang="scss"></style>
