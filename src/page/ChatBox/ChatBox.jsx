import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";

function ChatBox() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const SendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setChat((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://travel-guru-server-side-sigma.vercel.app/travel-chat", {
        userPrompt: userMsg.content,
      });

      setChat((prev) => [
        ...prev,
        { role: "assistant", content: res.data.travelContent },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { role: "assistant", content: "❌ AI response failed." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        {open ? <BiX /> : <FiMessageCircle />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 lg:w-[380px] h-[500px] bg-[#2b2b2b] rounded-2xl shadow-xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="p-4 bg-black text-white font-semibold">
            Travel Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-white">
            {chat.length === 0 && (
              <p className="text-gray-400 text-center mt-8">
                Ask about travel plans ✈️
              </p>
            )}

            {chat.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-black"
                    : "mr-auto bg-[#3d3f3d]"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <p className="text-gray-400 italic text-sm">
                AI is typing...
              </p>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-[#1f1f1f] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-full bg-black text-white outline-none"
              onKeyDown={(e) => e.key === "Enter" && SendMessage()}
              disabled={loading}
            />
            <button
              onClick={SendMessage}
              disabled={loading}
              className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBox;
