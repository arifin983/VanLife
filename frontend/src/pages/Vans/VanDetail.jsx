import { useEffect, useState } from "react";
import { useParams ,Link ,useLocation, useLoaderData} from "react-router-dom";
import { fetchVans } from "../../api";
export const loader = ({params})=>{
  //console.log(params);
  return fetchVans(params.id);
} ;
const VanDetail = () => {
  const location = useLocation();
  //console.log(location);
  //const params = useParams();
  //const [van, setVan] = useState();
  // useEffect(() => {
  //   const getVanDetail = async () => {
  //     let vanDetail = await fetch(
  //       `http://localhost:5000/getVanDetail/${params.id}`
  //     );
  //     vanDetail = await vanDetail.json();
  //     setVan(vanDetail);
      
  //   };
  // getVanDetail();
  // },[params.id]);
  //console.log(van.name); // Log the van object here to debug
  //console.log(van.name); // Log the van object here to debug
  const van = useLoaderData();
   const search = location.state?.search || ""
   const type = location.state?.type || "all"
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} className="back-button" relative="path">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {/* {van ? (
        <div className="van-detail">
           <img src={van.imageUrl}  />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          {/* {console.log(van.imageUrl)} */}
          {/* <h2>{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>day</span>
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : 
        <h1>Loading...</h1>
      } */} 
      <div className="van-detail">
           <img src={van.imageUrl}  />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          {/* {console.log(van.imageUrl)} */}
          <h2>{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>day</span>
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
    </div>
  );
};
export default VanDetail;
