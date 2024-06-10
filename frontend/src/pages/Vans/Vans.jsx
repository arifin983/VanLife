import { useEffect, useState, Suspense } from "react";
import {
  Link,
  defer,
  useLoaderData,
  useSearchParams,
  Await,
} from "react-router-dom";
import { fetchVans } from "../../api";
import { requireAuth } from "../../../utlis";
export const loader = async ({ request }) => {
  await requireAuth(request); // this way of implementing the authentication also valid , apki marzi yahn lago ya Route mai hi
  const fetchVansPromises = fetchVans();
  return defer({ fetchVans: fetchVansPromises });
};
const Vans = () => {
  // const [searchParams, setSearchParam] = useSearchParams();
  // const typeFilter = searchParams.get("type");
  //console.log(typeFilter);
  //const [vans, getVans] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  //const vans = useLoaderData();
  //console.log(data);
  // useEffect(() => {
  //   const getVanList = async () => {
  //     // let vans = await fetch("http://localhost:5000/getVans");
  //     // vans = await vans.json();
  //     setLoading(true);
  //     try {
  //       let vans = await fetchVans();
  //       //console.log(vans)
  //       getVans(vans);
  //     } catch (err) {
  //      console.log(err);
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }

  //     //console.log(vans);
  //   };
  //   getVanList();
  // }, []);
  // const displayedVans = typeFilter
  //   ? vans.filter((van) => van.type === typeFilter)
  //   : vans;
  // const vansElements = displayedVans.map((van) => (
  //   <div key={van.id} className="van-tile">
  //     <Link
  //       to={van.id}
  //       state={{
  //         search: `?${searchParams.toString()}`,
  //         type: typeFilter,
  //       }}
  //     >
  //       <img src={van.imageUrl} alt="" />
  //       <div className="van-info">
  //         <h3>{van.name}</h3>
  //         <p>
  //           ${van.price}
  //           <span>day</span>
  //         </p>
  //       </div>
  //       <i className={`van-type ${van.type} selected`}>{van.type}</i>
  //     </Link>
  //   </div>
  // ));
  // const genNewSearchParamString = (key, value) => {
  //   const sp = new URLSearchParams(searchParams);
  //   //console.log(sp);
  //   if (sp.value === null) {
  //     sp.delete(key);
  //   } else {
  //     sp.set(key, value);
  //   }
  //   return `?${sp.toString()}`;
  // };
  // const handleFilterChange = (key, value) => {
  //   setSearchParam((previousParam) => {
  //     if (value === null) {
  //       previousParam.delete(key);
  //     } else {
  //       previousParam.set(key, value);
  //     }
  //     return previousParam;
  //   });
  // };
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  //  if (error) {
  //   return (
  //     <h3>
  //       There is an error:{error.message} <br />
  //       <p>error type: {`${error.statusText}(${error.status})`}</p>
  //     </h3>
  //   );
  // } ;
  // return (
  //   <div className="van-list-container">
  //     <h1>Explore our van options</h1>
  //     <div className="van-list-filter-buttons">
  //       {/* <Link to="?type=simple" className="van-type simple">
  //         Simple
  //       </Link>
  //       <Link to="?type=luxury" className="van-type luxury">
  //         Luxury
  //       </Link>
  //       <Link to="?type=rugged" className="van-type rugged">
  //         Rugged
  //       </Link>
  //       <Link to="." className="van-type clear-filters">
  //         Clear filter
  //       </Link> */}

  
  //      {/* Other ways to they samethings with setSearchParam */}
  //       {/* <button
  //         className="van-type simple"
  //         onClick={() => setSearchParam({ type: "simple" })}
  //       >
  //         Simple
  //       </button>
  //       <button
  //         className="van-type luxury"
  //         onClick={() => setSearchParam({ type: "luxury" })}
  //       >
  //         Luxury
  //       </button>
  //       <button
  //         className="van-type rugged"
  //         onClick={() => setSearchParam({ type: "rugged" })}
  //       >
  //         Rugged
  //       </button>
  //       <button
  //         className="van-type clear-filters"
  //         onClick={() => setSearchParam({ type: "" })}
  //       >
  //         Clear filter
  //       </button> */} 

  //     {/* Other ways to they samethings  */}
  //       {/* <Link
  //         to={genNewSearchParamString("type", "simple")}
  //         className="van-type simple"
  //       >
  //         Simple
  //       </Link>
  //       <Link
  //         to={genNewSearchParamString("type", "luxury")}
  //         className="van-type luxury"
  //       >
  //         Luxury
  //       </Link>
  //       <Link
  //         to={genNewSearchParamString("type", "rugged")}
  //         className="van-type rugged"
  //       >
  //         Rugged
  //       </Link>
  //       <Link
  //         to={genNewSearchParamString("type", null)}
  //         className="van-type clear-filters"
  //       >
  //         clear filter
  //       </Link> */}

  //       <button
  //         className={`van-type simple ${
  //           typeFilter === "simple" ? "selected" : ""
  //         }


  //         onClick={() => handleFilterChange("type", "simple")}
  //       >
  //         Simple
  //       </button>
  //       <button
  //         className={`van-type luxury ${
  //           typeFilter === "luxury" ? "selected" : ""
  //         }`}
  //         onClick={() => handleFilterChange("type", "luxury")}
  //       >
  //         Luxury
  //       </button>
  //       <button
  //         className={`van-type rugged ${
  //           typeFilter === "rugged" ? "selected" : ""
  //         }`}
  //         onClick={() => handleFilterChange("type", "rugged")}
  //       >
  //         Rugged
  //       </button>
  //       {typeFilter ? (
  //         <button
  //           className="van-type clear-filters"
  //           onClick={() => handleFilterChange("type", null)}
  //         >
  //           Clear filter
  //         </button>
  //       ) : null}
  //     </div>
  //     <div className="van-list">{vansElements}</div>
  //   </div>
  // );
  const [searchParams, setSearchParam] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const dataPromise = useLoaderData();
  const handleFilterChange = (key, value) => {
    setSearchParam((previousParam) => {
      //console.log(previousParam)
      if (value === null) {
        previousParam.delete(key);
      } else {
        previousParam.set(key, value);
      }
      return previousParam;
    });
  };
  // return (
  //   <div className="van-list-container">
  //     <h1>Explore our van options</h1>
  //     <Await resolve={dataPromise.fetchVans}>
  //       {(vans) => {
  //         const displayedVans = typeFilter
  //           ? vans.filter((van) => van.type === typeFilter)
  //           : vans;
  //         const vansElements = displayedVans.map((van) => (
  //           <div key={van.id} className="van-tile">
  //             <Link
  //               to={van.id}
  //               state={{
  //                 search: `?${searchParams.toString()}`,
  //                 type: typeFilter,
  //               }}
  //             >
  //               <img src={van.imageUrl} alt="" />
  //               <div className="van-info">
  //                 <h3>{van.name}</h3>
  //                 <p>
  //                   ${van.price}
  //                   <span>day</span>
  //                 </p>
  //               </div>
  //               <i className={`van-type ${van.type} selected`}>{van.type}</i>
  //             </Link>
  //           </div>
  //         ));
  //         return (
  //           <>
  //             <div className="van-list-filter-buttons">
  //               <button
  //                 className={`van-type simple ${
  //                   typeFilter === "simple" ? "selected" : ""
  //                 }`}
  //                 onClick={() => handleFilterChange("type", "simple")}
  //               >
  //                 Simple
  //               </button>
  //               <button
  //                 className={`van-type luxury ${
  //                   typeFilter === "luxury" ? "selected" : ""
  //                 }`}
  //                 onClick={() => handleFilterChange("type", "luxury")}
  //               >
  //                 Luxury
  //               </button>
  //               <button
  //                 className={`van-type rugged ${
  //                   typeFilter === "rugged" ? "selected" : ""
  //                 }`}
  //                 onClick={() => handleFilterChange("type", "rugged")}
  //               >
  //                 Rugged
  //               </button>
  //               {typeFilter ? (
  //                 <button
  //                   className="van-type clear-filters"
  //                   onClick={() => handleFilterChange("type", null)}
  //                 >
  //                   Clear filter
  //                 </button>
  //               ) : null}
  //             </div>
  //             <div className="van-list">{vansElements}</div>
  //           </>
  //         );
  //       }}
  //     </Await>
  //   </div>
  // );
  const renderVansElements = (vans) => {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
    const vansElements = displayedVans.map((van) => (
      <div key={van.id} className="van-tile">
        <Link
          to={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img src={van.imageUrl} alt="" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              className="van-type clear-filters"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="van-list">{vansElements}</div>
      </>
    );
  };
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<h1>Loading vans...</h1>}>
        <Await resolve={dataPromise.fetchVans}>{renderVansElements}</Await>
      </Suspense>
    </div>
  );
};
export default Vans;
