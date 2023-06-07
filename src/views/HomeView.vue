<template>
	<div>HomeView</div>
	<div>{{ test.count }}</div>
	<button @click="btn">useTestStore++</button>
</template>
<script setup lang="ts">
import { useTestStore } from '@/store/modules/test'

const test = useTestStore()

const btn = () => {
	test.accumulate()
}
</script>
