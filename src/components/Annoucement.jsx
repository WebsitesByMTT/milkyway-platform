import React, { useState } from "react";

const Annoucement = () => {
  const [option, setOption] = useState("Announcement");
  const sideMenu = ["Announcement", "Game management"];

  return (
    <div className="h-full w-full flex items-center gap-[1vw] p-[1vw] justify-center">
      <div className="h-full w-[25%] flex flex-col gap-[1vw]">
        {sideMenu.map((data, index) => (
          <div
            key={index}
            className={`p-[2%] w-full overflow-hidden ${
              option === data
                ? "before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-[#FFFC4C] before:via-[#FEDF0C] before:to-[#FEDF0C] before:rounded-[0.5vw] before:top-0 before:left-0 before:slideOut"
                : "from-[#98F0FE] via-[#4192E7BF] to-[#69D3F8]"
            } bg-gradient-to-b rounded-[0.5vw] from-[#98F0FE] via-[#4192E7BF] to-[#69D3F8] text-center h-[20%] flex items-center justify-center relative`}
            onClick={() => {
              setOption(data);
            }}
          >
            <span
              className={`text-[2.5vw] ${
                option === data ? "text-[#fff]" : "text-[#00FF39]"
              } font-[800] text-stroke-3 leading-[2vw] z-[4] transition-all`}
            >
              {data}:
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-[75%] p-[0.4%] h-full bg-gradient-to-b from-[#5FFEFB] to-[#4057F7] rounded-[0.5vw]">
        <div
          style={{ backgroundImage: "url(/announcementbg.png)" }}
          className="w-full h-full flex items-center justify-center rounded-[0.5vw] text-[2.5vw] text-white"
        >
          <div className="w-[90%] h-[90%] m-auto overflow-hidden">
            {option === "Announcement" && <Announce />}
            {option === "Game management" && <GameManage />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Announce = () => {
  return (
    <p className="slideIn">
      Upgrade version with more featured games and big jackpots is <br /> coming
      soon! <br />
      More FUN! <br />
      More WIN!
    </p>
  );
};

const GameManage = () => {
  return (
      <p className="slideIn">
        To access game management by long pressing the game logos in the lobby.
      </p>
  );
};

export default Annoucement;
