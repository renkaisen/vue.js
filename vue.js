//创建一个vue实例
var app = new Vue({
	//元素的名字
	el:'#app',
	//绑定的内容
	data:{
		message1:'牵着小鹿走'
	}
})


//关于bind指令的运用
var app2 = new Vue({
	el:'#app-2',
	data:{
		message2:'最可爱的小鹿就是你，哈哈哈'+new Date()
	}
})


//关于判断的指令v-if
var app3 = new Vue({
	el:'#app-3',
	data:{
		seen:false
	}
})



//关于循环指令的v-for
var app4 = new Vue({
	el:'#app-4',
	data:{
		todos:[
			{text:'原来你是一头很笨很笨的鹿'},
			{text:'哈哈哈，一头大本鹿'},
			{text:'原来是这样的'}

		]
	}
})



//关于点击事件；v-on ：click = ‘函数名’；

var app5 = new Vue({
	el:'#app-5',
	data:{
		message3:'Hello Vue.js'
	},
	methods:{
		reverseMessage:function(){
			 this.message3 = this.message3.split('').reverse().join('')
			 this.message3 = '我是大本鹿';
		}
	}
})


//vue v-model 指令；它使的在表单输入和应用状态中做了双向数据绑定;

var app6 = new Vue({
	el:'#app-6',
	data:{
		message4:'我最爱的小鹿'
	}
})



//7,自定义组件;


Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})

var arr7 = new Vue({
	el:'#app-7',
	data:{
		groceryList:[
			{text:'1'},
			{text:2},
			{text:3}

		]
	}
})