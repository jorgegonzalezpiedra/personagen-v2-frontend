import "./IdsPage.css";
import DocumentCard from "../../components/cards/documentcard/DocumentCard.jsx";

const IdsPage = () => {
  return (
    <div className="flex flex-row justify-center items-start mt-5">
      <DocumentCard idType="NIF"></DocumentCard>
      <DocumentCard idType="NIE"></DocumentCard>
      <DocumentCard idType="CIF"></DocumentCard>
    </div>
  );
};

export default IdsPage;
