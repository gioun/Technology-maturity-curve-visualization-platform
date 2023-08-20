<template>
    <div class="echart" id="chart" :style="{ float: 'left', width: '100%', height: '400px' }">

        
    </div>
</template>

<script setup>
import {ref,reactive,onMounted,}  from 'vue';
import * as echarts from "echarts";

onMounted(()=>{
    initEcharts();
});




const name="张雪";
const xData=ref(["2020-02", "2020-03", "2020-04", "2020-05"]);
const yData=ref([30, 132, 80, 134]) ;//纵坐标数据，与横坐标对应

const layout='column';

//以下是一种极有可能的后端返回数据形式
const ResultObj=ref([
    {
        tech:'tech1',
        name:'name1',
        year:'2020',
    },
    {
        tech:'tech1',
        name:'name1',
        year:'2021',
    },
    {
        tech:'tech1',
        name:'name1',
        year:'2022',
    },
    {
        tech:'tech2',
        name:'name2',
        year:'2020',
    },
    {
        tech:'tech2',
        name:'name2',
        year:'2021',
    },
    {
        tech:'tech2',
        name:'name2',
        year:'2022',
    },
    {
        tech:'tech3',
        name:'name3',
        year:'2020',
    },
    {
        tech:'tech3',
        name:'name3',
        year:'2021',
    },
    {
        tech:'tech3',
        name:'name2',
        year:'2022',
    },
]);


// 如何指定不同series
const testOption={
    title:{
        text:"测试用EChart",
    },
    tooltip: {},
    legend: {},
    dataset:{
        // dimensions: ['tech','name','year',],
        // ResultObj.value,
        source:[
            ['NameValue','2020','2021','2022'],
            ['tech1','name1','name1','name1'],
            ['tech2','name2','name2','name2'],
            ['tech3','name3','name3','name2'],
        ],
        // 希望下面一行数据就是一个映射
        // { NameValue: 'tech1', '2020': 'name1', '2021':'name1', '2022':'name1' },
        // { NameValue: 'tech2', '2020': 'name2', '2021':'name2', '2022':'name2' },
        // { NameValue: 'tech3', '2020': 'name3', '2021':'name3', '2022':'name2' },]       
    },
    xAxis:{ type: 'category'},
    yAxis:{type: 'category' },
    series: [
    //  {type:'line',seriesLayoutBy: layout},
        {type:'line',seriesLayoutBy: 'row'},
        {type:'line',seriesLayoutBy: 'row'},
        {type:'line',seriesLayoutBy: 'row'},
    ],



};

function initEcharts() {
        const option = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "line", //类型为柱状图
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };
        const myChart = echarts.init(document.getElementById("chart"));// 图标初始化
        myChart.setOption(testOption);// 渲染页面
        //随着屏幕大小调节图表
        window.addEventListener("resize", () => {
          myChart.resize();
        });
};








</script>