import "./IdsPage.css";
import DocumentCard from "../../components/cards/documentcard/DocumentCard.jsx";

const IdsPage = () => {
  return (
    <div className="flex justify-center">
      <DocumentCard idType="NIF"></DocumentCard>
      <DocumentCard idType="NIE"></DocumentCard>
      <DocumentCard idType="CIF"></DocumentCard>
    </div>
  );
};

export default IdsPage;
