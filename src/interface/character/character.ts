export interface characterOcid {
	ocid: string
}

export interface characterList {
	account_list: [
		{
			account_id: string
			character_list: [
				{
					ocid: string
					character_name: string
					world_name: string
					character_class: string
					character_level: number
				},
			]
		},
	]
}

export interface characterInfo {
	date: string
	character_name: string
	world_name: string
	character_gender: string
	character_class: string
	character_class_level: string
	character_level: number
	character_exp: number
	character_exp_rate: string
	character_guild_name: string
	character_image: string
	character_date_create: string
	access_flag: string
	liberation_quest_clear_flag: string
}
