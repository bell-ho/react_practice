import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method,
  };
  if (request) {
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((e) => {
      console.log(e.status);
      if (e.status === 403) {
        window.location.href = "/authentication/sign-in";
      }
      return Promise.reject(e);
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO).then((res) => {
    console.log(res);
    console.log(res.token);
  });
}
