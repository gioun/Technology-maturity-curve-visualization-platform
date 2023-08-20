<template>
    <a-space>
        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px"
          @focus="focus"
          @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          
        </a-select>
    </a-space>
</template>


<script setup>
import { ref } from 'vue';
const options1 = ref([{
    value: 'jack',
    label: 'Jack',
}, {
    value: 'lucy',
    label: 'Lucy',
}, {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
}, {
    value: 'yiminghe',
    label: 'Yiminghe',
}]);
const options2 = ref([{
    value: 'lucy',
    label: 'Lucy',
}]);
const options3 = ref([{
    value: 'lucy',
    label: 'Lucy',
}]);
const focus = () => {
    console.log('focus');
};
const handleChange = value => {
    console.log(`selected ${value}`);
};

const value1=ref('lucy')
</script>