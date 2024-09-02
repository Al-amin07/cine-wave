import { useSelector } from "react-redux";
import { MdStar } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({data, index, trending}) => {
    const imageUrl = useSelector((state) => state.bannerData.imageUrl);

    return (
        <Link to={`/${data?.media_type}/${data?.id}`} className=" relative group w-[235px]  ">
            <img className="md:h-auto w-full rounded-t-xl" src={imageUrl + data?.poster_path} alt="" />
            <div className="absolute bottom-0 flex flex-col items-center justify-center gap-1 bg-black/30 backdrop-blur-2xl w-full py-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-linear">
                <p className="text-lg line-clamp-1 text-neutral-100 font-semibold">
                  {data?.title || data?.name}
                </p>
                <p className="text-lg flex items-center  gap-2 font-bold text-neutral-100">
                  Rating :{" "}
                  <span className="text-orange-600  font-bold">
                    {Number(data?.vote_average).toFixed(1)}
                  </span>
                  <MdStar className=" text-xl text-orange-500 "/>
                </p>
               
              </div>
        <div className="absolute top-3">
            {
                trending && <p className=" px-3 bg-black/60 py-1 rounded-r-full backdrop-blur-2xl">#{index} trending</p>
            }
        </div>
     
        </Link>
    );
};

export default Card;