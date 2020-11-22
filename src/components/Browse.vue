<template>
  <section class="browse-container">
    <div class="profiles-container">
      <Header />
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <Profile :profile="profile"></Profile>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "./Header.vue";
import Profile from "./Profile.vue";
export default {
  name: "Browse",
  components: {
    Header,
    Profile
  },
  computed: {
    profiles: function () {
      return this.$store.state.profiles;
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profiles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.browse-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.profile {
  width: 40%;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 15px;
}

</style>
