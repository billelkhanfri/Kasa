
import Logo from '../atoms/Logo'
import Navigation from '../molecules/Navigation'
import { NavContainer } from '../Styles/organisms-styles/Header.style'


function Header() {
  return (
    <NavContainer>

      <Logo />
      <Navigation />
    </NavContainer>
  )
}

export default Header