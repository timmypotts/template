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
            <li class="list-group-item">Email: <a class="card-link">${data.manEmail}</a> </a></li>
            <li class="list-group-item">Office Number: ${data.offnum}</li>
        </ul>
    </div>
</div>
`;
}

function insertEngineer(data) {
    return
    `
    <div class="col-sm-4 d-flex pb-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h4 class="card-title text-light">${data.name}</h4>
            <h5 class="card-title text-light">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.employeeId} </li>
            <li class="list-group-item">Email: <a class="card-link">${data.email}</a></li>
            <li class="list-group-item">GitHub:<a class="card-link"> www.github.com/${data.git}</a></li>
        </ul>
    </div>
</div>
`;
}

function insertIntern() {
    return
    `
    <div class="col-sm-4 d-flex pb-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h4 class="card-title text-light">${data.name}</h4>
            <h5 class="card-title text-light">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.employeeId} </li>
            <li class="list-group-item">Email: <a class="card-link">${data.email}</a></li>
            <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>
</div>
`;
}

function closeHTML() {
    return
    `
    </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js"
        integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P"
        crossorigin="anonymous"></script>
</body>

</html>`;
}

module.exports = {
    initializeHTML:initializeHTML,
    closeHTML:closeHTML,
    insertManager:insertManager,
    insertEngineer:insertEngineer,
    insertIntern:insertIntern
}


