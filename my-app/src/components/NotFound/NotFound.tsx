import { useHistory } from "react-router-dom";
import { StyledBack, StyledDescription, StyledRoot, StyledTitle, StyledWrapper } from "./NotFound.styles";

const NotFound = () => {
  const history = useHistory();

  const onClickBackHandler = () => {
    history.push("/");  
  };

  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledTitle>
          Page Not Found
        </StyledTitle>
        <StyledDescription>
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </StyledDescription>
        <StyledBack onClick={onClickBackHandler}>
          &#8592; Back to our site
        </StyledBack>
      </StyledWrapper>
    </StyledRoot>
  )
};

export default NotFound;