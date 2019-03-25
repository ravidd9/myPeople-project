// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// });
let API_URL = "https://jsonplaceholder.typicode.com/users"
$.get(API_URL, function(result){
    console.log(result)

    let source = $('#users-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template({result});
    $('#view').append(newHTML);
})
