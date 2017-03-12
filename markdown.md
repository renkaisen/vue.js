1，vue.js 是一套构建用户界面的渐进式框架，与其他重量级框架不同的是，
vue的核心库，只关注视图层；

vue.js  的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件；

vue核心： 采用简洁的模板语法来声明式的将数据渲染进DOM的系统；

vue的指令都是v开始的
v-bind;绑定某个属性

v-if；判断的指令，值可以是true，false；

v-for 循环指令；

v-on指令绑定一个监听事件用于调用我们vue里的方法；
例如：v-on：click = ‘ 函数名 ’；

事件methods：{methods,methods,methods;
}

v-model vue提供的双向数据绑定，

4，用组件构建（应用）
因为它提供了一中抽象，让我们可以用独立可复用的小组件来构建大型应用
一个组件 拥有预定义选型的一个vue实例；
Vue.component('todo-item',{
template:'<li>this is a todo </li>'
})

你可以在另一个组件模块中写入它
<ol>
<todo-item></todo-item>
</ol>
