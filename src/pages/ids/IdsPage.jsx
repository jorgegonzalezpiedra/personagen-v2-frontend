import "./IdsPage.css";
import DocumentCard from "../../components/cards/documentcard/DocumentCard.jsx";
import { useState, useEffect } from "react";

const IdsPage = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch("https://personagen.fly.dev/actuator/health", {headers: {"api-key": API_KEY}});
      setIsLoading(false);
    };

    fetchData();
  }, []);

  

  return (
        <div className="flex xl:flex-row sm:max-xl:items-center flex-col justify-center items-start mt-5 gap-5">
          <DocumentCard idType="NIF"></DocumentCard>
          <DocumentCard idType="NIE"></DocumentCard>
          <DocumentCard idType="CIF"></DocumentCard>
        </div>
  );
};

export default IdsPage;
