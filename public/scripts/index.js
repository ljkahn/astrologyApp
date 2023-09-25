const userForm = $("#dataForm")

const buttonEl = $("#submit");
const userName = $("#inputName");
const userMonth = $("#inputMonth");
const userDay = $("#inputDay");
const userYear = $("#inputYear");
const userHour = $("#inputHour");
const userMinute = $("#inputMinute");
const userCity = $("#inputCity");
const userState = $("#inputState");
const userCountry = $("#inputCountry");



const userData = {
name: userName.val(),
month: userMonth.val(),
day: userDay.val(),
year: userYear.val(),
hour: userHour.val(),
minute: userMinute.val(),
city: userCity.val(),
state: userState.val(),
country: userCountry.val(),
}

 
const getBirthData = (event) => {
  event.preventDefault()
  console.log("Hello")
  $.ajax({
    url: "https://zylalabs.com/api/1508/astrological+calculation+api/1243/birthdata",
    method: "GET",
    headers: {
      "Authorization": "Bearer 2229|TaIc6CtmSFuhyqTAqSwbW6fOFtWDlmVPTKbRo8ZJ"
    },
    data: "{\r\n    \"name\": \"Lillian\",\r\n    \"year\": 1997,\r\n    \"month\": 04,\r\n    \"day\": 17,\r\n    \"hour\": 07,\r\n    \"minute\": 34,\r\n    \"longitude\": -122,\r\n    \"latitude\": 47,\r\n    \"city\": \"Redmond\",\r\n    \"timezone\": \"United States\/Seattle\",\r\n    \"language\": \"EN\"\r\n}"
  })
  .then((data) =>  {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
  
userForm.on("submit", getBirthData)










// const createCard = (tip) => {
//   // Create card
//   const cardEl = document.createElement("div");
//   cardEl.classList.add("card", "mb-3", "m-3");
//   cardEl.setAttribute("key", tip.tip_id);

//   // Create card header
//   const cardHeaderEl = document.createElement("h4");
//   cardHeaderEl.classList.add(
//     "card-header",
//     "bg-primary",
//     "text-light",
//     "p-2",
//     "m-0"
//   );
//   cardHeaderEl.innerHTML = `${tip.username} </br>`;

//   // Create card body
//   const cardBodyEl = document.createElement("div");
//   cardBodyEl.classList.add("card-body", "bg-light", "p-2");
//   cardBodyEl.innerHTML = `<p>${tip.tip}</p>`;

//   // Append the header and body to the card element
//   cardEl.appendChild(cardHeaderEl);
//   cardEl.appendChild(cardBodyEl);

//   // Append the card element to the tips container in the DOM
//   tipsContainer.appendChild(cardEl);
// };