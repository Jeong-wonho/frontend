import styled from "styled-components";

let Menubar = styled.div`
  width: 20%;
  height: 800px;
  border: 1px solid;

  ul {
    list-style: none;
  }
`;

function Menu() {
  return (
    <Menubar>
      <ul>
        <li>애플</li>
        <li>테슬라</li>
        <li>스타벅스</li>
      </ul>
    </Menubar>
  );
}

export default Menu;
