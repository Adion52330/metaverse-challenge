import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessageRef }) => {
  const { Moralis, user } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //   console.log(message);
        },
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex fixed bottom-10 opacity-80 bg-black px-6 py-4 max-w-2xl rounded-full border-4 border-blue-400 shadow-xl w-11/12">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none flex-grow bg-transparent pr-5 text-white placeholder-gray-500"
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
