const urlApiDelete = "https://65051b38ef808d3c66efc66e.mockapi.io/api/products";

const id = "23"

var xhr = new XMLHttpRequest();
xhr.open("DELETE", urlApiDelete + "/" + id, true);
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);

  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};

xhr.send(null);
