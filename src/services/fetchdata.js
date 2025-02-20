export const fetchData = (url) => {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  console.log(promise);

  return wrapPromise(promise);
};
const wrapPromise = (promise) => {
  let status = "pending";
  let response;
  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw response;
      } else if (status === "success") {
        return response;
      }
    },
  };
};
