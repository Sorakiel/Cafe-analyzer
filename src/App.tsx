import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import map from './images/map.jpg'
import Sidebar from './Sidebar'
type SearchItems = {
	leisure: number
	metro: number
	parking: number
	food: number
	education: number
	travel: number
	sport: number
	child: number
}

function App() {
	const GenerateData: number = (min: number, max: number) => {
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

		return randomNum
	}

	const ReleaseData: SearchItems = () => {
		let leisure = GenerateData(0, 50) // досуг
		let metro = GenerateData(0, 5) // метро
		let parking = GenerateData(10, 50) // парковки
		let food = GenerateData(0, 20) // питание
		let education = GenerateData(0, 5) // образование
		let travel = GenerateData(0, 10) // туризм
		let sport = GenerateData(0, 10) // спорт
		let child = GenerateData(0, 10) // дети
		return {
			leisure: leisure,
			metro: metro,
			parking: parking,
			food: food,
			education: education,
			travel: travel,
			sport: sport,
			child: child,
		}
	}

	const [searchItems, setSearchItems] = useState<SearchItems>({
		leisure: 0,
		metro: 0,
		parking: 0,
		food: 0,
		education: 0,
		travel: 0,
		sport: 0,
		child: 0,
	})
	return (
		<>
			<Header />
			<div className='searchBar'>
				<Input
					className='searchInput'
					placeholder='Введите адрес'
					prefix={<SearchOutlined />}
					style={{
						backgroundColor: 'white',
						color: 'black',
						marginRight: '10px',
						fontSize: '25px',
						height: '48px',
					}}
					allowClear
				/>
				<Button
					type='primary'
					style={{
						backgroundColor: 'white',
						color: 'black',
						fontSize: '25px',
						height: '48px',
					}}
					onClick={() => setSearchItems(ReleaseData())}
				>
					Найти
				</Button>
			</div>
			<main className='main'>
				<Sidebar
					leisure={searchItems.leisure}
					metro={searchItems.metro}
					parking={searchItems.parking}
					food={searchItems.food}
					education={searchItems.education}
					travel={searchItems.travel}
					sport={searchItems.sport}
					child={searchItems.child}
				/>
				<div className='mainContent'>
					<img
						className='mapImg'
						src={map}
						style={{ height: '70vh', width: '100%' }}
					></img>
					<div className='advice'>Реклама</div>
				</div>
			</main>
		</>
	)
}

export default App
