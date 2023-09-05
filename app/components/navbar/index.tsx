import { Brand } from './brand'
import { Login } from './login'
import { Menu } from './menu'
import { Mobile } from './mobile'
import { NavbarContainer } from './styled'

const Navbar = () => (
	<NavbarContainer>
		<Brand />
		<Menu />
		<Mobile />
		<Login />
	</NavbarContainer>
)

export default Navbar
