import Banner from "../components/Banner";

import { useSelector } from "react-redux";

import Horijontal from "../components/Horijontal";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendData = useSelector((state) => state.bannerData.bannerData);
  
  const {movies : nowTrend, isLoading} = useFetch('now playing', '/movie/now_playing');
  const {movies : topRated, isLoading : topLoading } = useFetch('top-rated', '/movie/top_rated');
  // console.log(nowTrend)
  const { movies : populars, isLoading: popLoading} = useFetch('popular', '/tv/popular');
  const { movies: arraivings, isLoading: arrLoading} = useFetch('arraiving', '/tv/on_the_air')
  return (
    <div className="space-y-16 mb-12">
      <Banner />
     <Horijontal trendData={trendData} heading={'Tranding Shows'} loading={isLoading} trending={true}/>
     <Horijontal trendData={nowTrend} heading={'Now Playing'} loading={isLoading}/>
     <Horijontal trendData={topRated} heading={'Top Rated'} loading={topLoading}/>
     <Horijontal trendData={populars} heading={'Popular Shows'} loading={popLoading}/>
     <Horijontal trendData={arraivings} heading={'Arraiving Soon'} loading={arrLoading}/>
    </div>
  );
};

export default Home;
