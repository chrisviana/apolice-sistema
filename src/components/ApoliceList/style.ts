import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100%;
  margin: 30px 30px;

  display: flex;
  flex-direction: column;

  input {
    margin-top: 10px;
    width: 320px;
  }
`

export const LinkCriarApolice = styled(Link)`
  margin-top: 10px;
  color: #5f00db;
  text-decoration: none;
  font-weight: 600;
`

export const List = styled.ul`
  width: 320px;
  margin-top: 20px;


  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      width: 50%;
    }

    button {
      background: none;
      border: none;
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  margin-top: 20px;

  button {
    background: none;
    border: none;

  }
`