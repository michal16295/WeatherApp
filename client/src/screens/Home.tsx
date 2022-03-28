import useGeoLocation from "../hooks/useGeoLocation";

const Home = () => {
  const location = useGeoLocation();
  return <div>Home</div>;
};

export default Home;
