<template>
    <div>
      <div id="treeChart" :style="{width: '500px', height: '500px', padding: '30px'}"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "eCharts",
    data() {
      return {
        treedata:[{ //一定一定要注意这里有[]
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
        }]
      }
    },
    mounted() {
      this.showChart();
    },
    methods: {
      showChart() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('treeChart'));
  
        // 指定图表的配置项和数据
        var option = {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
              {
                  type: 'tree',
  
                  data: this.treedata,
  
                  top: '1%',
                  left: '7%',
                  bottom: '1%',
                  right: '20%',
  
                  symbolSize: 7,
  
                  label: {
                      position: 'left',
                      verticalAlign: 'middle',
                      align: 'right',
                      fontSize: 13
                  },
  
                  leaves: {
                      label: {
                          position: 'right',
                          verticalAlign: 'middle',
                          align: 'left'
                      }
                  },
  
                  expandAndCollapse: true,
                  animationDuration: 550,
                  animationDurationUpdate: 750
              }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }
  </script>
  
  <style>
  .ml30{
    margin-left: 30px;
  }
  .m50{
    margin: 50px
  }
  </style>
  
  