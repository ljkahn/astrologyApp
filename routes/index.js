
$(function () {


  const btnEl = $("#submit");

  const settings = {
    'url': 'https://zylalabs.com/api/1508/astrological+calculation+api/1243/birthdata',
    'method': 'POST',
    'timeout': 0,
    'headers': {
      'Authorization': '2229|TaIc6CtmSFuhyqTAqSwbW6fOFtWDlmVPTKbRo8ZJ'
    },
    "data": "{\r\n    \"name\": \"Test\",\r\n    \"year\": 2000,\r\n    \"month\": 10,\r\n    \"day\": 10,\r\n    \"hour\": 10,\r\n    \"minute\": 10,\r\n    \"longitude\": 45,\r\n    \"latitude\": 45,\r\n    \"city\": \"Roma\",\r\n    \"timezone\": \"Europe\/Rome\",\r\n    \"language\": \"IT\"\r\n}",


  };







  $.ajax(settings).done(function (response) {
    console.log(response);
  })



  function data() {
    const requestLink = settings.url;
    fetch(requestLink)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
      });
  };



  //event listeners

  btnEl.on("click", data());





});
