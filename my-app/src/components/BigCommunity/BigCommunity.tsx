import { useState } from "react";
import { useGetUsersQuery } from "src/services/users";
import Person from "../Person";
import { PersonWrapper, StyledWrapper, SubTitle, StyledTitle, HideButton } from "./BigCommunity.styles";

const BigCommunity = () => {
  const [isShown, setIsShown] = useState(true);
  const { data, isLoading} = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <StyledWrapper>
      <StyledTitle>Big Community of <br/> People Like You </StyledTitle>
      
      <HideButton onClick={() => setIsShown(prev => !prev)}>
        {isShown ? 'Hide Section' : 'Show Section'}
        </HideButton>
      {isShown && (
        <>
          <SubTitle>We’re proud of our products, and we’re really excited when we get feedback from our users.</SubTitle>
          <PersonWrapper>
            {
              data?.map((item) => <Person key={item.id} item={item} />)
            }
          </PersonWrapper>
        </>
      )}
    </StyledWrapper>
  )
}

export default BigCommunity;