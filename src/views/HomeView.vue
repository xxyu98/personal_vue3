<template>
	<div>HomeView</div>
	<div class="test">{{ test.count }}</div>
	<div><button @click="btn">useTestStore++</button></div>
	<t-button @click="btn">tdesign 确定</t-button>
</template>
<script setup lang="ts">
import { useTestStore } from '@/store/modules/test'

const test = useTestStore()

const btn = () => {
	test.accumulate()
}
</script>

<style lang="less">
@import url('@/style/variables.less');
.test {
	color: @testColor;
}
</style>
