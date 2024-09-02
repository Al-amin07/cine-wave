import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlayCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrFormNext } from "react-icons/gr";

const Banner = () => {
  const bannerData = useSelector((state) => state.bannerData.bannerData);
  const imageUrl = useSelector((state) => state.bannerData.imageUrl);
  console.log("In Banner --> ", imageUrl);
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
        
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper min-h-[600px] z-30 mt-0 rounded-lg "
      >
        {bannerData.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <img
              className=""
              src={imageUrl + movie.backdrop_path}
              alt={movie.title || movie.name}
            />
            <div className="  bg-gradient-to-t from-neutral-950 to-transparent w-full h-full absolute top-0"></div>
            <div className="absolute top-1/2 -translate-y-1/2 max-w-md left-16 px-3 ">
              <h1 className="text-4xl lg:text-5xl font-bold ">
                {movie.title || movie.name}
              </h1>
              <p className="text-neutral-200 line-clamp-3 my-3">
                {movie?.overview}
              </p>
              <div className="flex items-center gap-6">
                <p className="text-lg text-neutral-100">
                  Rating :{" "}
                  <span className="text-orange-600 font-bold">
                    {Number(movie?.vote_average).toFixed(1)}
                  </span>
                </p>
                <span>|</span>
                <p className="text-lg text-neutral-100 font-semibold">
                  Total Viewd :{" "}
                  <span>{Number(movie?.vote_count).toFixed(0)}</span>
                </p>
              </div>
              <button className="btn flex mt-6 items-center hover:animate-color-change">
                <FaPlayCircle className="text-3xl " />
                Play Now
              </button>
            </div>
          </SwiperSlide>
        ))}
    
      </Swiper>
    </div>
  );
};

export default Banner;
