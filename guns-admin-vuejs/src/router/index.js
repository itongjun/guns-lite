import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},


  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    hidden: false,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
    }]
  }

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/system',
    component: Layout,
    redirect: '#',
    name: 'System',
    alwaysShow: true,
    meta: {
      roles: ['administrator'],
      title: 'systemMgr',
      icon: 'table'
    },
    children: [
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/system/menu/index'),
        meta: {
          title: 'menuMgr'
        }
      },
      {
        path: 'department',
        name: 'Department',
        component: () => import('@/views/system/dept/index'),
        meta: {
          title: 'deptMgr'
        }
      },
      {
        path: 'user',
        name: 'Account',
        component: () => import('@/views/system/user/index'),
        meta: {title: 'userMgr' }
      },
      {
        path: 'role',
        name: 'roleMgr',
        component: () => import('@/views/system/role/index'),
        meta: { title: 'roleMgr' }
      },
      {
        path: 'task',
        name: 'Task',
        component: () => import('@/views/system/task/index'),
        meta: { title: 'taskMgr' }
      },
      {
        path: 'taskLog',
        name: '任务日志',
        component: () => import('@/views/system/task/log/index'),
        hidden: true,
        meta: { title: '任务日志' }

      }
    ]
  },
  {
    path: '/operation',
    component: Layout,
    redirect: '#',
    name: 'Operation',
    alwaysShow: true,
    meta: {
      roles: ['administrator', 'developer'],
      title: 'optionMgr',
      icon: 'bug'
    },
    children: [
      {
        path: 'dict',
        name: 'Dict',
        component: () => import('@/views/system/dict/index'),
        meta: { title: 'dictMgr' }
      },
      {
        path: 'loginLog',
        name: 'Login Log',
        component: () => import('@/views/system/loginLog/index'),
        meta: { title: 'loginLog' }
      },
      {
        path: 'businessLog',
        name: 'Bussiness Log',
        component: () => import('@/views/system/log/index'),
        meta: { title: 'bussinessLog' }
      },
      {
        path: 'config',
        name: 'Config',
        component: () => import('@/views/system/cfg/index'),
        meta: {
          title: 'configMgr'
        }
      }
    ]
  },
  {path: '/404', component: () => import('@/views/404'), hidden: true}
];
