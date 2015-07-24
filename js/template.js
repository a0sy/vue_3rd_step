Vue.component("header-template", {
    template: "#headerTemplate",
    methods:{
        hello:function(e){
            alert("hello!");
        }
    }
})
/*
Vue.component("item-template", {
    template: "<p>{{u.user_id}}:{{u.name}}</p>"
})
*/
Vue.component("item-template", {
    template: "<div>{{u.user_id}}:{{u.name}}</div>"
})

var app = new Vue({
    el:"#app",
    data:{
        user:[ {user_id:"1",name:"hage man"}, {user_id:"2",name:"hoge girl"}]
    }
})
