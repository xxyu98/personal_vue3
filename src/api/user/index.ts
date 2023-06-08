import instance from '@/api/request'

export const login = (data: object) => {
	return instance({
		method: 'post',
		url: '/login',
		data
	})
}
