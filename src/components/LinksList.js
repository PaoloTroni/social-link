import "../css/linkListPage.css";
import { SingleLink } from "./SingleLink";

export const LinksList = ({ links, removeLink, addVoteToLink }) => {
  return links.length ? (
    <ul className="linkListGlobal">
      {links.map((link) => (
        <li className="linkListLi" key={link.id}>
          <SingleLink
            link={link}
            removeLink={removeLink}
            addVoteToLink={addVoteToLink}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links creados..</p>
  );
};
