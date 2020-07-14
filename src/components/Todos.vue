<template>
  <div>
    <h3>Create Todo:</h3>
    <form class="create-todo" @submit.prevent="createTodo">
      <input v-model="todoTitle" type="text" />
      <button
        class="btn btn-primary"
        type="submit"
        v-bind:disabled="!todoTitle"
        v-bind:class="{ disabled: !todoTitle }"
      >
        Add
      </button>
    </form>
    <ul v-if="todoArr.length">
      <li
        v-for="todo of todoArr"
        :key="todo.id"
        v-bind:class="{ done: todo.completed }"
      >
        <span>
          <input
            type="checkbox"
            v-on:change="todo.completed = !todo.completed"
            v-model="todo.checked"
            v-bind:id="todo.id"
          />
          <input
            class="change-input"
            v-bind:class="{ done: todo.completed }"
            type="text"
            v-model="todo.title"
          />
        </span>
        <button class="btn btn-danger" @click.prevent="deleteTodo(todo.id)">
          &times;
        </button>
      </li>
    </ul>
    <p v-else>No todos</p>
  </div>
</template>

<script>
export default {
  name: "todos",
  props: ["todoArr"],
  data: () => ({
    todoTitle: "",
  }),
  methods: {
    createTodo() {
      const todo = {
        id: Date.now(),
        title: this.todoTitle,
        checked: false,
        completed: false,
      };
      this.todoArr.push(todo);
      this.todoTitle = "";
    },
    deleteTodo(id) {
      const delTodo = this.todoArr.findIndex((t) => t.id === id);
      this.todoArr.splice(delTodo, 1);
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.change-input {
  border: none;
  width: 90%;
}
.done {
  background: rgb(255, 177, 177);
}
span {
  width: 100%;
}
</style>
