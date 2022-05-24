// import fetch from "node-fetch";

fetch(`https://randomuser.me/api/`)
.then((response) => response.json())
.then((data) => {
  console.log(data)

})
.catch((err) => {
  alert(err)
})