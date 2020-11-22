<template>
  <div>
    <section class="browse-container">
    <div class="profiles-container">
      <Header />
      <p>
      </p>
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

</style>
