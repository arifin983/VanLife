import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
  const { currentVan } = useOutletContext();
  return (
    <img
      src={currentVan.imageUrl}
      alt={`Picture of ${currentVan.name}`}
      className="host-van-detail-image"
    />
  );
};
export default HostVanPhoto;
