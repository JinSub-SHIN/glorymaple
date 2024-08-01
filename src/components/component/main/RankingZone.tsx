import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { getDojangRaking } from '../../../service/ranking/ranking'
import {
	getCharacterDetail,
	getOcid,
} from '../../../service/character/character'
import { characterInfo } from '../../../interface/character/character'
import { dojangRanking } from '../../../interface/ranking/dojang'
import { getServerLogo } from '../../../hook/getserverLogo'

const RankingWrapper = styled.div`
	padding: 5rem;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 4rem;
`

const { Meta } = Card

const RankingDetailWrapper = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;

	flex-wrap: wrap;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
`

const ServerLogo = styled.img`
	width: 15px;
	height: 15px;
	margin-right: 3px;
`

export const RankingZone = () => {
	const [dojangData, setDojangData] = useState<dojangRanking>()
	const [characterInfo, setCharacterInfo] = useState<characterInfo>()

	useEffect(() => {
		const data = getDojangRanking()
		data.then(res => {
			setDojangData(res.data)
		})
	}, [])

	useEffect(() => {
		const data = getData()
		data.then(res => {
			setCharacterInfo(res)
		})
	}, [dojangData])

	return (
		<>
			<RankingWrapper>
				<Card
					title="이번주 무릉도장 1위"
					hoverable
					style={{ width: 240 }}
					cover={
						<>
							<RankingDetailWrapper>
								<ServerLogo src={getServerLogo(characterInfo?.world_name)} />
								<span>{characterInfo?.character_name}</span>
							</RankingDetailWrapper>
							<img
								alt={characterInfo?.character_name}
								src={characterInfo?.character_image}
								height={170}
							/>
						</>
					}
				>
					<Meta
						title={dojangData?.ranking[0].dojang_floor + '층'}
						description={
							'LV.' +
							characterInfo?.character_level +
							'  ' +
							characterInfo?.character_class
						}
					/>
				</Card>
				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={characterInfo?.character_image} />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={characterInfo?.character_image} />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={characterInfo?.character_image} />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
			</RankingWrapper>
		</>
	)
}

const getDojangRanking = async () => {
	const dojangData = await getDojangRaking()
	return dojangData
}

const getData = async () => {
	const dojangData = await getDojangRaking()
	const ocid = await getOcid(dojangData.data.ranking[0].character_name)
	const characterDetail = await getCharacterDetail(ocid.ocid)

	return characterDetail
}
