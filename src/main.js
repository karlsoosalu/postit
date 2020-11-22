import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
import App from "./App.vue";
import VueRouter from "vue-router";
import Posts from "./components/Posts";
import Browse from "./components/Browse";
import Login from "./components/LogIn";
import NotFound from "./components/NotFound";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: "/", name: "posts", component: Posts },
  { path: "/browse", name: "browse", component: Browse },
  { path: "/login", name: "login", component: Login },
  { path: "*", name: "404", component: NotFound },
];

const router = new VueRouter({ routes });

const store = new Vuex.Store({
  state: {
    posts: [],
    likes: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    change_likes(state, id) {
      var index = state.likes.indexOf(id);
      index === -1 ? state.likes.push(id) : state.likes.splice(index, 1);
    },
  },
  actions: {
    getPosts({ commit }) {
      axios
        .get(
          "https://private-anon-e653dee987-wad20postit.apiary-mock.com/posts"
        )
        .then((response) => {
          commit("SET_POSTS", response.data);
        });
    },
  },
  getters: {
    getLikes: (state) => {
      return state.likes;
    },
  },
});

const storeuser = new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    SET_DATA(state,data){
      state.data = data;
    },
  },
  actions: {
    getUsers({ commit }) {
      axios
       .get("https://private-anon-c899c1dc63-wad20postit.apiary-mock.com/users/1")
       .then((response) => {
         commit("SET_DATA", response.data);
       });
    },
  },
  getters: {
    getFirstname: (state) => {
      return state.firstname;
    },
    getLastname: (state) => {
      return state.lastname;
    },
    getEmail: (state) => {
      return state.email;
    },
    getAvatar: (state) => {
      return state.avatar;
    },
  },
});


new Vue({
  router,
  store,
  storeuser,
  render: (h) => h(App),
}).$mount("#app");

