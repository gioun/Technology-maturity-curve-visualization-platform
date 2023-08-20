<template>
    <div>
        <div id="TreeChart" :style="{width: '1500px', height: '500px', padding: '30px'}"></div>
      </div>
</template>

<script setup>
import {ref,reactive,onMounted,}  from 'vue';
import * as echarts from "echarts";

onMounted(()=>{
    InitChart();
});


// 官网api下提供的数据:https://echarts.apache.org/examples/data/asset/data/flare.json
const TreeData=ref(
    [   
        { //一定一定要注意这里有[]
          name: '本科发展方向',
          children: [
            {
              name: '考研',
            },
            {
              name: '就业',
              children: [
                {
                  name: '相关就业详见菜单栏‘培养方向’'
                }
              ]
            },
            {
              name: '考公'
            },
            {
              name: '留学',
              children: [
                {
                  name: '相关文件（申请流程、交换要求）'
                }
              ]
            },
            {
              name: '创业'
            }
          ]
        }
    ]   
);

function InitChart(){
    const option={
          title: {
              text: 'ECharts 入门示例'
            },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },

        //   xAxis: [{
        //     type: "category",
        //     data: ["Mon", "Tue", "Wed", ],
        //   }],
          
          series: [
              {
                  type: 'tree',
  
                  data: TreeData.value,
  
                  top: '1%',//图的本体外的上部分占据显示div的百分比(类似padding up),下面的同理
                  left: '20%',//图的本体外的左部分占据显示div的百分比,应当注意,当为0时可能会使得字超出显示范围
                  bottom: '1%',
                  right: '20%',//图的本体外的右部分占据显示div的百分比,应当注意,当为0时可能会使得字超出显示范围
  
                  symbolSize: 7,// 点的大小

                  orient: 'RL',//叶子节点在左,根节点在右
  
                  label: {
                      position: 'right',//理论上应该和下面的leave差不多,但是在测试结果不一样,如果时right-left,就会出现有叶子节点的非根节点文字在右边,其它的在左边,反之则都在左边(对于这个叶子节点在左边的图)
                      verticalAlign: 'middle',
                      align: 'left',
                      fontSize: 13
                  },
  
                  leaves: {
                      label: {
                          position: 'left',//叶子节点的字在点的位置
                          verticalAlign: 'middle',
                          align: 'right'//需要与position相反,才能保证字不在点上面
                      }
                  },
  
                  expandAndCollapse: true,//是否折叠不显示数据量大难以展开的视图?
                  labelLayout:{moveOverlap: 'shiftY'},//各个节点竖直方向对其
                  
                  animationDuration: 550,// 展开后文字显示渐变时长
                  animationDurationUpdate: 750//展开动画时长
              }
          ]
    };
    const myChart = echarts.init(document.getElementById("TreeChart"));// 图标初始化
    myChart.setOption(option);// 渲染页面
    //随着屏幕大小调节图表
    window.addEventListener("resize", () => {
          myChart.resize();
        });
}


</script>