<template>
	<div>HomeView</div>
	<div>{{ test.count }}</div>
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
