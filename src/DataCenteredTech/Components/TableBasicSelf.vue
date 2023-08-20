<!-- a-table样式是自动的,固定是10页 -->


<script setup>
import {ref,reactive,} from 'vue';

// dataSource格式
// [
//     {
            // 表示一行数据的情况
//         key:'1-12',//个人预计是用于表格排序的,表格有隐藏的列key
//         title:'title',// 键名自定义,需要与columns的
//         content:'content',
//         otherAttr:'otherAttr',
//     }
// ]
// 需要展示的数据属性:
// 名称\领域\年份\摘要\vendors
// 大小写什么的需要和后端对

// columns格式

// [
//     {
//         title:'列名', //键名必须为title
//         dataIndex:''
//     }
// ]

// const dataSource=ref([
//     {
//         key: '1',
//         tech_name: '胡彦斌',
//         tech_field:'数据管理',
//         year:'2020',
//         definition:'定义',
//         vendorName:'供应商',
//     },

// ]);

// const columns=ref([
//     {
//         title:'技术名称',
//         dataIndex:'tech_name',
//         key:'tech_name',
//     },
//     {
//         title:'技术领域',
//         dataIndex:'tech_field',
//         key:'tech_field',
//     },
//     {
//         title:'时间',
//         dataIndex:'year',
//         key:'year',
//     },
//     {
//         title:'定义',
//         dataIndex:'definition',
//         key:'definition',
//     },
//     {
//         title:'时间',
//         dataIndex:'vendorName',
//         key:'vendorName',
//     },
// ]);



const props=defineProps({
    dataSource:{
        type:Array,
        default:
        [//第一个元素开始
            {
                key: '1',
                tech_name: 'DBMS1',
                tech_field:'数据管理',
                year:'2020',
                definition:'定义',
                vendorName:'供应商',
            },
        ],
        require:false,
    },
    columns:{
        type:Array,
        default:
        [// 第一个元素开始
            {
            title:'技术名称',
            dataIndex:'tech_name',
            key:'tech_name',
            },
            {
                title:'技术领域',
                dataIndex:'tech_field',
                key:'tech_field',
            },
            {
                title:'时间',
                dataIndex:'year',
                key:'year',
            },
            {
                title:'定义',
                dataIndex:'definition',
                key:'definition',
            },
            {
                title:'时间',
                dataIndex:'vendorName',
                key:'vendorName',
            },
        ],
        require:false,
    },

});

const emits=defineEmits([
    
]);



</script>

<template>
    <div>
        <a-table :dataSource="dataSource" :columns="columns"></a-table>
    </div>
</template>