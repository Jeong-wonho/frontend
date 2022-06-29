import styled, { createGlobalStyle } from "styled-components";
import Menu from "./components/Menu";
import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}`;

const Appcontainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Appcontainer>
        <Menu />
        <Main />
      </Appcontainer>
      ;
    </>
  );
}

export default App;
