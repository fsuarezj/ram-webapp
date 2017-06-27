import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import RAM from '@/components/RAM'
import IntroRAM from '@/components/Steps/IntroRAM'
import Step1 from '@/components/Steps/Step1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/ram',
      name: 'RAM',
      component: RAM,
      children: [
        {
          path: '',
          redirect: 'intro'
        },
        {
          path: 'step1',
          name: 'Step1',
          component: Step1
        },
        {
          path: 'intro',
          name: 'IntroRam',
          component: IntroRAM
        }
      ]
    }
  ]
})
