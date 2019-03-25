const axios = require("axios");
// // basic
//   //  send an HTTP request using Axios to GitHub api server and try to fetch the data.
// async function getGithubData() {
// let res = await axios.get("https://api.github.com/users/DongShanHu");
// console.log(res.data.login);
// use async-await and make use of the promise to resolve the responsede.

function getGithubData() {
  // axios
  //   .get("https://api.github.com/users/DongShanHu")
  //   .then(res => {
  //     console.log(res.data.login);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //   let config = {
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     responseType: "blob"
  //   };
  //   axios.post("https://appdividend.com", data, config).then(response => {
  //     console.log(response.data);
  //   });
}
// getGithubData();

function getMultipleAxio() {
  // Requests will be executed in parallel...
  axios
    .all([
      axios.get("https://api.github.com/users/codeheaven-io"),
      axios.get("https://api.github.com/users/codeheaven-io/repos")
    ])
    .then(
      axios.spread(function(userResponse, reposResponse) {
        //... but this callback will be executed only when both requests are complete.
        console.log("User", userResponse.data);
        console.log("Repositories", reposResponse.data);
      })
    );
}
getMultipleAxio();

// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// })
// .then(function () {
//   // always executed
// });

// Axios offers methods for all the HTTP verbs, which are less popular but still used:
// axios.put()
// axios.delete()
// axios.patch()
// axios.options()
// axios.head()
