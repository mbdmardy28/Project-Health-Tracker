const apiUrl = "http://localhost:59131/api/Games";

export const get = async () => {
  return fetch(apiUrl, { method: "GET" })
    .then(res => res.json())
    .catch(err => console.log(err));
};
