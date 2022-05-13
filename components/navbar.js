import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from './button';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link passHref href="/">
        <StyledButton as="a">Rooms</StyledButton>
      </Link>
      <Link passHref href="/mates">
        <StyledButton as="a">Flat Mates</StyledButton>
      </Link>
    </StyledNavbar>
  );
}
const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #290363;
  z-index: 0;
`;
