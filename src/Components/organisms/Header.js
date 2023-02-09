import styled from 'styled-components'
import Logo from '../atoms/Logo'
import Navigation from '../molecules/Navigation'



const NavContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 1.5em 0;
  width: 90%;
  margin: 40px auto;
  height: 47px;
 
`


function Header() {
  return (
    <NavContainer>

      <Logo />
      <Navigation />
    </NavContainer>
  )
}

export default Header