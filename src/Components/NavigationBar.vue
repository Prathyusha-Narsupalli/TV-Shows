<template>
<div>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <b-navbar-brand href="#" class="text-dark brand">TV Shows</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <b-nav-item>
            <router-link class="route" to="/">Home</router-link>
          </b-nav-item>
        
      </b-navbar-nav>


      <b-navbar-nav class="alignment">
        <input class="search" placeholder="Search" v-model="showName" @keyup.enter="searchForShows"/>
        <b-button size="sm" class="m-3 my-sm-0" type="submit" @click="searchForShows">Search</b-button>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: "NavigationBar",
  data(){
    return {
      showName:""
    }
  },
  methods:{
    searchForShows(){
      try{
        this.$router.push({ name: 'SearchForShows', params: {showName: this.showName}})
      }
      catch{
        this.$router.push({name: 'SearchForShows', params: {showName: this.showName}})
      }
    }
  }
};
</script>

<style scoped>
.route {
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-left:130px;
}
.nav-link :hover {
  color: white;
  text-decoration: none;
}
.alignment{
    margin-left: auto;
}
.brand{
  margin-left: 10px;
}
.search{
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 4px;
}
@media screen and (min-width: 768px) {
  .search{
    margin-right: 0px;
  }
  .route{
    margin-left: 0px;
  }
}
</style>
