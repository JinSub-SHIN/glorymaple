import styled from 'styled-components'
import { MainBackGround } from '../../../images'
import { Button, Form, FormProps, Input } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { useRef } from 'react'

const CustomImage = styled.div`
	/* @media screen and (max-width: 760px) {
		display: none;
		height: 500px;
	} */

	width: 100%;
	height: 60vh;

	background-image: url(${MainBackGround});
	background-size: cover;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
`

const MainWrapper = styled.div`
	width: 40%;
	text-align: center;
`

const MainTilte = styled.div`
	font-size: 40px;
	color: white;
	font-weight: bold;
	margin-bottom: 1rem;
`

const MainInput = styled(Input)`
	height: 50px;

	::placeholder {
		font-family: 'mapleLight';
		color: black;
		opacity: 0.9;
		font-size: 1rem;
	}
`

const SearchButton = styled(Button)`
	display: none;
`

const MarginDiv = styled.div`
	min-height: 20vh;
	background-color: white;
`

type FieldType = {
	username?: string
}

export const Welcome = () => {
	const buttonElement = useRef<HTMLButtonElement>(null)

	const onFinish: FormProps<FieldType>['onFinish'] = values => {
		console.log('Success:', values)
	}

	const handleSearch = () => {
		buttonElement.current?.click()
	}
	return (
		<>
			<CustomImage>
				<MainWrapper>
					<MainTilte>GLORYMAPLE.GG</MainTilte>
					<Form onFinish={onFinish}>
						<Form.Item<FieldType> name="username">
							<MainInput
								placeholder="캐릭터명을 입력하세요."
								prefix={<UserOutlined style={{ marginRight: 5 }} />}
								suffix={
									<>
										<SearchOutlined onClick={handleSearch} />
										<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
											<SearchButton
												ref={buttonElement}
												id="hiddenButton"
												type="primary"
												htmlType="submit"
											></SearchButton>
										</Form.Item>
									</>
								}
							></MainInput>
						</Form.Item>
					</Form>
				</MainWrapper>
			</CustomImage>
			<MarginDiv></MarginDiv>
		</>
	)
}
