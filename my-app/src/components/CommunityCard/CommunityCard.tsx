import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetUserQuery } from "src/services/users";
import Person from "../Person";

type CommunityCardParams = {
  id: string;
}

const CommunityCard = () => {
  const history = useHistory();
  const { id } = useParams<CommunityCardParams>();
  const { data, isLoading } = useGetUserQuery(id);

  useEffect(() => {
    (!data && !isLoading) && history.push('/not-found')
  }, [data, history, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Person item={data} />
  )
}

export default CommunityCard;