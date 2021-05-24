<template>
<div>
    <div v-if="loading && error==null " class="text-center">
        <div class="spinner-border"></div>
        <h3 class="text-dark pt-4">Loading</h3>
    </div>

    <div v-else-if="error!=null">
        <ErrorPage :error="error"/>
    </div>

    <div v-else>
        <div class="text-center">
            <img class="mt-3 rounded" :src="show.image.original" >
        </div>
        <div class="p-4">
            <h1 class="text-center pb-4"><strong>{{show.name}}</strong></h1>
            <p class="description" v-html="show.summary"></p>
            <div class="details">
                <p  v-if="show.genres!=null && show.genres.length!=0"> Genre  :  {{show.genres.toString()}}</p>
                <p  v-if="show.language!=null">Laguage :  {{show.language}}</p>
                <p v-if="show.network!=null">Conutry :  {{show.network.country.name}}</p>
                <p v-if="show.premiered!=null">Release :  {{show.premiered}}</p>
                <p v-if="show.rating.average!=null">Rating  :  {{show.rating.average}}</p>
            </div>
        </div>
        <div class="text-center m-3">
            <b-button pill  variant="info" @click="goBack">Go Back</b-button>
        </div>
    </div>
</div>
</template>
<script>
import {getShowDetails} from '../Services/ApiCalls'
import ErrorPage from '../Components/ErrorPage'
export default {
    name:"ShowDetails",
    components:{
        ErrorPage
    },
    props:['id'],
    data(){
        return {
            show:[],
            error:null,
            loading:true
        }
    },
    async created(){
       getShowDetails(this.id).then(response => {
            this.show=response.data;
       }).catch((error)=>{
                this.error=error.message;
           }).finally(()=>{
               this.loading=false;
            })
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
img{
    width:40%;
    height:auto;
    border:5px solid black;
}
.details{
    font-size: 17px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: forestgreen;
}
.description{
    font-size:20px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.spinner-border {
  width: 65px;
  height: 65px;
  margin-top: 120px;
}
@media screen and (min-width: 768px) {
  img{
      width:310px;
      height:395px;
      border:5px solid black;
  }
}

</style>