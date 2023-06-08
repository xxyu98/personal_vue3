import axios from 'axios'

import { NotifyPlugin } from 'tdesign-vue-next'

// 创建请求实例
const instance = axios.create({
	baseURL: '/api',
	// 指定请求超时的毫秒数
	timeout: 1000,
	// 表示跨域请求时是否需要使用凭证
	withCredentials: false
})

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
	(config) => {
		/**
		 * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
		 * const token = getToken()
		 * if (token) {
		 *  config.headers.token = token
		 * }
		 */
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
	(response) => {
		/**
		 * 根据你的项目实际情况来对 response 和 error 做处理
		 * 这里对 response 和 error 不做任何处理，直接返回
		 */
		return response
	},
	(error) => {
		const { response } = error

		const { message } = error

		NotifyPlugin.error({
			closeBtn: true,
			title: response.status,
			content: message
		})

		return error
	}
)

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url: string, data: object = {}, params: object = {}) => {
	return instance({
		method: 'post',
		url,
		data,
		params
	})
}

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url: string, params: object = {}) => {
	return instance({
		method: 'get',
		url,
		params
	})
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = (url: string, data: object = {}, params: object = {}) => {
	return instance({
		method: 'put',
		url,
		params,
		data
	})
}

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = (url: string, params: object = {}) => {
	return instance({
		method: 'delete',
		url,
		params
	})
}

export default instance
