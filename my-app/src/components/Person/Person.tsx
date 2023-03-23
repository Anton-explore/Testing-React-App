import { useHistory } from "react-router-dom";
import { CommunityProps } from "src/hooks/useCommunityData";
import { StyledDescription, StyledImage, StyledName, StyledPosition, StyledWrapper } from "./Person.styles";

export type PersonProps = {
  item: CommunityProps | undefined;
}

const Person = ({ item }: PersonProps) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/community/${item?.id}`);
  }

  return (
    <StyledWrapper onClick={onClickHandler}>
      <StyledImage src={item?.avatar} alt="image"/>
      <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</StyledDescription>
      <StyledName>{`${item?.firstName} ${item?.lastName}`}</StyledName>
      <StyledPosition>{item?.position}</StyledPosition>
    </StyledWrapper>
  )
}

export default Person;