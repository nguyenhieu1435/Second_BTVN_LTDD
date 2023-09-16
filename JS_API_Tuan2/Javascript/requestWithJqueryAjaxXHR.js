console.log("\n\nRequest with Jquery Ajax with XHR");
const urlApi2 = "https://65051b38ef808d3c66efc66e.mockapi.io/api/products"

$.ajax({
        url: urlApi2,
        beforeSend: (xhr) => {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=x')
            xhr.overrideMimeType("text/plain;x-user-defined")
        }
    })
    .done(data => {
        if (console && console.log) {
            console.log("Sample of data", JSON.parse(data));
        }
    })
    .fail(() => console.log("Error when get data from ", urlApi));