
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
<div className="flex justify-center items-center h-[240px] md:h-[300px]">
<Bars
      height="80"
      width="80"
      color="#FD6800"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
</div>
  );
};

export default Loading;
