"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'; // Adjust the path if necessary

export default function Food() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const navigate = useNavigate();
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "I will always hold your hand",
      "Pretty please",
      "I will meet all your expectations of relationship",
      "I will give you your favourite tulips and chocolates",
      "PLEASE HOTTIE",
      "I will give you unlimited kisses",
      "I will get you a boquet everyday",
      "Please baby",
      "please babe",
      "PRETTY PLEASE",
      "MY HOTTIE PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate("/Landing");
    }, 4000);
  };

  return (
    <div className="bg-custom-bg -mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-mono text-white font-bold"> YAYYYY  😍😍😘😘🤩🤩</div>
          <div className="my-4 text-4xl pacifico-font text-white font-bold"> I love you Hottie 💕</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="/assets/tenor (1).gif"
          />
          <div className="my-4">
            <h1 className="text-4xl text-white pacifico-font">Will you be my forever</h1>
            <h1 className="text-2xl text-white pacifico-font">We won't ever speak of separation again</h1>
          </div>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
