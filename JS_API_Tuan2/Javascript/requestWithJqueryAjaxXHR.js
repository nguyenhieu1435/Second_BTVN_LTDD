console.log("\n\nRequest with Jquery Ajax with XHR");
const urlApi2 = "https://restcountries.com/v3.1/all"

$.ajax({
        url: urlApi2,
        beforeSend: (xhr) => {
            xhr.overrideMimeType("text/plain;charset=x-user-defined")
        }
    })
    .done(data => {
        if (console && console.log) {
            console.log("Sample of data", JSON.parse(data));
        }
    })
    .fail(() => console.log("Error when get data from ", urlApi));