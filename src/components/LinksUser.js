import { useParams } from "react-router-dom";

import useUser from "../hooks/useUser";
import { ErrorMessage } from "./ErrorMessage";
import { SingleLink } from "./SingleLink";

export const LinksUser = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;
  // console.log("este consolelog", user.links);

  return (
    <ul>
      {user.links.map((link) => {
        return (
          <li>
            <SingleLink link={link} />
          </li>
        );
      })}
    </ul>
  );
};
