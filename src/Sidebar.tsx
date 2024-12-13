import React from 'react'

import { Typography } from 'antd'
import './Sidebar.css'
type SidebarProps = {
	leisure: number
	metro: number
	parking: number
	food: number
	education: number
	travel: number
	sport: number
	child: number
}

const Sidebar: React.FC<SidebarProps> = ({
	leisure,
	metro,
	parking,
	food,
	education,
	travel,
	sport,
	child,
}) => {
	return (
		<>
			<div className='sidebar'>
				<Typography className='mainItem sidebarItem '>
					Параметры поиска
				</Typography>
				<Typography className='sidebarItem'>Досуг и отдых {leisure}</Typography>
				<Typography className='sidebarItem'>Метрополитен {metro}</Typography>
				<Typography className='sidebarItem'>Парковки {parking}</Typography>
				<Typography className='sidebarItem'>Точки питания {food}</Typography>
				<Typography className='sidebarItem'>Образование {education}</Typography>
				<Typography className='sidebarItem'>Туризм {travel}</Typography>
				<Typography className='sidebarItem'>Спорт {sport}</Typography>
				<Typography className='sidebarItem'>Дети {child}</Typography>
				<Typography className='sidebarItem'>Иное</Typography>
			</div>
		</>
	)
}

export default Sidebar
