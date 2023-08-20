<template>
    <div>
        <h2>技术脉络演示</h2>
    </div>
    <div>
        <div id="Sankey" :style="{width: '1500px', height: '500px', padding: '30px'}"></div>
    </div>
</template>


<script setup>
import {ref,reactive,onMounted,}  from 'vue';
import axios from 'axios';
import * as echarts from "echarts";

import {useRouter, useRoute} from 'vue-router';
const router=useRouter(); 
const route=useRoute();

onMounted(()=>{
    GetAxios();
    // InitChart();
});


function Test()
{
    console.log('触发');

    SankeyTechData.data=SankeyData.data;SankeyTechData.links=SankeyData.links;
    // InitChart();
}

// 桑基图的一个特点是所谓能量守恒,从入到出的有一个能量的变化,
// 当可流出value小于实际流出value时,渲染按照实际流出的value来,大于时按照可流出的value来
// 流入同理,按照实际流入的value渲染
// 建立data中depth与时间的关系,可以设置变化的节点和层次点
// 点需要value,否则点与边之间必须有value
// 需要处理的是合并的技术传入的value和实际再向下传的value会有不同
const SankeyData=reactive({

    data:[
        {
        name: 'a',
        depth:0,
        value:1,
        other:'asdsadsaas',
        },
        {
        name: 'b',
        value:3,
        depth:0,
        },
        {
        name:'k',
        value:2,
        depth:0,
        },
        {
        name: 'a1'
        },
        {
        name: 'a2'
        },
        {
        name: 'b1'
        },
        {
        name: 'c'
        },
        {
        name:'s',
        value:2,
        },
        {
            name:'k3',
            value:2,
            depth:3,
        },
        {
            name:'a3',
            value:2,
            depth:3,
        },
        {
            name:'a4',
            value:3,
            depth:4,
        },
        {
            name:'NoValue',
            depth:0,
        },
        {
            name:'NoValue2',
            depth:1,
        },
        {
            name:'NoValue2Other',
            depth:1,
        },
        {
            name:'End5',
            depth:5,
            value:2,
            
        },
        {
            name:'End6',
            depth:6,
        }
    ],
    links:[
        {
        source: 'a',
        target: 'a1',
        value: 5,
        year:2020,
        },
        {
        source: 'a',
        target: 'a2',
        value: 3
        },
        {
        source: 'b',
        target: 'b1',
        value: 0,
        },
        
        {
        source: 'b1',
        target: 'c',
        value: 2
        },
        {
        source: 'a1',
        target: 's',
        
        },
        {
            source: 'a2',
            target: 'a3',
            value:2
        },
        {
            source: 'a3',
            target: 'a4',
            value:2
        },
        {
            source: 'k',
            target: 'k3',
            value:2
        },
        {
            source: 'NoValue',
            target: 'NoValue2',
            value:2
            

        },
        {
            source: 'NoValue',
            target: 'NoValue2Other',
            value:2
            
        },
        {
            source:'NoValue2',
            target:'End5',
            value:2,

        },
        {
            source:'NoValue2Other',
            target:'End5',
            value:2,
        },
        {
            source:'k3',
            target:'End5',
            value:2,
        },
        {
            source:'c',
            target:'End6',
            value:2,
        },
        {
            source:'s',
            target:'End6',
            value:2,
        },
        {
            source:'a4',
            target:'End6',
            value:4,
        },
        {
            sourcce:'a',
            target:'End6',
            value:2,
        }
        



    ]
})

// 默认所有节点的value为2,渲染长度越大,说明分解的结果越大
// 初始数据:年份2018年
const SankeyTechData=reactive({
    data:[
        {
            name:'tech1',
            depth:0,
            value:2,
            description:'演变保持不变的技术',
        },
        {
            name:'tech2',
            depth:0,
            value:2,
            description:'发生1次演变的技术,技术与tech4合并后发展'
        },
        {
            name:'tech3',
            depth:0,
            value:5,
            description:'提前消失的技术',
        },
        {
            name:'tech4',
            depth:0,
            value:2,
            description:'发生1次演变的技术,技术与tech2合并',
        },
        {
            name:'tech5',
            depth:0,
            value:2,
            description:'分解了一部分的技术,自己的部分继续发展'
        },
        {
            name:'tech2_4',
            depth:1,
            value:2,
            description:'tech2和tech4于2019年合并的技术,最后继续发展'
        },
        {
            name:'tech5.1',
            depth:2,
            value:2,
            description:'tech5于2020分解的部分技术,后续继续发展',
        },
        {
            name:'End1',
            depth:3,
            value:2,
            description:'于2021年消失的结局'
        },
        {
            name:'End2',
            depth:4,
            value:2,
            description:'与2022年消失的结局'
        },
    ],
    links:[
        {
            source:'tech1',
            target:'End2',
            value:2,
            description:''
        },
        {
            source:'tech2',
            target:'tech2_4',
            value:2,
            description:''
        },
        {
            source:'tech3',
            target:'End1',
            value:2,
            description:'tech3于2021年消失'
        },
        {
            source:'tech4',
            target:'tech2_4',
            value:2,
            description:''
        },
        {
            source:'tech5',
            target:'tech5.1',
            value:2,
            description:''
        },
        {
            source:'tech5',
            target:'End2',
            value:2,
            description:''
        },
        {
            source:'tech2_4',
            target:'End2',
            value:4,
            description:''
        },

        {
            source:'tech5.1',
            target:'End2',
            value:2,
            description:''
        },
        
    ]
})

function InitChart(){
    const option={
        

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove', 
            formatter:function(params)
            {
                console.log('触发formatter事件');
                // console.log(params);
                // console.log(params.data);
                return JSON.stringify(params.data);//此处可以设置回调函数处理数据
            }
        },
        nodeAlign:'left',
        nodeWidth:30,

          
        series: [
        {
            type: 'sankey',

            
            layout: 'none',
            
            emphasis: {
                focus: 'adjacency'//聚焦关系图中的邻接点和边的图形
            },
            
            lineStyle: {        //设置边的样式
            color: 'gradient',
            curveness: 0.5
            },
            data: SankeyTechData.data,
            links:SankeyTechData.links,
            // lineStyle,这个属性似乎可以设置实现同级别并列

        }
        ]
    };
    const myChart = echarts.init(document.getElementById("Sankey"));// 图标初始化
    myChart.setOption(option);// 渲染页面
    //随着屏幕大小调节图表
    window.addEventListener("resize", () => {
          myChart.resize();
        });
}



// 从Page2传的数据
const QueryTechID=JSON.parse(route.query.PassValue);
console.log('Page3 QueryTechID',QueryTechID);




function GetAxios(){
    const Api='http://123.60.31.63:8001/Tech_relate_page3/';
    const SendValue={Tech_id:QueryTechID};
    axios.post(Api,SendValue)
    .then(function (response) {

        console.log('response-----------');
        console.log(response.data);
        // 👇获取数据
        console.log(response.data[0]);
        console.log(response.data[1]);

        SankeyTechData.data=response.data[0];
        SankeyTechData.links=response.data[1];


        InitChart();
        



    })
    .catch(function (error) {
        // console.log('error--------------');
        // console.log(error);
        alert("Error,联系管理员解决问题");
    })
    .then(function () {
    }); 
};
// GetAxios();


</script>


<style scoped>

</style>