import styled from "styled-components";

function Menu() {
  return (
    <Menubar>
      <SearchInput></SearchInput>
      <ul>
        <li>애플</li>
        <li>테슬라</li>
        <li>스타벅스</li>
      </ul>
    </Menubar>
  );
}

export default Menu;

const Menubar = styled.div`
  width: 20%;
  height: 800px;
  border: 1px solid;

  ul {
    list-style: none;
  }
`;

const SearchInput = styled.div`
  box-sizing: border-box;
  border: 3px solid white;
  width: 100%;
  height: 5rem;
  input {
    vertical-align: center;
  }
`;
