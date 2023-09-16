var data = {
    "id": "24",
    "productName": "Bát đĩa 1 bộ",
    "quantity": 30,
    "unitPrice": 999.99,
    "mfgDate": new Date(),
    "expDate": new Date()
};

var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();

const apuUrlPost = "https://65051b38ef808d3c66efc66e.mockapi.io/api/products";

xhr.open("POST", apuUrlPost, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

xhr.onload = function () {

  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "201") {
    console.table(users);
  } else {
    console.error(users);
  }

};
xhr.send(json);
