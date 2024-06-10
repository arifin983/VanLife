export const fetchVans = async (id) => {
  let url = id
    ? `http://localhost:5000/getVanDetail/${id}`
    : "http://localhost:5000/getVans";
  let response = await fetch(url, {
    headers: {
      authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
  let vans = await response.json();
  console.log(vans);
  if (!response.ok) {
    console.log(vans);
    throw {
      response: vans.response,
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  //vans = await vans.json();
  return vans;
};
export const loginUser = async (credential) => {
  const { email, password } = credential;
  //console.log(email,password)
  let response = await fetch("http://localhost:5000/addUser", {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw {
      message: result.result,
      statusText: response.statusText,
      status: response.status,
    };
  }

  console.warn(response);
  return result;
};
