<!-- 作为承接的父组件,避免全部放在App组件中,便于快速迁移 -->


  

<template>
    <a-layout>

      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo"></div>

        <!-- 跳转面板 -->
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
        <!-- 路由跳转 -->
          <a-menu-item key="1"><router-link to="/page1" >技术层次</router-link></a-menu-item>
          <!-- // 👇这里没有写跳转,禁止跳转 -->
          <!-- <a-menu-item key="2"><router-link to="/page2" >技术详情</router-link></a-menu-item> -->
          
        
        </a-menu>


      </a-layout-header>
      <!--内容部分  -->
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        
        

        <!-- <h2>----------div开始----------</h2> -->

        <div :style="{ background: '#fff', padding: '24px', minHeight: '780px' }">

            <!-- 路由出口 -->
            <router-view></router-view>
           <!-- <div>
              <page1></page1>
            </div> -->
            <br>
            <br>
            <br>
            <br>
            <br>

        </div>
        <!-- <h2>----------div结束----------</h2> -->

      
      </a-layout-content>

      

      <a-layout-footer :style="{ textAlign: 'center' }">
        <br>
        Data Centered Tech Development
        <br>
        <br>

      </a-layout-footer>
    </a-layout>
  </template>





<script setup>
import { defineComponent, ref, watchEffect} from 'vue';
import { useRouter, useRoute } from 'vue-router';

import page1 from './Page1/Page1.vue';


const selectedKeys=ref(['']);
console.log(selectedKeys.value);

  
</script>

<style>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>