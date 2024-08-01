import { ReactNode } from 'react'
import { Layout, FloatButton } from 'antd'
import { styled } from 'styled-components'
import { HeaderMenu } from '../menu/HeaderMenu'

const { Content, Footer } = Layout

const CustomLayout = styled(Layout)`
	position: relative;
`

const CustomContent = styled(Content)`
	/* margin-top: 20px; */
	/* padding: 80px; */
`

const CustomFooter = styled(Footer)`
	padding: 24px;
	text-align: center;
	font-weight: 650;
	background-color: #ffffff;
`

interface MainParams {
	children: ReactNode
}

const MainLayout = (params: MainParams) => {
	return (
		<>
			<CustomLayout>
				<HeaderMenu />
				<CustomContent>{params.children}</CustomContent>
				<CustomFooter>
					<p>
						This site is not associated with NEXON Korea. Data sourced from
						NEXON OpenAPI.
					</p>
					<p>Copyright ©2024 Created by CLUB</p>
					<p>All rights reserved</p>
				</CustomFooter>
				<FloatButton.Group shape="circle" style={{ right: 24 }}>
					<FloatButton.BackTop
						visibilityHeight={0}
						onClick={() => scrollTo(0, 0)}
					/>
				</FloatButton.Group>
			</CustomLayout>
		</>
	)
}

export default MainLayout
