<!-- 在页面加载时就进入到默认的最新的数据 -->
<!-- 使用按键刷新时则再重新加载数据 -->

<template>
    <div style="padding: 20px;">
        
        <a-row>
            <a-col :span="6"></a-col>
            <a-col :span="6" >下拉选择领域<Selector :Options="FieldOption" :DefaultValue="FieldQuery" @selected_value="FieldSelected"></Selector></a-col>
            <a-col :span="6" >下拉选择时间<Selector :Options="TimeOption"  :DefaultValue="TimeQuery" @selected_value="TimeSelected"></Selector></a-col>
            <a-col :span="6"><a-button @click="Query">更新选择</a-button></a-col>
        </a-row>
    </div>
    
   

    <div class="items_container">
        <a-card class="card" id="card_contain" style="width: auto;">
        <a-card-grid style="width: 33.33%; text-align: center" v-for="item in LevelInformation"  @click="goPage2(item)">
            <h2 title="层次名称">{{ item.title }}</h2>
            <p title="该层次在本年度的技术数量">数量:{{ item.num }}</p>
            <p title="时间">年份:{{ item.time }}</p>
        </a-card-grid>
        </a-card>
    </div>



    <!-- <div class="items_container">
        <a-card hoverable style="width: 480px">
            <template #cover>
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
    </div> -->

    <!-- <div class="test">
        <h2>测试</h2>
        <a-button @click="AxiosTest">测试axios</a-button>
        <a-button @click="TestObj">测试相应式testObj</a-button>
        <a-button @click="TestFunction">测试是否变更testObj</a-button>

        <a-button @click='TestJump(1)'>跳转测试</a-button>
    </div> -->


    


</template>

<script setup>
import Selector from '../Components/Selector.vue';

import {ref,reactive,toRef } from 'vue';
import axios from 'axios';


// Axios请求
// 在Page1中,只有一类向后端请求的数据,指定Api,向后端发送SendValue数据,数据类型为jsonobj
// 需要返回数据按照
// 下面的形式已经测试成功,就是需要改的是,把整个模块化
function AxiosTest(Api,SendValue){
axios.post(Api,
    SendValue)
  .then(function (response) {

    console.log(response);
    console.log(response.data);
    LevelInformation.value=response.data;

  })
  .catch(function (error) {
    // console.log('error--------------');
    // console.log(error);
    alert("Error,联系管理员解决问题");
  })
  .then(function () {
  }); 
};

// 👇相当于是在创建页面后就从后台请求数据
// const DefaultSendValue={'field':'Data Management','year':'2022'}; //初始默认的请求数据
// const DefaultApi='';//初始默认的Api
// AxiosTest(DefaultApi,DefaultSendValue);



// 定义页面最重要的数据项,用于展示12个层次的数据
const LevelInformation=ref([
    {
        title:"数据资源化生产",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"数据服务化开发",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"数据价值化利用",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"数据价值增强",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"服务开发协同",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"数据服务集成",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"潜在价值认证",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"级联风险应对",
        num:"1",
        time:"2022",
        field:"Data Management",
    },
    {
        title:"数据服务质量保障",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"价值分配能力增强",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"价值变现与保护",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"数据服务的持久化经营",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
]

)


// 👇12个层次的数据,键和值需要和后端修改
// 数据需求是名称也需要它的id
const testObj=ref([
    {
        title:"数据资源化生产",
        num:"1",
        time:"2022",
        field:"Data Management",

    },
    {
        title:"数据服务化开发",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"数据价值化利用",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"数据价值增强",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"服务开发协同",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"数据服务集成",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"潜在价值认证",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"级联风险应对",
        num:"1",
        time:"2020",
        field:"Data Management",
    },
    {
        title:"数据服务质量保障",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"价值分配能力增强",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"价值变现与保护",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
    {
        title:"数据服务的持久化经营",
        num:"1",
        time:"2020",
        field:"Data Management",

    },
]);


// 下拉框内容
// 👇注意,在实际上领域和时间也是需要请求的,目前阶段不请求罢了
const TimeOption=reactive([{value:2022,label:2022},{value:2021,label:2021},{value:2020,label:2020},{value:2019,label:2019},{value:2018,label:2018},{value:2017,label:2017}]);
const FieldOption=reactive([{value:'Data Management',label:'Data Management'},{value:'Data Security',label:'Data Security'}]);

// 下拉框接受变量变化
// 👇下面这两行还可以优化,感觉运行可能会有bug
// 用于接收子组件修改后的数据,便于后续进行查询时使用数据
const TimeQuery=ref('2022');
const FieldQuery=ref('Data Management');

function TimeSelected(TimeFromChildSelector){
    
    console.log("from child:",TimeFromChildSelector);
    TimeQuery.value=TimeFromChildSelector;
    console.log('TimeQuery.value change time:',TimeQuery.value);
};

function FieldSelected(FieldFromChildSelector){
    console.log("from child:",FieldFromChildSelector);
    FieldQuery.value=FieldFromChildSelector;
    console.log('FieldQuery.value changed field:',FieldQuery.value);
}

// 👇存在写死的数据用于更新请求
function Query(){
    console.log('reset attr');
    console.log('changed field:',FieldQuery.value);
    console.log('change time:',TimeQuery.value);

    // const SendValue={'field':FieldQuery.value,'year':TimeQuery.value};
    // 👇写死的数据
    const SendValue={'field':FieldQuery.value,'year':TimeQuery.value};
    const Api='http://123.60.31.63:8001/classfication_count';
    AxiosTest(Api,SendValue);

};
Query();




// 页面跳转至page2
import { useRouter, useRoute } from 'vue-router';
const router=useRouter();

// 👇特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的
// 因此还是老老实实使用query
// 不能直接传递对象,如果一定要使用对象就要stringtify传进去
function goPage2(value){
    console.log(value);
    const PassValue=value;
    console.log(PassValue);
    router.push({ path: '/page2', query: {PassValue: JSON.stringify(PassValue),TestNum:1}});
};















</script>










<style>
div.items_container{
    /* width: 220px; */
    padding: 20px;
    border: 1px solid gray;
    margin: 10; 
    background-color: #dddddd;
};
div.item{
    margin: 0; 
};
div.test{
    width: 220px;
    background-color: azure;
    padding: 20px;
    border: 1px solid gray;
    margin: 10; 
}



</style>