import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  return (
    <Menubar>
      <SearchInput>
        <input type="Text" placeholder="주식 입력"></input>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="3x"
          className="search"
        />
      </SearchInput>
      <SearchList>
        <li>
          <div>
            애플<div>주가 : 2000</div>
          </div>
          <div>회사 정보</div>
          <small>애플은 떡상할것이다.</small>
        </li>
        <li>
          <div>
            테슬라<div>주가 : 2000</div>
          </div>
          <div>회사 정보</div>
          <small>난 테슬라는 안산다.</small>
        </li>
        <li>
          <div>
            스타벅스<div>주가 : 2000</div>
          </div>
          <div>회사 정보</div>
          <small>스벅아 좀 올라라</small>
        </li>
      </SearchList>
    </Menubar>
  );
}

export default Menu;

const Menubar = styled.div`
  width: 20%;
  height: 800px;
  border: 1px solid;
  padding: 20px;
`;

const SearchInput = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 92%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    margin-top: 5px;
  }

  .search {
    position: absolute;
    width: 17px;
    right: 25px;
    margin: 0;
  }
`;

const SearchList = styled.ul`
  list-style: none;
  padding-left: 0px;
  border: 1px solid red;
  border-radius: 5px;
  background: white;
  height: 30rem;

  li {
    border: 1px solid lightgrey;
    font-size: 30px;
    height: 10rem;
    div {
      display: flex;
      justify-content: space-between;
      div {
        padding-right: 10px;
      }
    }
    small {
      font-size: 1.25rem;
    }
  }
`;
