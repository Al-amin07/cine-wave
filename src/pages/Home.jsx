import Banner from "../components/Banner";

import { useSelector } from "react-redux";
import Card from "../components/Card";
import Horijontal from "../components/Horijontal";

const Home = () => {
  const trendData = useSelector((state) => state.bannerData.bannerData);
  const nowTrend = useSelector((state) => state.bannerData.nowPlaying);
  
  return (
    <div className="space-y-12 mb-12">
      <Banner />
     <Horijontal trendData={trendData} heading={'Tranding Shows'} trending={true}/>
     <Horijontal trendData={nowTrend} heading={'Now Playing'}/>
    </div>
  );
};

export default Home;
