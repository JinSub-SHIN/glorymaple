import { globalAxios } from '../../axios/globalAxios'

export const getDojangRaking = async () => {
	const params = {
		date: '2024-07-30',
		difficulty: 1,
	}

	const dojangdata = await globalAxios.get('/maplestory/v1/ranking/dojang', {
		params,
	})

	return dojangdata
}
