import { useState } from "react";

function Accordion() {
  let [val, setVal] = useState(false);
  let [val2, setVal2] = useState(false);
  let [val3, setVal3] = useState(false);

  function changeVal() {
    setVal2(false);
    setVal3(false);
    setVal(true);
  }

  function changeVal2() {
    setVal(false);
    setVal3(false);
    setVal2(true);
  }
  function changeVal3() {
    setVal(false);
    setVal2(false);
    setVal3(true);
  }

  return (
    <>
      <div className="flex flex-col w-[800px] h-[270px] bg-slate-400 rounded-3xl p-[50px] gap-3">
        <div className="w-full bg-slate-700 rounded-xl p-[8px] cursor-pointer">
          <p onClick={changeVal} className="text-white">
            Card 1
          </p>
          <p
            className={val == true ? "text-white text-sm font-thin" : "hidden"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            necessitatibus nobis iusto quo illo architecto. Aliquam tempore
            expedita odit nihil culpa nemo. Dolorem excepturi placeat dicta odio
            voluptatem corrupti rerum.
          </p>
        </div>
        <div
          onClick={changeVal2}
          className="w-full bg-slate-700 rounded-xl p-[8px] cursor-pointer"
        >
          <p className="text-white">Card 2</p>
          <p
            className={val2 == true ? "text-white text-sm font-thin" : "hidden"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            necessitatibus nobis iusto quo illo architecto. Aliquam tempore
            expedita odit nihil culpa nemo. Dolorem excepturi placeat dicta odio
            voluptatem corrupti rerum.
          </p>
        </div>
        <div
          onClick={changeVal3}
          className="w-full bg-slate-700 rounded-xl p-[8px] cursor-pointer"
        >
          <p className="text-white">Card 3</p>
          <p
            className={val3 == true ? "text-white text-sm font-thin" : "hidden"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            necessitatibus nobis iusto quo illo architecto. Aliquam tempore
            expedita odit nihil culpa nemo. Dolorem excepturi placeat dicta odio
            voluptatem corrupti rerum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Accordion;
