declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 配置api下的js文件
declare module 'api/*.ts'
declare module 'common/js/*.ts'
declare module  'jsonp'

