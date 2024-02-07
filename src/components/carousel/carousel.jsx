import { useState } from "react";
import "./carousel.css";

function Carousel() {
  let [Counter, SetCounter] = useState(0);

  function handleLeft() {
    SetCounter(Counter - 200);
    carousel.scrollLeft = Counter;
  }
  function handleRight() {
    SetCounter(Counter + 200);
    carousel.scrollLeft = Counter;
  }

  let cardsCss =
    "flex w-[250px] h-[400px] bg-stone-800 rounded-[30px] items-center text-white justify-center";

  return (
    <>
      <button
        disabled={Counter <= -100 ? true : false}
        className={
          Counter <= -100 ? "cursor-not-allowed btnTurn left" : "btnTurn left"
        }
        onClick={handleLeft}
      >
        {Counter <= -100 ? "Disabled" : "Left"}
      </button>
      <div className="flex w-[880px] h-[500px] rounded-[40px] items-center bg-red-400 select-none p-[150px]">
        <div
          id="carousel"
          className="w-[750px] flex items-center overflow-hidden"
        >
          <div className="cards flex gap-10 text-8xl w-[2700px]">
            <div className={cardsCss}>1</div>
            <div className={cardsCss}>2</div>
            <div className={cardsCss}>3</div>
            <div className={cardsCss}>4</div>
            <div className={cardsCss}>5</div>
            <div className={cardsCss}>6</div>
            <div className={cardsCss}>7</div>
            <div className={cardsCss}>8</div>
            <div className={cardsCss}>9</div>
          </div>
        </div>
      </div>
      <button
        disabled={Counter >= 2100 ? true : false}
        onClick={handleRight}
        className={
          Counter >= 2100 ? "cursor-not-allowed btnTurn Right" : "btnTurn Right"
        }
      >
        {Counter >= 2100 ? "Disabled" : "Right"}
      </button>
    </>
  );
}

export default Carousel;
