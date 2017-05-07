var queryCollegeScorecardApi = function(data){
  $.extend(data,{ api_key : 'jh4T7Ei9av4SziJYbiOoSk77dzRB67m9zUX0mE3P'});
  $.extend(data,{ _fields : 'id,school.name,school.city,school.state,2014.student.size,2014.admissions.admission_rate.overall' });
  return $.ajax({
    url: 'https://api.data.gov/ed/collegescorecard/v1/schools',
    type: 'GET',
    data: data,
    dataType: 'json',
    error: function(err) { alert(err.status); }
  });
};

var constructCollegeScorecardSearch = function(name, min_admission_rate, max_admission_rate){
  var queryFilters = {};
  if(name){
    $.extend(queryFilters,{'school.name': name});
  }
  if(min_admission_rate && max_admission_rate){
    $.extend(queryFilters,{'2014.admissions.admission_rate.overall__range': min_admission_rate + '..' + max_admission_rate});
  }
  return queryFilters;
};

queryCollegeScorecardApi(constructCollegeScorecardSearch(null,'0.20','0.40')).done(function(data){
  var schools = [];
  $.each(data.results, function(i, val){
    schools.push(val);
  });
  console.log(schools);
});