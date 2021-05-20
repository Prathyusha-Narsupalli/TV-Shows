<template>
  <div class="show">
    <router-link :to="{ name: 'ViewShowDetails', params: { id: show.id } }">
    <img :src="show.image.medium" />
     <div class="text-center"><b>{{ show.name }}</b></div>
     </router-link>
     <div>
      <b-icon icon="star-fill" class="star-icon mx-1"></b-icon>
     <span v-if="show.rating.average">{{ show.rating.average }}</span>
     <span v-else><b>NA</b></span>
     <span class="right" v-if="show.premiered"><b>{{ show.premiered.substr(0, 4) }}</b></span>
     </div>
     <b class="genre">{{show.genres.join(" | ")}}</b> 
  </div>
</template>
<script>
export default {
    name:"Card.vue",
    props:['show']
}
</script>
<style scoped>
img{
  padding-bottom: 10px;
}
div{
  padding-bottom: 5px;
}
.show{
  width:210px;
}
a{
    text-decoration: none;
}
b{
    color: black;
}
.right{
    float: right;
}
.genre{
  width:100%;
  color:forestgreen
}
.star-icon {
  color: rgb(255, 251, 1);
}
</style>