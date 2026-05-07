"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=2040&aff_id=44723&source=Verizon" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/12xVYF5.png" 
        alt="Verizon Logo" 
        className="h-10 sm:h-15 w-25 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
