import { Brand } from './brand'
import { Menu } from './menu'
import { Mobile } from './mobile'
import { NavbarContainer } from './styled'

const Navbar = () => (
	<NavbarContainer>
		<Brand />
		<Menu />
		<Mobile />
	</NavbarContainer>
)

export default Navbar
