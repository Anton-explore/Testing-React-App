import styled from 'styled-components';
import img from '../../assets/images/Join-image.png';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(to top, rgba(65, 65, 65, .7), rgba(65, 65, 65, .7)), url(${img}) no-repeat center/cover;
  height: 698px;
  max-width: 100%;
  color: white;
  background-color: #EEEEEE;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledTitle = styled.h2`
  font-size: 3.25rem;
  line-height: 3.20rem;
  text-align: center;
`

export const SubTitle = styled.h3`
  font-size: 1.50rem;
  line-height: 1.625rem;
  font-weight: 300;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif, Arial;
`

export const SubscrForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 40px 0 60px 0;
`

export const SubscrInput = styled.input`
  width: 400px;
  height: 46px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
  margin: auto;
  border: 0;
  padding-left: 20px;
  box-sizing: border-box;
  &.error {
    border: 2px solid red;
  }
`

export const SubscrButton = styled.button`
  background-color: #55C2D8;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 26px;
  font-size: 14px;
  height: 46px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  width: 135px;
  &.disabled {
    opacity: 0.5;
  }
`

export const StyledErrMessage = styled.div`
  color: red;
  text-align: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`