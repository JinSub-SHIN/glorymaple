import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GoldCoinImage, MesoImage } from '../../../images'
import ReactApexChart from 'react-apexcharts'
import { goldcoinData } from '../../../constant/mecoinData'

const MeCoinHeader = styled.div`
	text-align: center;
	margin-top: 10vh;

	flex-wrap: wrap;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-weight: 900;
	gap: 20px;
`

const CoinChangeWrapper = styled.div<{ $status: boolean }>`
	margin-top: 10px;
	margin-left: 10px;
	text-align: center;
	font-size: 25px;

	color: ${props => (props.$status ? 'red' : 'blue')};
`

const CoinPriceWrapper = styled.div<{ $status: boolean }>`
	margin-left: 10px;
	text-align: center;
	font-size: 22px;
	font-weight: 600;

	color: ${props => (props.$status ? 'red' : 'blue')};
`

const UpdateWrapper = styled.div`
	margin-top: 10px;
	text-align: center;
	font-size: 11px;
	font-weight: 500;
`

const MarginSpan = styled.span`
	margin-right: 5px;
`

const SmallSpan = styled.span``

const MeCoinWrapper = styled.div`
	text-align: center;
`

const ChartZone = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const CoinLogo = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 3px;
`

const MesoLogo = styled.img`
	width: 22px;
	height: 22px;
`

const SubMenuWrapper = styled.div`
	display: flex;
	/* gap: rem; */
	/* cursor: pointer; */
`

export const MeCoin = () => {
	const options: any = {
		chart: {
			toolbar: {
				tools: {
					download: false,
					zoom: false,
					// pan: false,
				},
			},
			fontFamily: 'mapleLight',
			type: 'candlestick',

			zoom: {
				enabled: true,
			},
			offsetX: 10,
		},
		plotOptions: {
			candlestick: {
				colors: {
					upward: '#cf0606',
					downward: '#0e23e0',
				},
			},
		},
		tooltip: {
			custom: function (opts: any) {
				let close = opts.series[opts.seriesIndex][opts.dataPointIndex]

				if (close >= 1000) {
					close =
						close.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '메소' // 천단위 콤마
				}

				let text = '<span>' + close + '</span>'
				return text
			},
		},
		xaxis: {
			// type: 'datetime',
			// tooltip: {
			// 	enabled: true,
			// 	custom: function (opts: any) {
			// 		let close = opts.series[opts.seriesIndex][opts.dataPointIndex]
			// 		if (close >= 1000) {
			// 			close =
			// 				close.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '메소' // 천단위 콤마
			// 		}
			// 		let text = close
			// 		return text
			// 	},
			// },
		},
		yaxis: {
			tooltip: {
				enabled: false,
				custom: function (opts: any) {
					let close = opts.series[opts.seriesIndex][opts.dataPointIndex]

					if (close >= 1000) {
						close =
							close.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '메소' // 천단위 콤마
					}

					let text = '<span>' + close + '</span>'
					return text
				},
			},

			labels: {
				show: true,
				formatter: function (val: any) {
					if (val >= 1000) {
						return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '메소' // 천단위 콤마
					}
				},
			},
		},
	}

	const [coinStatus, setCoinStatus] = useState<boolean>(true)
	const [coinChange, setCoinChange] = useState<string>()
	const [coinPrice, setCoinPrice] = useState<string>()
	const [coinChangeRate, setCoinChangeRate] = useState<string>()
	const [updateDate, setUpdateDate] = useState<string>()

	useEffect(() => {
		const coinLastArr = goldcoinData.series[0].data.slice(-1)

		setUpdateDate(coinLastArr[0].x)

		const yesterday = coinLastArr[0].y[0]
		const today = coinLastArr[0].y[3]

		setCoinPrice(today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))

		if (today - yesterday > 0) {
			setCoinStatus(true)
		} else {
			setCoinStatus(false)
		}

		const changeRate = ((today * 100) / yesterday - 100).toFixed(2)
		if ((today * 100) / yesterday - 100 > 0) {
			setCoinChangeRate('(+' + changeRate + '%' + ')')
		} else {
			setCoinChangeRate('(' + changeRate + '%' + ')')
		}

		const change = (today - yesterday)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

		setCoinChange(change)
	}, [])

	return (
		<>
			<MeCoinHeader>
				<SubMenuWrapper>
					<CoinLogo src={GoldCoinImage} />
					<div>메코인</div>
				</SubMenuWrapper>
				<SubMenuWrapper>
					{coinStatus ? (
						<CoinPriceWrapper $status={coinStatus}>
							<MarginSpan>{coinPrice}</MarginSpan>
						</CoinPriceWrapper>
					) : (
						<CoinPriceWrapper $status={coinStatus}>
							<MarginSpan>{coinPrice}</MarginSpan>
						</CoinPriceWrapper>
					)}

					<MesoLogo src={MesoImage} />
				</SubMenuWrapper>
			</MeCoinHeader>
			{coinStatus ? (
				<CoinChangeWrapper $status={coinStatus}>
					<MarginSpan>+{coinChange}</MarginSpan>
					<MarginSpan>{coinChangeRate}</MarginSpan>
				</CoinChangeWrapper>
			) : (
				<CoinChangeWrapper $status={coinStatus}>
					<MarginSpan>{coinChange}</MarginSpan>
					<MarginSpan>{coinChangeRate}</MarginSpan>
				</CoinChangeWrapper>
			)}
			<UpdateWrapper>
				<SmallSpan>업데이트 기준일: {updateDate}</SmallSpan>
			</UpdateWrapper>

			<ChartZone>
				<ReactApexChart
					options={options}
					series={goldcoinData.series}
					type="candlestick"
					width={900}
					height={500}
				/>
			</ChartZone>
			<MeCoinWrapper></MeCoinWrapper>
		</>
	)
}
