import styled from "styled-components";
const StyledHeader = styled.h1`
  color: red;
  font-size: 46px;
`;

/**
 * 
 * props = {
 * children:
 * color
 * }
 * 
 */
export default function Header(props) {
  return <StyledHeader style={{color: props.color}}>{props.children}</StyledHeader>;
}
