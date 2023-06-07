import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
	state: () => ({
		count: 1
	}),
	actions: {
		accumulate() {
			this.count++
		}
	}
})
