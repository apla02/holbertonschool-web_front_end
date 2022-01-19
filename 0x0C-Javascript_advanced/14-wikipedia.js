function createElement(data) {
    let parag = document.createElement("p");
    parag.innerHTML = data;
    document.body.appendChild(parag);
}

function queryWikipedia(callback) {
    let respon;
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    let req = new XMLHttpRequest();

    req.open('GET', url);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            response = JSON.parse(req.response).query.pages[21721040].extract;
            createElement(response);
        }
    }
}

queryWikipedia(createElement);