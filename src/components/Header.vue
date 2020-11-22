<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img
          v-if="user"
          class="avatar"
          v-bind:src="user.avatar"
          @click="toggleMenu()"
        />
        <img v-else src="@/assets/avatar.png" @click="toggleMenu()" />
        <div v-if="showMenu" class="dropdown-menu">
          <template v-if="user">
            <li>{{ user.firstname }} {{ user.lastname }}</li>
            <li>{{ user.email }}</li>
            <li class="separator"></li>
          </template>
          <li>
            <router-link to="browse">Browse</router-link>
          </li>
          <li class="separator"></li>
          <li>
            <router-link to="login">Log Out</router-link>
          </li>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    user: function () {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUser");
  },
  data: () => ({
    showMenu: false,
  }),
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav .search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
    
}

nav .search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav .avatar-container {
  margin-right: 15px;
  text-align: right;
}

.dropdown-menu {
  position: absolute;
  width: 200px;
  right: 0px;
  top: 34px;
  list-style-type:none;
}

.dropdown-menu li {
  background-color: white;
  padding: 5px;
}

.separator {
  padding: 0 !important;
  border-bottom: 2px solid lightgrey;
}
</style>
