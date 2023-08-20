<template>
    <a-table :dataSource="dataSource" :columns="columns" />
  </template>

  <script>
    export default {
      setup() {
        return {
            // dataSource的json中的键和columns的dataIndex的值对应   
            // 数据值的东西没搞懂的:key,
          dataSource: [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
            {
              key: '3',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              test:'新建数据值',    
            },
          ],
  
          columns: [
            {
              title_: '姓名1',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title_: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title_: '住址',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title_:'新建测试列',
              dataIndex:'test',
              key:'test',
            },
            {
              title_:'新建测试列',
              dataIndex:'test1',
              key:'test',
            },
            {
              title_:'新建测试列2',
              dataIndex:'test2',
              key:'test2',
            },
            {
              title_:'新建测试列3',
              dataIndex:'test3',
              key:'test3',
            },
          ],
        };
      },
    };
  </script>
  