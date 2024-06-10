import React from "react";
import { useParams, NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import { fetchVans } from "../../api";
export const loader = ({params})=>{
  //console.log(params)
  return fetchVans(params.id);
};
const HostVanDetail = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  // const [currentVan, setCurrentVan] = React.useState(null);
  // const { id } = useParams();
  // console.log(id);
  // React.useEffect(() => {
  //   const getCurrentVan = async () => {
  //     let res = await fetch(`http://localhost:5000/getVanDetail/${id}`);
  //     res = await res.json();
  //     setCurrentVan(res);
  //     console.log(res);
  //   };
  //   getCurrentVan();
  // }, []);
  // if (!currentVan) {
  //   <h1>loading...</h1>;
  // }
  const currentVan = useLoaderData();
  return !currentVan ? (
    <h1>loading....</h1>
  ) : (
    <section>
      <Link to=".." className="back-button" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt={`photo of ${currentVan.name}`} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Detail
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photo"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photo
          </NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
      </div>
    </section>
  );
};
export default HostVanDetail;
