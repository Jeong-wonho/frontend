import styled from "styled-components";
import Chart from "./Chart";
import Info from "./Info";
import News from "./News";
const Main = () => {
  return (
    <MainStyle>
      <Chart />
      <Infos>
        <News></News>
        <Info></Info>
      </Infos>
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.section`
  border: 10px solid;
  display: grid;
  width: 90%;
`;
const Infos = styled.article`
  display: flex;
  background: red;
`;
