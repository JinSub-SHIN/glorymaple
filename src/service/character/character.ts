import { globalAxios } from '../../axios/globalAxios'

export const getOcid = async (name: string) => {
	const params = {
		character_name: name,
	}

	const response = await globalAxios.get('/maplestory/v1/id', {
		params,
	})

	return response.data
}

export const getCharacterDetail = async (ocid: string) => {
	const params = {
		ocid: ocid,
	}

	const response = await globalAxios.get('/maplestory/v1/character/basic', {
		params,
	})

	return response.data
}
