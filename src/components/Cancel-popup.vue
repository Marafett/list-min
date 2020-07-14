<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Cancel editing?</h2></span>
      </div>
      <hr />
      <div class="popup-content">
        <button class="btn btn-primary" @click="outNote">Ok</button>
        <button class="btn btn-danger" @click="closePopup">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    outNote() {
      this.$router.push("/");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>
