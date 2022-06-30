import styled from "styled-components";

function Chart() {
  return <StockChart>차트 들어감</StockChart>;
}

export default Chart;

const StockChart = styled.article`
  width: 100%;
  box-sizing: border-box;
  border: 5px solid white;
  background: skyblue;
`;
