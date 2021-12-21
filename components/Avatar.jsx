import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ logOutPress, username }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="z-50 rounded-full hover:opacity-75 bg-black cursor-pointer"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      onClick={() => logOutPress && logout()}
      layout="fill"
    />
  );
};

export default Avatar;
