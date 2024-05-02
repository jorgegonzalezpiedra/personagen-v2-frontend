import "./IdsPage.css";
import DocumentCard from "../../components/cards/documentcard/DocumentCard.jsx";
import { useState, useEffect } from "react";

const IdsPage = () => {

  useEffect(() => {
    loadPage();
  }, []);

  const [nif, setNif] = useState({
    document: null,
    number: null,
    letter: null,
  });

  const [nie, setNie] = useState({
    document: null,
    number: null,
    firstLetter: null,
    lastLetter: null
  });

  const [cif, setCif] = useState({
    document: null,
    number: null,
    orgTypeCode: null,
    orgType: null,
    provinceCode: null,
    province: null,
    correlativeNumber: null,
    controlDigit: null
  });

  async function loadPage() {
    try {

      const response = await fetch("http://localhost:8080/documents/nif"); // Replace with your API URL
      const responseData = await response.json();
      setNif({
        document: responseData.document,
        number: responseData.number,
        letter: responseData.letter,
      });

      const responseNie = await fetch("http://localhost:8080/documents/nie"); // Replace with your API URL
      const responseDataNie = await responseNie.json();
      setNie({
        document: responseDataNie.document,
        number: responseDataNie.number,
        firstLetter: responseDataNie.firstLetter,
        lastLetter: responseDataNie.lastLetter
      });

      const responseCif = await fetch("http://localhost:8080/documents/cif"); // Replace with your API URL
      const responseDataCif = await responseCif.json();
      setNie({
        document: responseDataNie.document,
        number: responseDataNie.number,
        orgTypeCode: responseDataCif.orgTypeCode,
        orgType: responseDataCif.orgType,
        provinceCode: responseDataCif.provinceCode,
        province: responseDataCif.province,
        correlativeNumber: responseDataCif.correlativeNumber,
        controlDigit: responseDataCif.controlDigit
      });



    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  }
  return (
    
    <div>
      <DocumentCard type="NIF" data={nif}></DocumentCard>
      <DocumentCard type="NIE" data={nie}></DocumentCard>
      <DocumentCard type="CIF" data={cif}></DocumentCard>
    </div>
  );
};

export default IdsPage;
