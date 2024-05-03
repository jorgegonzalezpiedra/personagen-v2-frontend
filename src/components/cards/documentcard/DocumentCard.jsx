import "./DocumentCard.css";
import { RestartIcon32 } from "../../../assets/Icons";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const DocumentCard = ({ idType }) => {
  useEffect(() => {
    loadComponent(idType);
  }, []);

  const [document, setDocument] = useState("");
  const [number, setNumber] = useState("");

  const [nif, setNif] = useState({
    letter: null,
  });

  const [nie, setNie] = useState({
    firstLetter: null,
    lastLetter: null,
  });

  const [cif, setCif] = useState({
    orgTypeCode: null,
    orgType: null,
    provinceCode: null,
    province: null,
    correlativeNumber: null,
    controlDigit: null,
  });

  const loadComponent = async (idType) => {
    try {
      if (idType == "NIF") {
        const response = await fetch("http://localhost:8080/documents/nif"); // Replace with your API URL
        const responseData = await response.json();
        setDocument(responseData.document);
        setNumber(responseData.number);
        setNif({
          letter: responseData.letter,
        });
      }

      if (idType == "NIE") {
        const responseNie = await fetch("http://localhost:8080/documents/nie"); // Replace with your API URL
        const responseDataNie = await responseNie.json();
        setDocument(responseDataNie.document);
        setNumber(responseDataNie.number);
        setNie({
          firstLetter: responseDataNie.firstLetter,
          lastLetter: responseDataNie.lastLetter,
        });
      }

      if (idType == "CIF") {
        const responseCif = await fetch("http://localhost:8080/documents/cif");
        const responseDataCif = await responseCif.json();
        setDocument(responseDataCif.document);
        setNumber(responseDataCif.number);
        setCif({
          orgTypeCode: responseDataCif.orgTypeCode,
          orgType: responseDataCif.orgType,
          provinceCode: responseDataCif.provinceCode,
          province: responseDataCif.province,
          correlativeNumber: responseDataCif.correlativeNumber,
          controlDigit: responseDataCif.controlDigit,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  DocumentCard.propTypes = {
    idType: PropTypes.string.isRequired,
  };

  return (
    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-[500px] mr-5">
      <div className="flex flex-row">
        <h2 className="text-black font-bold text-lg lg:text-3xl">{idType}</h2>
        <div className="flex flex-col flex-1">
          <div className="flex flex-col w-[100px] gap-3 sm:flex-row mt-3">
            <button
              onClick={() => loadComponent(idType)}
              className="text-black items-center bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition lg:text-4xl"
            >
              <RestartIcon32 />
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
          <div className="mt-2">
            <span className="text-black tracking-tight xl:text-4xl">
              Documento
            </span>
            <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
              {document}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-black tracking-tight xl:text-4xl">
              Número
            </span>
            <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
              {number}
            </span>
          </div>
          {idType == "NIE" ? (
            <div className="flex mt-2">
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Primera letra
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {nie.firstLetter}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Última letra
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {nie.lastLetter}
                </span>
              </div>
            </div>
          ) : null}
          {idType == "CIF" ? (
            <div className="mt-2">
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Codigo de tipo de empresa
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {cif.orgTypeCode}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Tipo de empresa
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {cif.orgType}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Codigo de provincia
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {cif.provinceCode}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Provincia
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {cif.province}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Número correlativo
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {cif.correlativeNumber}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Dígito de control
                </span>
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                  {cif.controlDigit}
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
