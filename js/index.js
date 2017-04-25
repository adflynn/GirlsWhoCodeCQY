console.log('js file is properly linked');


var printSomething = function () {
    console.log('the button got clicked!');


    // get all college names that give Bachelors + up degrees (must do pages 0 - 29 to get all, 100 at a time)
    var url = 'https://api.data.gov/ed/collegescorecard/v1/schools?fields=school.name&school.degrees_awarded.highest=3,4&_per_page=100&page=0&api_key=jh4T7Ei9av4SziJYbiOoSk77dzRB67m9zUX0mE3P';
    makeAPICall(url)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
};


function makeAPICall(url) {
    return new Promise(function (resolve, reject) {
        var xHttp = new XMLHttpRequest();
        xHttp.open('GET', url);
        xHttp.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xHttp.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xHttp.statusText
                });
            }
        };
        xHttp.onerror = function () {
            reject({
                status: this.status,
                statusText: xHttp.statusText
            });
        };
        xHttp.send();
    });
}