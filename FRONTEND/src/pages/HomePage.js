import "../css/homePage.css";
import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { LinksList } from "../components/LinksList";
import { NewLink } from "../components/NewLink";
import { AuthContext } from "../context/AuthContext";
import { useLinks } from "../hooks/useLinks";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export const HomePage = () => {
  const {
    links,
    loading,
    addLink,
    removeLink,
    addVoteToLink,
    error,
    setSearchParams,
    searchParams,
  } = useLinks();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando links...</p>;
  if (error) return <ErrorMessage message={error} />;

  const searchParamsStartDate = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate"))
    : null;
  searchParamsStartDate?.setDate(searchParamsStartDate.getDate() + 1);
  const searchParamsEndDate = searchParams.get("endDate")
    ? new Date(searchParams.get("endDate"))
    : null;

  return (
    <section className="homePageGlobal">
      {user && <NewLink addLink={addLink} />}
      <DateRangePicker
        className="calendario"
        value={[searchParamsStartDate, searchParamsEndDate]}
        onChange={(value) => {
          const startDate = value[0].toISOString().split("T")[0];
          const endDate = value[1].toISOString().split("T")[0];
          setSearchParams(new URLSearchParams({ startDate, endDate }));
        }}
      ></DateRangePicker>
      <LinksList
        links={links}
        removeLink={removeLink}
        addVoteToLink={addVoteToLink}
      ></LinksList>
    </section>
  );
};
