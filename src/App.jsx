import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import useMovie from "./hooks/useMovie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBannerData, setImageUrl, setNowPlaying } from "./store/bannerDataSlice";

function App() {
  const movieApi = useMovie();
  const dispatch = useDispatch();
  const bannerData = async () => {
    try {
      const { data } = await movieApi.get('/trending/all/week')
      // console.log(data.results)
      dispatch(setBannerData(data.results))

    } catch (error) {
      console.log(error.message)
    }
  }
  const nowPlayingData = async () => {
    try {
      const { data } = await movieApi.get('/movie/now_playing')
      console.log(data.results)
      dispatch(setNowPlaying(data.results))
    } catch (error) {
      console.log(error)
    }
  }

  const configureData = async () => {
    const { data } = await movieApi.get('/configuration')
    // console.log('In Configure ---> ',data.images.base_url)
    dispatch(setImageUrl(data.images.base_url + 'original'))
  }
  useEffect(() => {
    bannerData();
    nowPlayingData();
    configureData();
  }, [])
  return (
    <div className="bg-neutral-950 text-white min-h-[calc(100vh-64px)]">
      <Header />
      <div className="">
      <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
