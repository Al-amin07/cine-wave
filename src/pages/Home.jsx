import Banner from "../components/Banner";

import { useSelector } from "react-redux";

import Horijontal from "../components/Horijontal";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendData = useSelector((state) => state.bannerData.bannerData);
  
  const {movies : nowTrend, isLoading} = useFetch('now playing', '/movie/now_playing');
  const {movies : topRated, isLoading : topLoading } = useFetch('top-rated', '/movie/top_rated');
  // console.log(nowTrend)
  
  return (
    <div className="space-y-12 mb-12">
      <Banner />
     <Horijontal trendData={trendData} heading={'Tranding Shows'} loading={isLoading} trending={true}/>
     <Horijontal trendData={nowTrend} heading={'Now Playing'} loading={isLoading}/>
     <Horijontal trendData={topRated} heading={'Top Rated'} loading={topLoading}/>
    </div>
  );
};

export default Home;
