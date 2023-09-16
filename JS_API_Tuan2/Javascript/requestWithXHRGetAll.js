console.log("\n\nRequest with XHR");

// all capital of worlds
const urlApi4 = "https://65051b38ef808d3c66efc66e.mockapi.io/api/products";

let xhr = new XMLHttpRequest()
xhr.open("GET", urlApi4, true)
xhr.onload = () => {
    let capitals = JSON.parse(xhr.responseText)
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.log(capitals);
    } else {
        console.log("Error when get all capitals")
    }
}

xhr.send()