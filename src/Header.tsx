import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import './Header.css'
import logo from './images/logo.png'

function Header() {
	return (
		<>
			<div className='header'>
				<img
					src={logo}
					alt='logo'
					style={{ width: '300px', height: '52px' }}
				></img>
				<div className='nav'>
					<Button color='default' variant='text' className='navItem'>
						О нас
					</Button>
					<Button color='default' variant='text' className='navItem'>
						Контакты
					</Button>
					<Button
						shape='circle'
						icon={<UserOutlined />}
						className='navItem'
					></Button>
				</div>
			</div>
		</>
	)
}

export default Header
