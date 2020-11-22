<template>
  <body>
  <header>
      <nav >
        <div class="logo-container">
          <img src="../assets/logo.png" alt="postIt">
        </div>
         <div class="search-container"> 
          <input type="text" name="search"><button type="button" >Search</button>
        </div>
        <div class="avatar-container">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" class="avatar" alt="Me">
      
          <ul class="dropdown-menu">
            <li><p id="menuName">John Doe</p><p id="menuEmail">john.doe@example.com</p></li>
            <li id="bordered"><p><a href="browse.html">Browse</a></p></li>
            <li id="bordered"><p><a href="login.html">Log Out</a></p></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="browse-container">
      <div class="profiles-container">
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: "Header",
  computed: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
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

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
    
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #01579b;
    color: white;
    
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
    
}

.dropdown-menu {
  display: inline;
  position: absolute;
  width: 250px;
  right: 0px;
  top: 34px;
}

.dropdown-menu li {
  background-color: white;
  padding: 5px;
}

.avatar-container ul li {
   display: block;
}

.avatar-container p {
  text-align: left;
  color: #333;
  font-family: 'Roboto Slab', serif;
  padding: 5px;
  margin: 0px;
  font-size: 19px;
}

#bordered {
  border-top:1px solid lightgray;
}
 
.profiles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
</style>
