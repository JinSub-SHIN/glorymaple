import MainLayout from '../../components/common/layouts/MainLayout'
import { MeCoin } from '../../components/component/main/MeCoin'
import { Welcome } from '../../components/component/main/Welcome'

export const MainPage = () => {
	return (
		<MainLayout>
			<Welcome />
			{/* <MeCoin /> */}
		</MainLayout>
	)
}
