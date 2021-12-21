import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-40 h-4/6 items-center justify-center w-full space-y-10 rounded-lg">
        <div
          className="flex flex-col space-y-4 rounded-lg p-10 z-50"
          style={{
            boxShadow: "35px 35px 86px #959362, -35px -35px 86px #e9e799",
            backdropFilter: "blur(20px)",
          }}
        >
          <Image
            className={`rounded-full object-cover ${
              isAuthenticating ? "animate-spin" : ""
            }`}
            src="https://links.papareact.com/3pi"
            width="200"
            height="200"
          />
          <button
            onClick={authenticate}
            className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse hover:bg-yellow-400 transition text-black"
          >
            Login via Metamask
          </button>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851?b=1&k=20&m=1294021851&s=170667a&w=0&h=vsypj3JPqiWOU5q21fX3lHt1Z7wphVNE8kfqdpogPSs="
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Login;
