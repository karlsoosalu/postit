<template>
  <div>
    <section class="browse-container">
    <div class="profiles-container">
      <Header />
      <div class=profile v-for="profile in profiles" :key="profile.id">
        <img v-bind:src="profile.avatar" alt="Profile author" />
        <div class=profile-name >
          {{ profile.firstname }}
          {{ profile.lastname }}
        </div>
        <button type=button name=follow class=follow-button>
          Follow
        </button>
        

      </div>
      
    </div>
    </section>
  </div>
  
  
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Browse",
  components: {
    Header,
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

.profile img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
}

.profile-name {
  margin-top: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
}

.follow-button {
  background: #82008F;
  border: 1px solid #82008F;
  font-size: 20px;
}

.follow-button.followed {
  background: white;
  color: black;
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
}

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

</style>
