console.log("\n\nRequest with Jquery Ajax 1");
const urlApi = "https://jsonplaceholder.typicode.com/posts";

(() => {
    $.ajax({
            method: "GET",
            url: urlApi,
            dataType: "json"
        })
        .done(data => console.log(data))
        .fail(() => alert("no good"))
})();