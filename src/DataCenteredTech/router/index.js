// 配置路由
// 理论上也可以直接写进组件里面,而且感觉会更加简单,但是后续肯定会增加组件和目录,所以就这样吧

// main.js里面的配置
// import router from 'index.js';//根据目录修改
// app.use(router);

//存储目录需要修改,现在整理不够好
import {createRouter,createWebHashHistory} from 'vue-router';
import page1 from '../Page1/Page1.vue';
import page2 from '../Page2/Page2.vue';
import page3 from '../Page3/Page3.vue';
import test from '../Components/TestComponent.vue';


const routes =[
    {   
        path:'/',
        redirect:(to)=>{
            return{path:'/page1'};
        },
    },
    {
        path:'/page1',
        name:'page1',
        component:page1,
    },
    {
        path:'/page2',
        name:'page2',
        component:page2,
    },
    {
        path:'/page3',
        name:'page3',
        component:page3,
    },
    {
        path:'/test:userId*',
        name:'test',
        component:test,
    }
];



const router=createRouter(
    {
        history:createWebHashHistory(),
        routes,
    }
);

export default router;