import "../../Component/Travel/NavBar/NavBar.css";

import { TiPlus } from "react-icons/ti";

const btns = ["Round Trip", "One Way", "Multi Trip"];

const Btns = () => {
  return (
    <div className="text-center flex gap-2 mt-10 justify-center pb-1">
      {btns.map((btn, i) => (
        <button
          key={i}
          className="hover:bg-blue-800 py-2 px-3 transition-all ease-in-out rounded-sm hover:text-white"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default function Search() {
  return (
    <div className=" search">
      <div className=" border-b">
        <div className="container m-auto">
          <h3 className="text-2xl font-bold ">Master Price</h3>
        </div>
      </div>
      <div className="container m-auto">
        <Btns />
        <div className="border-b-4 mt-2"></div>
        <form action="">
          <div className="flex row mt-3">
            <div className="col-sm-1">
              <input
                type="text"
                className="text-black-600 w-24 h-10 text-center"
                placeholder="LHR"
              />
            </div>
            &nbsp;&nbsp;
            <div className="col-sm-1">
              <input
                type="text"
                className="text-black-600 w-24 h-10 text-center"
                placeholder="CDG"
              />
            </div>
            &nbsp;&nbsp;
            <div className="col-sm-1">
              <input
                type="date"
                className="text-black-600 w-40 h-10 text-center"
                placeholder="LHR"
              />
            </div>
            &nbsp;&nbsp;
            <div className="col-sm-1">
              <select className="text-black-600 w-24 h-10 text-center">
                <option>Day -</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            &nbsp;&nbsp;
            <div className="col-sm-1">
              <select className="text-black-600 w-24 h-10 text-center">
                <option>Day +</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            &nbsp;&nbsp;
            <div className="col-sm-1">
              <select className="text-black-600 w-38 h-10 text-center">
                <option disabled selected>
                  Any time
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            &nbsp;&nbsp;
            <span className="mt-3 text-center">
              {" "}
              <TiPlus />
            </span>
            <div className="col-sm-1">
              <select className="text-black-600 w-24 h-10 text-center">
                <option disabled selected>
                  ADT
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            &nbsp;&nbsp;
            <div className="col-sm-1">
              {" "}
              <select className="text-black-600 w-24 h-10 text-center">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <span className="mt-3 text-center ml-2">
          
              <TiPlus />
            </span>
          </div>
            {/* Horizontal  */}
            <div className="border-b-4 mt-3 text-sky-800"></div>
            {/* Horizontal  */}
          {/* checkbox */}
          <div className="flex gap-44 row mt-3">
            <div className="div-col-lg-4 mt-3">
              <input type="checkbox" className="text-black-600  text-center" />{" "}
              &nbsp;<span className="font-bold">Extra Options</span>
            </div>
            {/* radio Button start */}
            <div className="div-lg-4">
              <span className="font-bold">Enviroment</span> &nbsp;&nbsp;
              <input
                type="radio"
                name="radio-4"
                className="radio radio-primary mt-4"
                checked
              />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">Dummy</span>
              &nbsp;&nbsp; &nbsp;
              <input
                type="radio"
                name="radio-4"
                className="radio radio-primary mt-4"
                checked
              />{" "}
              &nbsp; <span className="font-bold">PDT</span>
            </div>
            {/* radio Button Ending */}
            <div className="col-lg-4 mt-1">
              <button className="w-56 h-8">Search</button>
            </div>
          </div>
        </form>
        {/* Horizontal  */}
        <div className="border-b-4 mt-2"></div>
        {/* Horizontal  */}
        <span className="font-bold ml-44">Data Parse Successfully</span>
      </div>
    </div>
  );
}
