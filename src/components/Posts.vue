<template>
  <div id="main">
    <Header />
    <section v-for="post in posts" :key="post.id" class="main-container">
      <div class="post">
        <div class="post-author">
          <span class="post-author-info">
            <img v-bind:src="post.author.avatar" alt="Post author" />
            <small
              >{{ post.author.firstname }} {{ post.author.lastname }}</small
            >
          </span>
          <small>{{ post.createTime | formatDate }}</small>
        </div>
        <div class="post-image">
          <img v-if="has_image(post)" v-bind:src="post.media.url" alt="media" />
          <video v-else-if="has_video(post)" controls>
            <source v-bind:src="post.media.url" type="video/mp4" />
          </video>
        </div>
        <div class="post-title">
          <h3>{{ post.text }}</h3>
        </div>
        <div class="post-actions">
          <LikeButton :nrLikes="post.likes" :index="post.id" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
import LikeButton from "./LikeButton.vue";

export default {
  name: "Posts",
  components: {
    Header,
    LikeButton,
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    has_image(post) {
      return post.media !== null && post.media.type === "image";
    },
    has_video(post) {
      return post.media !== null && post.media.type === "video";
    },
  },
  filters: {
    formatDate: function(value) {
      if (!value) return "";

      let date = new Date(value);
      let day = date.getDay() > 9 ? date.getDay() : "0" + date.getDay();
      let month = date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth();

      return (
        date.getHours() +
        ":" +
        date.getMinutes() +
        " (" +
        day +
        "." +
        month +
        "-" +
        date.getFullYear() +
        ")"
      );
    },
  },
};
</script>

<style scoped>
#main {
  background-color: #0277bd;
  color: #263238;
  margin: -1000;
  padding: -100;
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

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 60px 15px 15px 15px;
  background-color: #ffffff;
}

.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 45px;
  font-size: large;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img,
video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}
</style>