<template>
  <div>
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
  props: {
    profile: Object
  },
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