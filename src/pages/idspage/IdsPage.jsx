import "./IdsPage.css";
import DocumentCard from "../../components/cards/documentcard/DocumentCard.jsx";

const IdsPage = () => {
  return (
    <div>
      <DocumentCard idType="NIF"></DocumentCard>
      <DocumentCard idType="NIE"></DocumentCard>
      <DocumentCard idType="CIF"></DocumentCard>
    </div>
  );
};

export default IdsPage;
