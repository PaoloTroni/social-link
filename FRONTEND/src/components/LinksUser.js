import "../css/linksUser.css";
import { useParams } from "react-router-dom";

import useUser from "../hooks/useUser";
import { ErrorMessage } from "./ErrorMessage";
import { SingleLink } from "./SingleLink";

export const LinksUser = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <ul className="UlLinkUser">
      {user.links.map((link) => {
        return (
          <li className="linksListli" key={link.id}>
            <SingleLink link={link}></SingleLink>
          </li>
        );
      })}
    </ul>
  );
};
