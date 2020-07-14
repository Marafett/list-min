import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.getItem("notes") || "[]"),
  },
  mutations: {
    createNote(state, note) {
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote(state, id) {
      const delNote = state.notes.findIndex((n) => n.id === id);
      state.notes.splice(delNote, 1);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    updateNote(state, note) {
      const noteThis = state.notes.findIndex((n) => n.id === note.id);
      state.notes[noteThis] = note;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
  actions: {
    createNote({ commit }, note) {
      commit("createNote", note);
    },
    deleteNote({ commit }, id) {
      commit("deleteNote", id);
    },
    updateNote({ commit }, note) {
      commit("updateNote", note);
    },
  },
  getters: {
    notes: (s) => s.notes,
    noteGetId: (s) => (id) => s.notes.find((n) => n.id === id),
  },
});
