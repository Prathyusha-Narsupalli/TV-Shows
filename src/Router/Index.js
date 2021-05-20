import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../Views/HomePage'
import ViewShowDetails from '../Views/ViewShowDetails'
import PageNotFound from '../Views/PageNotFound'
import SearchForShows from '../Components/SearchForShows'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "HomePage",
    component: HomePage,

  },
  {
    path: '/ShowDetails/:id',
    name: "ViewShowDetails",
    component: ViewShowDetails,
    props:true
  },
  {
    path: '/SearchForShows/:showName',
    name: "SearchForShows",
    component: SearchForShows,
    props:true
  },
  {
    path: '*',
    name: "PageNotFound",
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router