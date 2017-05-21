// TODO : modify the search function below:
// check out findyourperfectcollege.js for help in how to define a function!
//var executeSearch = function( ){
  var trHtml = '';

  searchColleges(null,null,null,null,null,'0.20','0.40',1,null,null,null,null,null,null).then(function(schools){
    $.each(schools, function(i, school){
      console.log(school);
      trHtml += '<tr><td>'
              + school.name + '</td><td>'
              + '<a href=https://' + school.url + '>'+ school.url + '</a></td><td>'
              + school.city + ', ' + schoxol.state + '</td></tr>';
    });
  }).then(function(){
    $('#search-results').append(trHtml);
  });
//};
