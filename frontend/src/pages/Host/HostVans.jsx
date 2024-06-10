import React from "react";
import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { fetchVans } from "../../api";
export const loader = () => {
  return defer({ fetchVans: fetchVans() });
};
const HostVans = () => {
  // const [hostVans, setHostVans] = React.useState([]);
  // React.useEffect(() => {
  //   const getHostVans = async () => {
  //     let response = await fetch("http://localhost:5000/getVans");
  //     response = await response.json();
  //     console.log(response)
  //     setHostVans(response);
  //   };
  //   getHostVans();
  // }, []);
  //const hostVans = useLoaderData();

  // const hostVansElements = hostVans.map((van) => (
  //   <Link to={van.id} key={van.id} className="host-van-link-wrapper">
  //     <div key={van.id} className="host-van-single">
  //       <img src={van.imageUrl} alt={`photo of ${van.name}`} />
  //       <div className="host-van-info">
  //         <h1>{van.name}</h1>
  //         <p>${van.price}/day</p>
  //       </div>
  //     </div>
  //   </Link>
  // ));

  // return (
  //   <section>
  //     <h1 className="host-vans-title"> your listed vans</h1>
  //     <div className="host-vans-list">
  //       {/* {hostVans.length > 0 ? (
  //         <section>{hostVansElements}</section>
  //       ) : (
  //         <h2>loading...</h2>
  //       )}
  //     */}
  //       <section>{hostVansElements}</section>
  //     </div>
  //   </section>
  // );
  const dataPromise = useLoaderData();
  const renderHostVansElements = (hostVans) => {
    const hostVansElements = hostVans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div key={van.id} className="host-van-single">
          <img src={van.imageUrl} alt={`photo of ${van.name}`} />
          <div className="host-van-info">
            <h1>{van.name}</h1>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div className="host-vans-list">
        <section>{hostVansElements}</section>
      </div>
    );
  };
  return (
    <section>
      <h1 className="host-vans-title"> your listed vans</h1>
      <React.Suspense fallback={<h1> your host vans are loading..</h1>}>
        <Await resolve={dataPromise.fetchVans}>{renderHostVansElements}</Await>
      </React.Suspense>
    </section>
  );
};
export default HostVans;
