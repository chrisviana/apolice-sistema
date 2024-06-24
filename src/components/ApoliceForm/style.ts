import styled from "styled-components";

export const ContainerPolicyForm = styled.div`
  width: 100%;
  margin: 10px 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
    
  @media screen and (min-width: 1020px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 800px;
    gap: 20px;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    padding: 8px;
  }
 
`
export const GroupForm  = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;

`

export const GroupFoof = styled.div`
  width: 100%;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }


  @media screen and (min-width:1020px) {
    div {
      & > :first-child {
        width: 600px;
        padding: 8px;
      }
   }
  }
  

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`

export const ButtonAddPolicy = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #000 !important;
  border-radius: 6px;
  padding: 8px;
  margin-top: 10px;
  
  &:hover { 
    background: #5f00db;
    color: #fff;
    transition: 0.5s;
    border: 1px solid #5f00db !important;
  }
`

export const ButtonSave = styled.button`
  width: 200px;
  height: 40px;
  background: #5f00db;
  color: #fff;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #fff;
    color: #5f00db;
    border: 1px solid #5f00db !important;
  }
`