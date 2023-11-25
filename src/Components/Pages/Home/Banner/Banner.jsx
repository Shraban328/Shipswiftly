import { Parallax } from "react-parallax";

const Banner = () => {
  return (
    <Parallax
      blur={2}
      bgImage="https://images.pexels.com/photos/6699405/pexels-photo-6699405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="hero h-[calc(100vh-140px)]" style={{}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content w-full flex-col">
          <h1 className="text-2xl font-bold text-left">
            Swift, Secure, and Seamless Parcel Solutions
          </h1>
          <div className="flex w-1/2">
            <input
              type="text"
              placeholder="search"
              className="py-3 px-6 w-full rounded-l-lg text-black"
            />
            <button className="px-3 bg-[#1874C1] border-none text-white font-medium rounded-r-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
