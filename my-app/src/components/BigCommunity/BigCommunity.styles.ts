import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: stretch;
  margin: 0, 0, 20px, 0;
  position: relative;
`

export const StyledTitle = styled.h1`
  font-size: 48px;
  color: #464547;
  text-align: center;
`

export const SubTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`
export const PersonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
export const HideButton = styled.div`
  position: absolute;
  top: 40px;
  right: 70px;
  height: 50px;
  width: 100px;
  border: 2px solid red;
  color: red;
  font-size: 12px;
  padding: 15px 0;
  text-align: center;
  
`