import "../css/linkListPage.css";
import { SingleLink } from "./SingleLink";

export const LinksList = ({ links, removeLink, addVoteToLink }) => {
  return links.length ? (
    <ul className="linkListGlobal">
      {links.map((link) => (
        <li className="linksListli" key={link.id}>
          <SingleLink
            link={link}
            removeLink={removeLink}
            addVoteToLink={addVoteToLink}>
          </SingleLink>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links creados..</p>
  );
};
