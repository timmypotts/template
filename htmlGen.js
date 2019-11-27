initializeHTML(data) {
    return
    `s<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css"
            integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous">
        <title>${data.name}'s Team</title>
    </head>
    
    <body>
    
    
    <div class="container">
        <div class="row">
        `;
}

function insertManager(data) {
    return
    `
    <div class="col-sm-4 d-flex pb-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h4 class="card-title text-light">${data.managerName}</h4>
            <h5 class="card-title text-light">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.idNumber} </li>
            <li class="list-group-item">Email: ${data.manEmail}<a class="card-link"></a> </a></li>
            <li class="list-group-item">Office Number: ${data.offnum}</li>
        </ul>
    </div>
</div>
`
}