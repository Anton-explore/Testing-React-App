import { StyledWrapper, StyledTitle, SubTitle, SubscrForm, SubscrInput, SubscrButton, StyledErrMessage } from "./Subscribe.styles";
import { MouseEvent, useState } from "react";
import { useSubscribeFetch, useUnSubscribeFetch } from "src/hooks/useCommunityData";

const Subscribe = () => {
  const [value, setValue] = useState('');
  const [isShown, setIsShown] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const { subscribe } = useSubscribeFetch();
  const { unSubscribe } = useUnSubscribeFetch()
    
  const subscribeHandler = async(e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsDisabled(true);
    try {
      if (!isShown) {
        const { success } = await unSubscribe(value)
        if (success) {
          setIsShown(prev => !prev)
        }
      } else {
        if (!validateEmail(value)) {
          const { success } = await subscribe(value);
          if (success) {
            setIsShown(prev => !prev)
          }
        }
      }
    } catch(error) {
      alert(error)
    }
    setIsDisabled(false);
  }

  function validateEmail(value: string): string {
    let error ='';
    if (!value) {
      error = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  return (
    <StyledWrapper>
      <StyledTitle>Join Our Program</StyledTitle>
        <SubTitle>Sed do eiusmod tempor incididunt <br/> 
        ut labore et dolore magna aliqua.</SubTitle>
        <SubscrForm>
          <div className="validating">
            {isShown &&
              <SubscrInput
                placeholder='Email'
                type='email'
                value={value}
                className={(isShown && validateEmail(value)) || (isShown && !value) ? "error" : ""}
                onChange={(e) => setValue(e.target.value)}
              />}
            {(isShown && validateEmail(value)) || (isShown && !value) ? <StyledErrMessage>{validateEmail(value)}</StyledErrMessage> : null}
          </div>
          <SubscrButton className={isDisabled ? "disabled" : ""} disabled={ isDisabled } onClick={subscribeHandler}>
            {isShown ? 'Subscribe' : 'Unsubscribe'}
          </SubscrButton>    
        </SubscrForm>
    </StyledWrapper>
  )
}

export default Subscribe;