import "./DocumentCard.css";
import { RestartIcon32 } from "../../../assets/Icons";

const DocumentCard = ({ type, data }) => {
  return (
    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-auto">
      <div>
        <h2 className="text-black font-bold text-lg lg:text-3xl">{type}</h2>
      </div>
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
          <div className="mt-2">
            <span className="text-black tracking-tight xl:text-4xl">
              Documento
            </span>
            <input
              disabled
              className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
              value={data.document}
            ></input>
            <span className="text-black tracking-tight xl:text-4xl">
              Número
            </span>
            <input
              disabled
              className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
              value={data.number}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
            <div>
              <RestartIcon32 />
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
