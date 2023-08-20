<!-- 说明 -->
<!-- page2的进入逻辑有两个:初始直接进入和通过page1进入
直接进入时,暂时默认展示测试用数据,相当于写死,后续可以在考虑和后端连接
page1进入时,需要从page1传递当前的领域\层次\时间,返回给后端进行查询,查询后再给前端

进入page2后,可以通过下拉框进行查询 -->

<template>
    <div>
        <br>    
        <a-row>
            <a-col :span="4">下拉选择领域: <Selector :Options="Field" :DefaultValue="FieldQuery" @selected_value="FieldSelected"></Selector></a-col>
            <a-col :span="4">下拉选择层次: <Selector :Options="Level" :DefaultValue="LevelQuery" @selected_value="LevelSelected"></Selector></a-col>
            <a-col :span="4">下拉选择时间: <Selector :Options="Time" :DefaultValue="TimeQuery" @selected_value="TimeSelected"></Selector></a-col>
            <a-col :span="4"></a-col>
            <a-col :span="4"><a-button @click="Query">更新条件查询</a-button></a-col>
            <a-col :span="4"><a-button @click="goPage3">查看技术脉络</a-button></a-col>
            
          </a-row>
    </div>
   

    <div  class="table_container">
        <br>
        <br>


        <a-table 
        :dataSource="dataSource" 
        :row-selection="{ selectedRowKeys: selectedRowKeysState.data, onChange: onSelectChange }"
        :columns="columns">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'definition'">
                    <a-typography-paragraph
                        :ellipsis="ellipsis ? { rows: 2, expandable: true, symbol: '更多' } : false"
                        :content="record.definition"
                    />
                </template>
            </template> 
        </a-table>


    </div>

   

  


</template>

<script setup>
import {  ref,reactive } from 'vue';
import Selector from '../Components/Selector.vue';
import axios from 'axios';


// 引入路由,注意括号,注意是函数还是别的什么
import {useRouter, useRoute} from 'vue-router';
const router=useRouter(); 
const route=useRoute();



// 处理从page1传递的值
const TimeQuery=ref('2022');
const FieldQuery=ref('Data Security');
// 这里有个问题,展示value时使用的是value不是label,但是直接用label也能展示出来
const LevelQuery=ref('数据服务化开发');

// 👇这个地方因为跳转会出现query不合理的情况,目前只假设从按钮处跳转
console.log('enter page2:');
console.log(route.query);
TimeQuery.value=JSON.parse(route.query.PassValue).time;
FieldQuery.value=JSON.parse(route.query.PassValue).field;
LevelQuery.value=JSON.parse(route.query.PassValue).title;



// 👇相当于是在创建页面后就从后台请求数据
// const DefaultSendValue={'field':'data_management','level':'数据资源化生产','year':'2022'}; //初始默认的请求数据
// const DefaultApi='';//初始默认的Api
// AxiosTest(DefaultApi,DefaultSendValue);

function TimeSelected(TimeFromChildSelector){
    
    // console.log("from child:",TimeFromChildSelector);
    TimeQuery.value=TimeFromChildSelector;
    console.log('change time:',TimeQuery.value);
};

function FieldSelected(FieldFromChildSelector){
    // console.log("from child:",FieldFromChildSelector);
    FieldQuery.value=FieldFromChildSelector;
    console.log('changed field:',FieldQuery.value);
};

function LevelSelected(LevelFromChildSelector){
    // console.log("from child:",FieldFromChildSelector);
    LevelQuery.value=LevelFromChildSelector;
    console.log('changed level:',LevelQuery.value);
};



function AddKeyForDataSource()
{
    for(let i=0;i<dataSource.value.length;i++)
    {
        // console.log('AddKeyForDataSource');
        // console.log(dataSource.value[i]);
        dataSource.value[i].key=i+1;
        // console.log(dataSource.value[i]);
    }
}

// Axios请求
// 在Page1中,只有一类向后端请求的数据,指定Api,向后端发送SendValue数据,数据类型为jsonobj
// 需要返回数据按照
function AxiosTest(Api,SendValue){
    console.log('Axios');
    axios.post(Api,SendValue)
    .then(function (response) {


        console.log('SendValue',SendValue);
        console.log('response-----------');
        console.log(response);
        // 👇获取数据
        dataSource.value=response.data;
        AddKeyForDataSource();



    })
    .catch(function (error) {
        // console.log('error--------------');
        // console.log(error);
        alert("Error,联系管理员解决问题");
    })
    .then(function () {
    }); 
};


//进入Page2后更新数据
function Query(){
    console.log('Query');
    console.log('changed field:',FieldQuery.value);
    console.log('change time:',TimeQuery.value);
    console.log('change level:',LevelQuery.value);

    //
    // const SendValue={'field':FieldQuery.value,'year':TimeQuery.value,'level':LevelQuery.value};
    const Api='http://123.60.31.63:8001/Info_detail_class';
    const SendValue={"field":FieldQuery.value,"year":TimeQuery.value,"classification":LevelQuery.value};
    console.log('SendValue:',SendValue);
    AxiosTest(Api,SendValue);    
};
Query();



// 👇下拉框内容,目前是写死的,但是理论上是需要向后端请求再返回的
const Time=ref([{value:2022,label:2022},{value:2021,label:2021},{value:2020,label:2020},{value:2019,label:2019},{value:2018,label:2018},{value:2017,label:2017}]);
const Field=ref([{value:'Data Management',label:'Data Management'},{value:'Data Security',label:'Data Security'}]);
const Level=ref([
    {value:'全部',label:'全部'},
    {value:'数据资源化生产',label:'数据资源化生产'},
    {value:'数据服务化开发',label:'数据服务化开发'},
    {value:'数据价值化利用',label:'数据价值化利用'},
    {value:'据价值增强',label:'数据价值增强'},
    {value:'服务开发协同',label:'服务开发协同'},
    {value:'数据服务集成',label:'数据服务集成'},
    {value:'潜在价值认证',label:'潜在价值认证'},
    {value:'级联风险应对',label:'级联风险应对'},
    {value:'数据服务质量保障',label:'数据服务质量保障'},
    {value:'价值分配能力增强',label:'价值分配能力增强'},
    {value:'价值变现与保护',label:'价值变现与保护'},
    {value:'数据服务的持久化经营',label:'数据服务的持久化经营'},
    

]);



// 👇需要展示的数据属性:
// 名称\领域\年份\摘要\vendors
// 大小写什么的需要和后端对
const dataSource=ref(
    [
        {
            key: '1',
            techname: '胡彦斌',
            techfield:'数据管理',
            year:'2020',
            definition:'xxxxxx',
            vendorName:'xxxxxx',
            otherColumn:'这条数据应该不显示出来'
        },
        {
            key: '2',
            techname: '胡彦斌1',
            techfield:'数据管理1',
            year:'2020',
            definition:'xxxxxx1',
            vendorName:'xxxxxx1',
            otherColumn:'这条数据应该不显示出来1'
        }
    ],

);

const columns=ref(
    [
        {
            title:'序号',
            dataIndex:'key',
            key:'key',
        },
        {
            title:'技术名称',
            dataIndex:'techname',
            key:'techname',
        },
            // {
            //     title:'技术领域',
            //     dataIndex:'techfield',
            //     key:'techfield',
            // },
            // {
            //     title:'时间',
            //     dataIndex:'year',
            //     key:'year',
            // },
        {
            title:'定义',
            dataIndex:'definition',
            key:'definition',
        },
        {
            title:'成熟度',
            dataIndex:'maturity',
            key:'maturity',
        },
        {
            title:'阶段',
            dataIndex:'stage',
            key:'stage',

        },
        // {
        //     title:'供应商',
        //     dataIndex:'vendorName',
        //     key:'vendorName',
        // },
    ]
)





// 选择准备进入page3的技术
const selectedRowKeysState=reactive({
    data:[],
})

function onSelectChange(selectedRowKeys){
    console.log(selectedRowKeys);
    selectedRowKeysState.data = selectedRowKeys;
}

// 缩略
const ellipsis=ref(true);





// 👇特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的
// 因此还是老老实实使用query
// 不能直接传递对象,如果一定要使用对象就要stringtify传进去
function goPage3(){
    
    var PassValue=[];
    if(selectedRowKeysState.data.length==0)
    {
        alert('请选择待查询的数据');
        return;
    }

    for(let i=0;i<selectedRowKeysState.data.length;i++)
    {
        PassValue.push(dataSource.value[selectedRowKeysState.data[i]-1].techid);
    }

    
    console.log(PassValue);
    router.push({ path: '/page3', query: {PassValue: JSON.stringify(PassValue),TestNum:1}});
};



// 👇测试用函数,测试表格在动态绑定时是否变化
function testF1(){
    var list=[];
    var obj={
            key: '1',
            tech_name: '胡彦斌',
            tech_field:'数据管理',
            year:'2020',
            definition:'xxxxxx',
            vendorName:'xxxxxx',
        };

    for(var i=1;i<21;i++)
    {
        var obj={
            key: i,
            tech_name: '胡彦斌',
            tech_field:'数据管理',
            year:'2020',
            definition:'xxxxxx',
            vendorName:'xxxxxx',
        };
        list.push(obj);
    };
    dataSource.value=list;
};



</script>