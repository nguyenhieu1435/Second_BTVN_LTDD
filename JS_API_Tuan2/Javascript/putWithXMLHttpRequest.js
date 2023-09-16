var urlApiPut = "https://65051b38ef808d3c66efc66e.mockapi.io/api/products";

var dataUpdate = {
    "id": "23",
    "productName": "Bát đĩa 1 bộ",
    "quantity": 99,
    "unitPrice": 999.99,
    "mfgDate": new Date(),
    "expDate": new Date(),
};

var json = JSON.stringify(dataUpdate);

var xhr = new XMLHttpRequest();

xhr.open("PUT", urlApiPut + "/" + dataUpdate.id, true);

xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");

xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);

  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};

xhr.send(json);
