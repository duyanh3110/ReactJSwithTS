(this["webpackJsonpreactjs-typescript"]=this["webpackJsonpreactjs-typescript"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(15),n(4)),i=n(1),l=n(5),u=n(6),f=n(8),k=n(7),p=n(9),m=function(e){var t=e.onChange,n=e.onAdd,a=e.task;return r.a.createElement("form",{onSubmit:n},r.a.createElement("input",{onChange:t,value:a.name}),r.a.createElement("button",{type:"submit"},"Add a task"))},d=function(e){var t=e.task,n=e.onDelete;return r.a.createElement("li",null,t.name," ",r.a.createElement("button",{onClick:function(){n(t)}},"Delete"))},h=function(e){var t=e.tasks,n=e.onDelete;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(d,{task:e,onDelete:n})})))};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={newTask:{id:1,name:""},tasks:[]},n.addTask=function(e){e.preventDefault(),n.setState((function(e){return{newTask:{id:e.newTask.id+1,name:""},tasks:[].concat(Object(i.a)(e.tasks),[e.newTask])}}))},n.handleTaskChange=function(e){n.setState({newTask:O({},n.state.newTask,{name:e.target.value})})},n.deleteTask=function(e){n.setState((function(t){return{tasks:Object(i.a)(t.tasks.filter((function(t){return t.id!==e.id})))}}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Hello React TS!"),r.a.createElement(m,{task:this.state.newTask,onAdd:this.addTask,onChange:this.handleTaskChange}),r.a.createElement(h,{tasks:this.state.tasks,onDelete:this.deleteTask}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0f1f517f.chunk.js.map