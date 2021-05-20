<template>
<div>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <b-navbar-brand href="#" class="text-dark nav">TV Shows</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <b-nav-item>
            <router-link class="route" to="/">Home</router-link>
          </b-nav-item>
        
      </b-navbar-nav>


      <b-navbar-nav class="right">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="showName" @keyup.enter="searchForShows"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="searchForShows">Search</b-button>
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
      this.$router.push({ name: 'SearchForShows', params: {showName: this.showName  } })
      this.showName=""
    }
  }
};
</script>

<style scoped>
.route {
  font-weight: bold;
  color: black;
  text-decoration: none;
}
.nav-link :hover {
  color: white;
  text-decoration: none;
}
.right{
    float: right;
}
.nav{
  margin-left: 10px;
}
</style>
