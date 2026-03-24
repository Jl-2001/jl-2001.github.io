import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SIGN ON WINDOW */}
        <div className="border-2 border-black bg-[#d4d0c8] shadow-[6px_6px_0px_#000]">
          <div className="bg-[#000080] text-white px-3 py-1 font-bold flex justify-between items-center">
            <span>Sign On</span>
            <span>_ □ ✕</span>
          </div>
          <div className="p-6 space-y-4 text-black">
            <div>
              <label className="block text-sm font-bold">Screen Name</label>
              <input
                className="w-full border border-black px-2 py-1 bg-white"
                value="jorgelazaro"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-bold">Status</label>
              <input
                className="w-full border border-black px-2 py-1 bg-white"
                value="Full-Stack Developer • IT Analyst"
                readOnly
              />
            </div>

            <button className="w-full border border-black bg-[#e0e0e0] px-3 py-1 hover:bg-[#c0c0c0]">
              Go Online
            </button>
          </div>
        </div>

        {/* CHAT WINDOW */}
        <div className="border-2 border-black bg-[#d4d0c8] shadow-[6px_6px_0px_#000]">
          <div className="bg-[#000080] text-white px-3 py-1 font-bold flex justify-between items-center">
            <span>AOL System Msg</span>
            <span>_ □ ✕</span>
          </div>
          <div className="p-6 space-y-3 text-black h-[300px] overflow-y-auto bg-white">
            <p>
              <span className="text-[#000080] font-bold">AOL System Msg:</span>{" "}
              Hello. Welcome to Jorge's portfolio.
            </p>
            <p>
              <span className="text-[#000080] font-bold">AOL System Msg:</span>{" "}
              Type <strong>projects</strong>, <strong>resume</strong>, or{" "}
              <strong>contact</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
