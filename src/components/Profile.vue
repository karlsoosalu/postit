<template>
  <div class="profile">
    <img v-bind:src="profile.avatar" alt="Profile author" />
    <div class=profile-name >
      {{ profile.firstname }}
      {{ profile.lastname }}
    </div>
    <button type=button name=follow :class="{ 'follow-button': !followed, 'follow-button followed': followed }" @click="follow()">
      {{ followed ? "Followed" : "Follow" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function () {
    return {
      followed: false,
    };
  },
  methods: {
    follow: function () {
      this.followed = !this.followed;
    },
  },
};
</script>

<style scoped>
</style>