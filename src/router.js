import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

function icon(name) {
  return 'el-icon-' + name
}

var id = 0
function getid() {
  return id++
}

export const ROUTES = [
  {
    path: '/',
    name: 'index',
    component: () => import('./components/index'),
    redirect: { name: 'home' },
    children: [
      //  Home
      {
        path: '/Home',
        name: 'home',
        component: () => import('./components/Home'),
        side_id: getid(),
        side_icon: icon('monitor'),
        side_name: 'Home',
      },
      //  Css
      {
        path: '/Css',
        name: 'css',
        redirect: { name: 'css001' },
        side_id: getid(),
        side_icon: icon('picture-outline'),
        component: () => import('./components/Router'),
        side_name: 'CSS',
        children: [
          {
            path: '001',
            name: 'css001',
            component: () => import('./components/cssCom/001.vue'),
            side_id: getid(),
            side_name: '水纹效果',
          },
          {
            path: '002',
            name: 'css002',
            component: () => import('./components/cssCom/002.vue'),
            side_id: getid(),
            side_name: '动画样式',
          },
          {
            path: '003',
            name: 'css003',
            component: () => import('./components/cssCom/003.vue'),
            side_id: getid(),
            side_name: '炫酷文字',
          },
          {
            path: '004',
            name: 'css004',
            component: () => import('./components/cssCom/004.vue'),
            side_id: getid(),
            side_name: '黑白文字',
          },
        ]
      },
      //  Js
      {
        path: '/Js',
        name: 'js',
        redirect: { name: 'js001' },
        side_id: getid(),
        side_icon: icon('lollipop'),
        component: () => import('./components/Router'),
        side_name: 'JS',
        children: [
          {
            path: '001',
            name: 'js001',
            component: () => import('./components/jsCom/001.vue'),
            side_id: getid(),
            side_name: '数字转千分',
          },
          {
            path: '002',
            name: 'js002',
            component: () => import('./components/jsCom/002.vue'),
            side_id: getid(),
            side_name: '代码展示',
          },
          {
            path: '003',
            name: 'js003',
            component: () => import('./components/jsCom/003.vue'),
            side_id: getid(),
            side_name: 'Excel Demo',
          },
          {
            path: '004',
            name: 'js004',
            component: () => import('./components/jsCom/004.vue'),
            side_id: getid(),
            side_name: 'Drag resize Demo',
          },
          {
            path: '005',
            name: 'js005',
            component: () => import('./components/jsCom/005.vue'),
            side_id: getid(),
            side_name: '摄像头拍照',
          },
        ]
      },
      // UI
      {
        path: '/UI',
        name: 'ui',
        redirect: { name: 'ui001' },
        side_id: getid(),
        side_icon: icon('eleme'),
        component: () => import('./components/Router'),
        side_name: 'UI',
        children: [
          {
            path: '001',
            name: 'ui001',
            component: () => import('./components/uiCom/001.vue'),
            side_id: getid(),
            side_name: '表格滚动',
          },
          {
            path: '002',
            name: 'ui002',
            component: () => import('./components/uiCom/002.vue'),
            side_id: getid(),
            side_name: '自定义按钮',
          },
          {
            path: '003',
            name: 'ui003',
            component: () => import('./components/uiCom/003.vue'),
            side_id: getid(),
            side_name: '表格合并',
          },
        ]
      },
      // 
      {
        path: '/Canvas',
        name: 'canvas',
        redirect: { name: 'canvas001' },
        side_id: getid(),
        side_icon: icon('picture-outline-round'),
        component: () => import('./components/Router'),
        side_name: 'Canvas',
        children: [
          {
            path: '001',
            name: 'canvas001',
            component: () => import('./components/canvasCom/001.vue'),
            side_id: getid(),
            side_name: '图片颜色',
          },
        ]
      },
      {
        path: '/Echarts',
        name: 'echarts',
        redirect: { name: 'echarts001' },
        side_id: getid(),
        side_icon: icon('data-analysis'),
        component: () => import('./components/Router'),
        side_name: 'Echarts',
        children: [
          {
            path: '001',
            name: 'echarts001',
            component: () => import('./components/echartsCom/001.vue'),
            side_id: getid(),
            side_name: '线形图',
          },
          {
            path: '002',
            name: 'echarts002',
            component: () => import('./components/echartsCom/002.vue'),
            side_id: getid(),
            side_name: '柱状图',
          },
        ]
      },
      {
        path: '/EaselJS',
        name: 'easeljs',
        redirect: { name: 'easeljs001' },
        side_id: getid(),
        side_icon: icon('sugar'),
        component: () => import('./components/Router'),
        side_name: 'EaselJS',
        children: [
          {
            path: '001',
            name: 'easeljs001',
            component: () => import('./components/easeljsCom/001.vue'),
            side_id: getid(),
            side_name: 'GlobalToLocal2',
          },
          {
            path: '002',
            name: 'easeljs002',
            component: () => import('./components/easeljsCom/002.vue'),
            side_id: getid(),
            side_name: '柱状图',
          },
          {
            path: '003',
            name: 'easeljs003',
            component: () => import('./components/easeljsCom/003.vue'),
            side_id: getid(),
            side_name: 'Mark',
          },
        ]
      },
      {
        path: '/Plugins',
        name: 'plugins',
        redirect: { name: 'plugins001' },
        side_id: getid(),
        side_icon: icon('setting'),
        component: () => import('./components/Router'),
        side_name: 'Plugins',
        children: [
          {
            path: '001',
            name: 'plugins001',
            component: () => import('./components/pluginsCom/001.vue'),
            side_id: getid(),
            side_name: '01',
          },
        ]
      },
    ]
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('./components/about/About.vue'),
  }
]

const router = new Router({
  routes: ROUTES
})

router.beforeEach((to, from, next) => {
  if (to.name == null) {
    store.state.sideBarName = 'home'
    return next({ name: 'home' })
  }
  store.state.sideBarName = to.name
  next()
})

export default router