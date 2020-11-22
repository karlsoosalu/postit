<template>
  <button
    @click="changeLike"
    type="button"
    name="like"
    :class="{ 'like-button': !liked, 'like-button liked': liked }"
  >
    {{ nrLikes }}
  </button>
</template>

<script>
export default {
  name: "LikeButton",
  computed: {
    liked: function() {
      var likes = this.$store.getters.getLikes;
      return likes.indexOf(this.index) !== -1;
    },
  },
  props: {
    nrLikes: String,
    index: Number,
  },
  methods: {
    changeLike: function() {
      this.$store.commit("change_likes", this.index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: #01579b;
}
</style>
