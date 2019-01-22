# 轻量级信息提示组件 Toast

用于在不打断用户操作的情况下提供成功、警告、错误等反馈信息。

## 效果预览

- [点此预览](https://clancysong.github.io/react-components/dist/toast/)

## 如何使用

``` js
import Toast from './components/toast'

...
<button onClick={() => { Toast.info('普通提示') }}>普通提示</button>
...
```

Toast提供的函数调用后返回一个函数，调用这个函数可以立即关闭提示信息。如：

``` js
<button
    onClick={() => {
        const hideLoading = Toast.loading('加载中...', 0, () => {
            Toast.success('加载完成')
        })
        setTimeout(hideLoading, 2000)
    }}
>加载提示
</button>
```

## 调用规则

- Toast提供五种消息提示类型，分别为：
  - info（普通）
  - success（成功）
  - warning（警告）
  - error（错误）
  - loading（加载）
- 这些函数接收3个参数，分别为：
  - content 提示内容 string
  - （可选） duration 提示持续时间 number（单位为ms）
  - （可选） onClose 提示关闭时的回调函数
- info、succcess、warning、error中duration的默认值为2000（2s后自动关闭），而loading的duration默认值为0（即默认不自动关闭）。


## 组件依赖

``` json
{
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-transition-group": "^2.4.0"
}
```

依赖版本仅供参考，推荐 react、 react-dom 版本 16.0 以上，react-transition-group 版本 2.0 以上。
