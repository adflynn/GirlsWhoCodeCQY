// TODO : modify the search function below:
// check out findyourperfectcollege.js for help in how to define a function!

var executeSearch = function () {
    var collegeName = document.getElementsByName( "name" )[ 0 ].value;
    var trHtml = '';

    searchColleges( collegeName, null, null, null, null, null, null, null, null, null, null, null, null, null )
        .then( function ( schools ) {
            $.each( schools, function ( i, school ) {
                trHtml += '<tr>'
                    + '<td>' + school.name + '</td>'
                    + '<td><a href=https://' + school.url + '>' + school.url + '</a></td>'
                    + '<td>' + school.city + ', ' + school.state + '</td>'
                    + '</tr>';
            } );
        } ).then( function () {
          var resultTable = document.getElementsByClassName('result')[0];
          resultTable.style.visibility = 'visible';

          $( '#quiz-results tbody tr' ).remove();
          $( '#quiz-results tbody' ).append( trHtml );
    } );
};
