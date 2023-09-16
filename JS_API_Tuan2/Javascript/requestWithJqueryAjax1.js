console.log("\n\nRequest with Jquery Ajax 1");

const urlApi = "https://65051b38ef808d3c66efc66e.mockapi.io/api/products";

(() => {
    $.ajax({
            method: "GET",
            url: urlApi,
            dataType: "json"
        })
        .done(data => console.log(data))
        .fail(() => alert("no good"))
})();