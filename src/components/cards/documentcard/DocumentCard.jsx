import "./DocumentCard.css";
import { RestartIcon} from "../../../assets/Icons";
import PropTypes from "prop-types";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

const DocumentCard = ({ idType }) => {
  useEffect(() => {
    loadComponent(idType);
  }, []);

  const [moreInfo, setMoreInfo] = useState(false);
  const [document, setDocument] = useState("");
  const [number, setNumber] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

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
        const response = await fetch("https://personagen.fly.dev/documents/nif", {headers:{"api-key" : API_KEY}});
        const responseData = await response.json();
        setDocument(responseData.document);
        setNumber(responseData.number);
        setNif({
          letter: responseData.letter,
        });
      }

      if (idType == "NIE") {
        const responseNie = await fetch("https://personagen.fly.dev/documents/nie", {headers:{"api-key" : API_KEY}}); // Replace with your API URL
        const responseDataNie = await responseNie.json();
        setDocument(responseDataNie.document);
        setNumber(responseDataNie.number);
        setNie({
          firstLetter: responseDataNie.firstLetter,
          lastLetter: responseDataNie.lastLetter,
        });
      }

      if (idType == "CIF") {
        const responseCif = await fetch("https://personagen.fly.dev/documents/cif", {headers:{"api-key" : API_KEY}});
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
    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-[500px] sm:max-xl:mt-5">
      <div className="flex flex-row justify-between">
        <h2 className="text-black font-bold text-3xl">{idType}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => loadComponent(idType)}
            className="text-black items-center bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition lg:text-4xl"
          >
            <RestartIcon/>
          </button>
        </div>
      </div>
      <div className="px-6 py-8 sm:p-10 sm:pt-3 sm:pb-6">
        <div className="items-center w-full justify-center flex flex-col text-left">
          <div className="mt-2">
            <span className="text-black tracking-tight text-4xl">
              Documento
            </span>
            <CopyToClipboard text={document}>
              <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                {document}
              </span>
            </CopyToClipboard>
          </div>
          <div className="mt-2">
            <span className="text-black tracking-tight text-4xl">
              Número
            </span>
            <CopyToClipboard text={number}>
              <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                {number}
              </span>
            </CopyToClipboard>
          </div>
          {idType == "CIF" && !moreInfo ? (
            <div className="border-t-2 border-black mt-5">
              <button
                onClick={() => setMoreInfo(true)}
                className="mt-2 text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl"
              >
                MAS INFO
              </button>
            </div>
          ) : null}
          {idType == "NIE" && moreInfo ? (
            <div className="flex mt-2">
              <div className="mt-2">
                <span className="text-black tracking-tight text-4xl">
                  Primera letra
                </span>
                <CopyToClipboard text={nie.firstLetter}>
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8py-4 text-4xl">
                    {nie.firstLetter}
                  </span>
                </CopyToClipboard>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight text-4xl">
                  Última letra
                </span>
                <CopyToClipboard text={nie.lastLetter}>
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                    {nie.lastLetter}
                  </span>
                </CopyToClipboard>
              </div>
            </div>
          ) : null}
          {idType == "CIF" && moreInfo ? (
            <div className="mt-2">
              <div className="mt-2">
                <span className="text-black tracking-tight text-4xl">
                  Tipo de empresa
                </span>
                <CopyToClipboard text={cif.orgTypeCode - cif.orgType}>
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                    {cif.orgTypeCode} - {cif.orgType}
                  </span>
                </CopyToClipboard>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight text-4xl">
                  Codigo de provincia
                </span>
                <CopyToClipboard text={cif.provinceCode - cif.province}>
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                    {cif.provinceCode} - {cif.province}
                  </span>
                </CopyToClipboard>
              </div>
              {/* <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Número correlativo
                </span>
                <CopyToClipboard text={cif.correlativeNumber}>
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                    {cif.correlativeNumber}
                  </span>
                </CopyToClipboard>
              </div>
              <div className="mt-2">
                <span className="text-black tracking-tight xl:text-4xl">
                  Dígito de control
                </span>
                <CopyToClipboard text={cif.controlDigit}>
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
                    {cif.controlDigit}
                  </span>
                </CopyToClipboard>
              </div> */}
            </div>
          ) : null}
          {(idType == "NIE" || idType == "CIF") && moreInfo ? (
            <div className="border-t-2 border-black mt-5">
              <button
                onClick={() => setMoreInfo(false)}
                className="mt-2 text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl"
              >
                MENOS INFO
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
