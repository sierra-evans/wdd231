// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "AIloK0sySQcCbDjGRlywva8ohmIwbD99BNucyyKI";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList() {
    const endpoint = "activities/parks?q=climbing";
    const listElement = document.getElementById("outputList");
    const data = await getJson(endpoint);
    const climbingActivity = data.data[0];
    const parks = climbingActivity.parks;
    const listHtml = parks.map(listTemplate).join("");
    listElement.innerHTML = listHtml;
}

function listTemplate(park) {
    const parkUrl = `https://www.nps.gov/${park.parkCode}/index.htm`;
    return `<li><a href="${parkUrl}">${park.fullName}</a> (${park.states})</li>`;
}

renderClimbingList();