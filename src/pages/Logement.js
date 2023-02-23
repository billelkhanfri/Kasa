import Header from "../Components/organisms/Header";
import Footer from "../Components/organisms/Footer";
import { useParams } from "react-router-dom";
import Slider from "../Components/molecules/Slider";
import logement from "../Local-json/logements.json";
import AccomodationTitle from "../Components/atoms/AccomodationTitle";
import Tag from "../Components/atoms/Tag";
import Host from "../Components/atoms/Host";
import Rate from "../Components/molecules/Rate";
import styled from "styled-components";
import DropDown from "../Components/molecules/DropDown";
import PropTypes from "prop-types";

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
  width: 90%;
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
    width: 90%;
    margin: 10px auto;
    flex-direction: row;
    justify-content: space-between;
    gap: 76px;
  }
`;

function Logement() {
  const { logementId } = useParams();
  // const [data,setData] = useState([])
  // useEffect(() => {

  // axios.get("../logements.json").then((res) => setData(res.data));

  // }, [])
  //     const { data, loading, error} = useFetch("/db/logements.json")
  // if (loading) return <h1>loading...</h1>;
  //  if (error) console.log(error);

  const logementData = logement.find((logement) => logement.id === logementId);
  const {
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = logementData;
  const styles = {
    fontSize: "16px",
    color: "red",

    "@media (min-width: 768px)": {
      fontSize: "20px",
      color: "green",
    },
  };

  return (
    <>
      <Header />
      <Slider images={pictures}></Slider>
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
        <DropDown title="Description" content={description}></DropDown>

        <DropDown
          key={Math.random()}
          title="Équipements"
          content={
            equipments &&
            equipments?.map((eq) => <div key={Math.random()}> {eq}</div>)
          }
          styles={styles}></DropDown>
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
