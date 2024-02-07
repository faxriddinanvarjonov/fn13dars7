import { useState } from "react";
import "./modal.css";

function Modal() {
  let [validate, setValidate] = useState(false);
  function createModal() {
    setValidate(true);
  }


  return (
    <>
      <button
        onClick={createModal}
        className="btn w-[150px] h-[50px] bg-green-700 rounded-xl text-white"
      >
        Open Modal
      </button>
      <div
        className={
          validate == true
            ? "Modal w-[800px] h-[300px] bg-slate-700 rounded-3xl flex p-[30px] flex-col gap-2 absolute"
            : "hidden"
        }
      >
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-4xl">Naj`ot talim</h1>
          <button
            onClick={() => {
              setValidate(false);
            }}
            className="btn text-white font-light w-[70p] bg-neutral-500 rounded-xl"
          >
            close
          </button>
        </div>
        <p className="text-white text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          eveniet nesciunt placeat nemo, minus illo magni nihil et adipisci aut
          qui molestiae repellat dolorem obcaecati earum ab laboriosam! Corrupti
          hic suscipit debitis sapiente a culpa quos soluta necessitatibus quam
          deleniti ad, excepturi magni error possimus facilis provident ab
          accusantium iusto cupiditate. Facilis culpa unde, distinctio id
          maiores beatae quidem modi sint aspernatur adipisci exercitationem
          nesciunt sit laborum commodi perferendis placeat autem, vel, ut
          provident ipsum maxime aut. Eligendi sint iusto doloremque numquam
          natus ad quae dolor architecto commodi, ab ex tempore nobis cum itaque
          voluptate autem obcaecati corporis. Laboriosam, at.
        </p>
      </div>
    </>
  );
}

export default Modal;
