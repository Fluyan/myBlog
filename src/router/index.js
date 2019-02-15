import Vue from 'vue'
import Router from 'vue-router'

import index from '../public/components/index'
import Blog from '../view/blog/Blog'
import WebNav from '../view/web/WebNav'
import AboutMe from '../view/about/AboutMe'

import login from '../view/login/login'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/login',
      component: index, 
      children:[
        {
          path: '/Blog',
          name: 'Blog',
          component: Blog,
        },
        {
          path: '/WebNav',
          name: 'WebNav',
          component: WebNav,
        },
        {
          path: '/AboutMe',
          name: 'AboutMe',
          component: AboutMe,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
