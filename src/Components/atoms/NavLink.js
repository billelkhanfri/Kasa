
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { NavLink } from 'react-router-dom'


export const StyledLink = styled(NavLink)`
 font-size: 3.73vw;
 font-weight: 500;
 color: ${colors.primary};
 text-decoration: none;
 margin: 18px 0px 12px 0px;
 text-transform: uppercase;
 &.active{
  text-decoration: underline;
 }
  
      @media  (min-width: 481px) {
      font-size: 1.5rem;
      text-transform: capitalize;
      
   
    
  }

 `

