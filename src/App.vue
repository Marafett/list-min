<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #fff;
  color: #333;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
input {
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  margin-bottom: 10px;
  padding: 0.4rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #ccc;
  &:focus {
    border-color: rgb(10, 10, 10);
  }
}
.btn {
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 3px;
  &:hover {
    opacity: 0.7;
  }
}
.btn-primary {
  background: green;
  color: #fff;
}
.btn-danger {
  background: red;
  color: #fff;
}
.btn-blue {
  background: rgb(53, 53, 255);
  color: #fff;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.shadow-wrapper {
  box-shadow: 0 0 17px #e7e7e7;
  padding: 0.8rem;
}
.popup-wrapper {
  background: rgba(80, 80, 80, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.popup {
  padding: 16px;
  position: fixed;
  border-radius: 5px;
  top: 50px;
  max-width: 500px;
  min-width: 300px;
  background: #ffffff;
  box-shadow: 0 0 17px #e7e7e7;
  &-header {
    display: flex;
    align-items: center;
  }
  &-content {
    display: flex;
    align-items: center;
    input {
      width: 100%;
    }
  }
}
.disabled {
  opacity: 0.2;
  &:hover {
    opacity: 0.2;
  }
}
</style>
