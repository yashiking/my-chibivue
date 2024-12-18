import { createApp, h, reactive } from 'chibivue'
import {Component} from "../../../packages/runtime-core/component";

// const MyComponent: Component = {
//   props: { someMessage: { type: String } },
//
//   setup(props: any, { emit }: any) {
//     return () =>
//       h('div', {}, [
//         h('p', {}, [`someMessage: ${props.someMessage}`]),
//         h('button', { onClick: () => emit('click:change-message') }, [
//           'change message',
//         ]),
//       ])
//   },
// }
//
// const app = createApp({
//   setup() {
//     const state = reactive({ message: 'hello' })
//     const changeMessage = () => {
//       state.message += '!'
//     }
//
//     return () =>
//       h('div', { id: 'my-app' }, [
//         h(
//           MyComponent,
//           {
//             'some-message': state.message,
//             'onClick:change-message': changeMessage,
//           },
//           [],
//         ),
//       ])
//   },
// })
const app = createApp({
  template: `<b class="hello" style="color: red;">Hello World!!</b>`,
})
app.mount('#app')
