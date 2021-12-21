import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username: (current: ${user.getUsername()})`
    );
    if (!username) {
      alert("Username cannot be empty!");
      return;
    }
    setUserData({
      username: username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disable={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-400"
      >
        Change your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
