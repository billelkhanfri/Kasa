import Logo from "../atoms/Logo";
import Navigation from "../molecules/Navigation";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 40px auto 0px auto;
  height: 47px;
`;

function Header() {
  return (
    <NavContainer>
      <Logo />
      <Navigation />
    </NavContainer>
  );
}

export default Header;
