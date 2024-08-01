import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Test } from '../components/component/Test'
import { MainPage } from '../pages/main/MainPage'
import { MeCoinPage } from '../pages/mecoin/MeCoinPage'
export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<MainPage />} />
					<Route path="/mecoin" element={<MeCoinPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
