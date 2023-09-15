console.log("\n\nRequest with XHR");

// all capital of worlds
const urlApi4 = "https://restcountries.com/v3.1/capital/all";

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