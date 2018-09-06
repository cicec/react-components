# 全局对话框组件 Modal

用于提示某些重要信息、需要用户确认的操作，以及收集用户的输入内容。

## 效果预览

- [点此预览](https://clancysong.github.io/react-components/dist/modal/)

## 如何使用

Modal组件提供三个方法，分别为：

- alert（提示对话框）
- confirm（确认对话框）
- prompt（输入对话框）

这三个方法统一接收一个对象，对象可选属性有：

- contentText： 对话框提内容文本
- onOk：点击确认按钮时执行的回调函数。如果调用方法为 prompt，那么组件会将用户输入的内容作为此回调函数的参数传入。
- onCancel：点击取消按钮时执行的回调函数。注意：alert 方法不接受 onCancel 函数作为参数。

### 示例

``` js
import Modal from './components/modal'

...
const { alert, confirm, prompt } = Modal

alert({ contentText: '已退出登录！' })

confirm({
    contentText: '确定要删除吗？',
    onOk() { console.log('文件已删除！') }，
    onCancel() { console.log('用户已取消操作。') }
})

prompt({
    contentText: '请输入用户名：',
    onOk(result) { console.log(`您的用户名已修改为：${result}`) }，
    onCancel() { console.log('用户已取消操作。') }
})
...
```

## 组件依赖

``` json
{
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-transition-group": "^2.4.0"
}
```

依赖版本仅供参考。推荐 react、 react-dom 版本 16.0 以上，react-transition-group 版本 2.0 以上。