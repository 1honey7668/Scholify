import YellowCurve from "./YellowCurve";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#100F57] text-white overflow-hidden flex items-center">

      {/* 🔵 Right Glow Circle */}
      <div className="absolute right-[-150px] top-[-100px] w-[400px] h-[400px] bg-blue-600 opacity-30 rounded-full blur-3xl"></div>

      {/* 🔵 Left Glow Circle */}
      <div className="absolute left-[-100px] top-[100px] w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

      <div > <YellowCurve  className="absolute w-16 top-60 left-20 rotate-45 opacity-90 animate-pulse"  /></div>
      <div > <YellowCurve  className="absolute w-20 top-60 right-32 -rotate-12 opacity-90 animate-pulse"  /></div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Manage your team <br /> easily with task man
        </h1>

        <p className="text-gray-300 mb-8">
          Scholify is a school management solution that offers <br />
          a personalized portal to each type of user.
        </p>
         <Link to={"/register"}>
          <button className="bg-blue-500 px-6 py-3 rounded-full">
          Get Started
        </button>
        </Link>
       
      </div>
    </section>
  );
};

export default Hero;