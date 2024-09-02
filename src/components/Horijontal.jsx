import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "./Card";
import { useRef } from "react";


const Horijontal = ({trendData, heading, trending}) => {
    const containerRef = useRef();
    const handleLeft = () => {
        console.log('Hello')
        containerRef.current.scrollBy({ left: 255, behavior: 'smooth' });  
    }
    const handleRight = () => {
        console.log('Hello')
        containerRef.current.scrollBy({ left: -255, behavior: 'smooth' });  
    }
        
    return (
        <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold mb-5">{heading}</h2>
     <div className="  relative" >
     <div ref={containerRef} className=" relative  grid  grid-flow-col overflow-hidden gap-5  ">
        {/* <div className=" grid grid-cols-1 grid-flow-col overflow-auto  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"> */}
          {trendData.map((data, index) => (
            <Card key={data.id} data={data} index={index + 1} trending={trending} />
          ))}
            
        </div>
        {/* <div className="absolute   w-full bg-transparent top-1/2 -translate-y-1/2 flex justify-between">
          <FaAngleLeft onClick={handleRight} className="text-4xl hover:bg-orange-700 font-semibold  p-2 text-white rounded-full bg-orange-600"/>
        <FaAngleRight  onClick={handleLeft}  className="text-4xl font-semibold  p-2 text-white rounded-full hover:bg-orange-700 bg-orange-600"/>
        </div> */}
          <FaAngleLeft onClick={handleRight} className="text-4xl hover:bg-orange-700 font-semibold absolute top-1/2 -translate-y-1/2 left-1  p-2 text-white rounded-full bg-orange-600"/>
          <FaAngleRight  onClick={handleLeft}  className="text-4xl absolute right-1 top-1/2 -translate-y-1/2 font-semibold  p-2 text-white rounded-full hover:bg-orange-700 bg-orange-600"/>
     </div>
      </div>
    );
};

export default Horijontal;