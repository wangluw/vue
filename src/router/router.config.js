
import HelloWorld from '@/content/HelloWorld'
import IdCord from '@/content/Idcord'
import Index from '@/layouts/index'

export const normalRouter = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/helloword',
    children: [
      {
        path: '/helloword',
        name: 'hellowword',
        component: HelloWorld
      },
      {
        path: '/helloword',
        name: 'hellowword5',
        component: HelloWorld,
        children: [
          {
            path: '/helloword',
            name: 'hellowword1',
            component: HelloWorld
          },
          {
            path: '/helloword',
            name: 'hellowword3',
            component: HelloWorld
          },
          {
            path: '/helloword',
            name: 'hellowword4',
            component: HelloWorld
          }
        ]
      },
      {
        path: '/tool',
        name: '工具',
        component: IdCord,
        children: [
          {
            path: '/tool/idcard',
            name: '校验身份证',
            component: IdCord
          },
          {
            path: '/helloword',
            name: 'hellowword3',
            component: HelloWorld
          },
          {
            path: '/helloword',
            name: 'hellowword4',
            component: HelloWorld
          }
        ]
      }
    ]
  }
]
