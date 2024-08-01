/* eslint-disable react/no-unescaped-entities */
import { MenuOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const CustomHeader = styled.div<{ $status: number }>`
	width: 100%;
	/* height: 80px; */

	background-color: #000000;
	color: white;

	/* background-color: ${props => (props.$status == 0 ? 'white' : 'black')};
	color: ${props => (props.$status == 0 ? 'black' : 'white')}; */
	/* position: fixed; */
	z-index: 100;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`

const CustomFlexBox = styled.div`
	padding: 25px;
	font-size: 26px;
`

const MenuDiv = styled.div`
	@media screen and (max-width: 760px) {
		display: none;
	}
`

const MobileMenuHeader = styled.div`
	@media screen and (max-width: 760px) {
		display: block;
	}

	display: none;
`

const MenuWrapper = styled.div`
	@media screen and (max-width: 760px) {
		width: 100%;
	}

	max-width: 67.25rem;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`

const SubMenuWrapper = styled.div`
	@media screen and (max-width: 760px) {
		display: block;
	}

	display: flex;
	gap: 1rem;
	/* cursor: pointer; */
`

const MenuItems = styled.div``

const MenuItemsSmall = styled.div`
	font-size: 1rem;
	line-height: 2rem;
`

const MenuSpan = styled.span`
	cursor: pointer;
`

const MobileMenuDiv = styled.div<{ $status: boolean }>`
	@media screen and (max-width: 760px) {
		display: ${props => (props.$status ? 'block' : 'none')};
	}

	display: none;
	padding: 0rem 2rem 2rem 2rem;
	z-index: 100;
	background-color: 'white';
	box-shadow: 1rem 1rem 1rem 0 rgba(192, 160, 160, 0.2);
`

export const HeaderMenu = () => {
	const [scroll, setScroll] = useState(0)
	const [showMenuStatus, setShowMenuStatus] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScroll = () => {
		if (window.scrollY == 0) {
			setScroll(0)
		} else {
			setScroll(-1)
		}
	}

	// const dispatch = useDispatch()
	const clickEventHandler = (params: string) => {
		// dispatch(setMenuStatus(params))
		setShowMenuStatus(false)
	}

	const showMenu = () => {
		if (showMenuStatus) {
			setShowMenuStatus(false)
		} else {
			setShowMenuStatus(true)
		}
	}

	return (
		<>
			<CustomHeader $status={scroll}>
				<CustomFlexBox>
					<MenuDiv>
						<MenuWrapper>
							<SubMenuWrapper>
								<MenuItems onClick={() => clickEventHandler('Top')}>
									<MenuSpan>메이플 시뮬레이터</MenuSpan>
								</MenuItems>
							</SubMenuWrapper>
							<SubMenuWrapper>
								<MenuItemsSmall onClick={() => clickEventHandler('About')}>
									<MenuSpan>캐릭터 정보</MenuSpan>
								</MenuItemsSmall>
								<MenuItemsSmall onClick={() => clickEventHandler('Skills')}>
									<MenuSpan>랭킹</MenuSpan>
								</MenuItemsSmall>
								<MenuItemsSmall onClick={() => clickEventHandler('Skills')}>
									<MenuSpan>메코인</MenuSpan>
								</MenuItemsSmall>
								<MenuItemsSmall onClick={() => clickEventHandler('Archiving')}>
									<MenuSpan>시뮬레이터</MenuSpan>
								</MenuItemsSmall>
								<MenuItemsSmall onClick={() => clickEventHandler('Projects')}>
									<MenuSpan>큐브</MenuSpan>
								</MenuItemsSmall>
								<MenuItemsSmall onClick={() => clickEventHandler('Career')}>
									<MenuSpan>스타포스</MenuSpan>
								</MenuItemsSmall>
								<MenuItemsSmall onClick={() => clickEventHandler('About')}>
									<MenuSpan>본캐 추적</MenuSpan>
								</MenuItemsSmall>
							</SubMenuWrapper>
						</MenuWrapper>
					</MenuDiv>
					<MobileMenuHeader>
						<MenuWrapper>
							<SubMenuWrapper>
								<MenuItems onClick={() => clickEventHandler('Top')}>
									<MenuSpan>메이플 시뮬레이터</MenuSpan>
								</MenuItems>
							</SubMenuWrapper>
							<SubMenuWrapper>
								<MenuOutlined onClick={() => showMenu()} />
							</SubMenuWrapper>
						</MenuWrapper>
					</MobileMenuHeader>
				</CustomFlexBox>
				<MobileMenuDiv $status={showMenuStatus}>
					<SubMenuWrapper>
						<MenuItemsSmall>
							<MenuSpan onClick={() => clickEventHandler('About')}>
								캐릭터 정보
							</MenuSpan>
						</MenuItemsSmall>
						<MenuItemsSmall>
							<MenuSpan onClick={() => clickEventHandler('Skills')}>
								랭킹
							</MenuSpan>
						</MenuItemsSmall>
						<MenuItemsSmall>
							<MenuSpan onClick={() => clickEventHandler('Archiving')}>
								시뮬레이터
							</MenuSpan>
						</MenuItemsSmall>
						<MenuItemsSmall>
							<MenuSpan onClick={() => clickEventHandler('Projects')}>
								큐브
							</MenuSpan>
						</MenuItemsSmall>
						<MenuItemsSmall>
							<MenuSpan onClick={() => clickEventHandler('Career')}>
								스타포스
							</MenuSpan>
						</MenuItemsSmall>
						<MenuItemsSmall>
							<MenuSpan onClick={() => clickEventHandler('Career')}>
								본캐 추적
							</MenuSpan>
						</MenuItemsSmall>
					</SubMenuWrapper>
				</MobileMenuDiv>
			</CustomHeader>
		</>
	)
}
