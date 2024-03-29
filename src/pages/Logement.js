import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { useLocation, useParams } from "react-router-dom";
import Gallery from "../components/molecules/Gallery";
import AccomodationTitle from "../components/atoms/AccomodationTitle";
import Tag from "../components/atoms/Tag";
import Host from "../components/atoms/Host";
import Rate from "../components/molecules/Rate";
import styled from "styled-components";
import Collapse from "../components/molecules/Collapse";
import PropTypes from "prop-types";
import KasaLoader from "../components/organisms/Loader";
import useFetch from "../utils/useFetch";
import Error from "./Error";

const HostRateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const SectionWrapper = styled.div`
  width: 86%;
  margin: 10px auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const SectionTwoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    width: 86%;
    margin: 10px auto;
    flex-direction: row;
    justify-content: space-between;
    gap: 76px;
  }
`;

function Logement() {
  const { logementId } = useParams();
  const { data, loading } = useFetch("/db/logements.json");

  const locations = useLocation();

  if (loading) return <KasaLoader></KasaLoader>;

  const logementData =
    data && data.find((logement) => logement.id === logementId);

  if (!logementData || logementId !== locations.pathname.split("/")[2]) {
    return <Error />;
  }

  const {
    title,
    pictures,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = logementData;

  return (
    <>
      <Header />
      <Gallery images={pictures}></Gallery>
      <SectionWrapper>
        <div>
          <AccomodationTitle
            title={title}
            location={location}></AccomodationTitle>
          <Tag tags={tags}></Tag>
        </div>
        <HostRateWrapper>
          <Rate rating={rating}></Rate>
          <Host host={host}></Host>
        </HostRateWrapper>
      </SectionWrapper>

      <SectionTwoWrapper>
        <Collapse title="Description" content={description}></Collapse>

        <Collapse
          key={Math.random()}
          title="Équipements"
          content={
            equipments &&
            equipments?.map((eq) => <li key={Math.random()}> {eq}</li>)
          }></Collapse>
      </SectionTwoWrapper>

      <Footer />
    </>
  );
}
Logement.propTypes = {
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,

  host: PropTypes.objectOf(PropTypes.string).isRequired,
};

Logement.defaultProps = {
  location: "",
  tags: "",
  pictures: [],
  title: "",
  rating: "",
  host: {},
};

export default Logement;
