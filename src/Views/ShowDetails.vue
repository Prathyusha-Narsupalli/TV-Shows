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
                <p> Genre  :  {{show.genres.toString()}}</p>
                <p>Laguage :  {{show.language}}</p>
                <p>Conutry :  {{show.network.country.name}}</p>
                <p>Release :  {{show.premiered}}</p>
                <p>Rating  :  {{show.rating.average}}</p>
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
        this.show=response.data
       }).catch((error)=>{
           this.error=error.message
           }).finally(()=>{this.loading=false})
    },
    methods:{
        goBack(){
            this.$router.go(-1)
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
</style>