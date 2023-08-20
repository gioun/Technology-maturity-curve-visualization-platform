<!-- 下拉栏和选择器还不一样 -->

<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
const props = defineProps({
  Options:{
	type:Array ,// 如果可能存在多个类型，则可以写成 [String,Number]
	default:['111111','222222','333333'],
	required: false// 是否必传 ，在不声明为true 的情况下，所有prop 默认为非必填。
    }   
})


</script>

<template>
<a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
    下拉框
    <DownOutlined />
    </a>
    <template #overlay>
    <a-menu>
        <a-menu-item v-for="item in Options">
            <a href="javascript:;">{{item}}</a>
        </a-menu-item>

        <a-menu-item>
        <a href="javascript:;">4nd menu item</a>
        </a-menu-item>
        <a-menu-item>
        <a href="javascript:;">5rd menu item</a>
        </a-menu-item>
    </a-menu>
    </template>
</a-dropdown>
</template>


