import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Messages = () => {
  const MINS_DURATION = 15;

  const endOfMessageRef = useRef(null);
  const { user } = useMoralis();
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan("createdAt", Date.now() - 60 * 1000 * MINS_DURATION),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      {/* <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div> */}
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}</p>
      </div>
    </div>
  );
};

export default Messages;
