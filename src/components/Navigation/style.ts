import styled from "styled-components"

export const ContainerNavigation = styled.nav`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #5f00db;
      margin: 10px;
      font-size: 20px;
      text-decoration: none;
    }
  }

  @media screen and (min-width: 1020px){
    justify-content: start;
  }
`;
