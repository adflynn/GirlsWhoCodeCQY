var submitMajorQuiz = function () {

  // TODO : think about what this function should do!
  // model it after the submitEasyQuiz function, reading in the values you select on the quiz page
  var total = 0;

  var peopleList = document.getElementsByName("alone");
  for ( var i = 0; i < peopleList.length; i++ ) {
    var possiblePeople = peopleList[ i ];
    if ( possiblePeople.checked ) {
      if ( possiblePeople.value == "withothers" ) {
        //  total = total +
      } else if ( possiblePeople.value == "alone" ) {
        //
      }
    }
  }

  var artList = document.getElementsByName("artistic");
  console.log(artList);
  for ( var i = 0; i < artList.length; i++ ) {
    var possibleArt = artList[ i ];
    console.log('for loopoing');
    if ( possibleArt.checked ) {
      console.log(possibleArt.value);
      if ( possibleArt.value == "yes" ) {
        total = total + 0;
      } else if ( possibleArt.value == "no" ) {
        total = total + 1;
      }
    }
  }

  var mostHatedList = document.getElementsByName("leastfavsubject");
  for ( var i = 0; i < mostHatedList.length; i++ ) {
    var possibleHate = mostHatedList[ i ];
    if ( possibleHate.checked ) {
      console.log(possibleHate.value);
      if ( possibleHate.value == "English" ) {
        total = total + 3;
      } else if ( possibleHate.value == "History" ) {
        total = total + 2;
      } else if ( possibleHate.value == "Math" ) {
        total = total + 1;
      } else if ( possibleHate.value == "Science" ) {
        total = total + 0;
      } else if ( possibleHate.value == "Arts" ) {
        total = total + 5;
      } else if ( possibleHate.value == "Language" ) {
        total = total + 4;
      } else if ( possibleHate.value == "None" ) {
        total = total + 2;
      }
    }
  }

  var mostLikedList = document.getElementsByName("mostfavsubject");
  for ( var i = 0; i < mostLikedList.length; i++ ) {
    var possibleLike = mostLikedList[ i ];

    if ( possibleLike.checked ) {
      console.log(possibleLike.value);
      if ( possibleLike.value == "English" ) {
        total = total + 2;
      } else if ( possibleLike.value == "History" ) {
        total = total + 3;
      } else if ( possibleLike.value == "Math" ) {
        total = total + 4;
      } else if ( possibleLike.value == "Science" ) {
        total = total + 5;
      } else if ( possibleLike.value == "Arts" ) {
        total = total + 0;
      } else if ( possibleLike.value == "Language" ) {
        total = total + 1;
      } else if ( possibleLike.value == "None" ) {
        total = total + 3;
      }
    }
  }

  var goalsList = document.getElementsByName("goal");
  for ( var i = 0; i < goalsList; i++ ) {
    var possibleGoal = goalsList[ i ];
    if ( possibleGoal.checked ) {
      console.log(possibleLike.value);
      if ( possibleLike.value == "Others" ) {
        total = total + 3;
      } else if ( possibleLike.value == "Money" ) {
        total = total + 4;
      } else if ( possibleLike.value == "Learn" ) {
        total = total + 1;
      } else if ( possibleLike.value == "Famous" ) {
        total = total + 0;
      } else if ( possibleLike.value == "Educate" ) {
        total = total + 2;
      }
    }
  }

  // total holds a number 0 - 16
  var major = '';
  console.log(total);
  if ( total == 0 || total == 1 || total == 2) {
    major  = 'Arts or Drama';
  } else if ( total == 3 || total == 4 ) {
    major = 'English or Linguistics';
  } else if ( total == 5 || total == 6 ) {
    major = 'Teaching';
  } else if ( total == 7 || total == 8 ) {
    major = 'History';
  } else if ( total == 9 || total == 10 ) {
    major = 'Business';
  } else if ( total == 11 || total == 12 ) {
    major = 'Psychology or Sociology';
  } else if ( total == 13 || total == 14 ) {
    major = 'Pre-Med or Nursing';
  } else if ( total == 15 || total == 16 ) {
    major = 'Sciences : Chemistry/Biology/Engineering';
  }

  console.log(major);

  var trHtml = '<tr>'
  + '<td> THE BEST MAJOR FOR YOU IS </td>'
  + '<td>' + major + '</a></td>'
  + '</tr>';

  $( '#quiz-results tbody tr' ).remove();
  $( '#quiz-results tbody' ).append( trHtml );
  var resultTable = document.getElementsByClassName('result')[0];
  resultTable.style.visibility = 'visible';
};


var submitFoodQuiz = function () {
  // TODO : think about what this function should do!
  // model it after the submitEasyQuiz function, reading in the values you select on the quiz page

  var foodQuizResults = document.getElementsByName("appetizer");
  var appetizerValue = -1;
  $.each(foodQuizResults,function(i,result){
    if (result.checked){
      appetizerValue = result.value;
    }
  });

  var trHtml = '';
  searchColleges( null, null, null, appetizerValue, null, null, null, null, null, null, null, null, null, null )
  .then( function ( schools ) {
    var school = schools[0];
    trHtml += '<tr>'
    + '<td>' + school.name + '</td>'
    + '<td><a href=https://' + school.url + '>' + school.url + '</a></td>'
    + '<td>' + school.city + ', ' + school.state + '</td>'
    + '</tr>';
  } ).then( function () {
    var resultTable = document.getElementsByClassName('result')[0];
    resultTable.style.visibility = 'visible';

    $( '#quiz-results tbody tr' ).remove();
    $( '#quiz-results tbody' ).append( trHtml );
  } );
};

var submitEasyQuiz = function () {

  var majorList = document.getElementsByName( "major" );
  var has_medicine_degree, has_business_degree, has_humanities_degree, has_sciences_degree, has_engineering_degree;
  for ( var i = 0; i < majorList.length; i++ ) {
    var possibleMajor = majorList[ i ];

    if ( possibleMajor.checked ) {
      if ( possibleMajor.value == 'medicine' ) {
        has_medicine_degree = 1;
      }
      if ( possibleMajor.value == 'business' ) {
        has_business_degree = 1;
      }
      if ( possibleMajor.value == 'humanities' ) {
        has_humanities_degree = 1;
      }
      if ( possibleMajor.value == 'sciences' ) {
        has_sciences_degree = 1;
      }
      if ( possibleMajor.value == 'engineering' ) {
        has_engineering_degree = 1;
      }
      console.log( "one major is: " + possibleMajor.value );
    }
  }

  var allFemaleList = document.getElementsByName( "gender" );
  var women_only;
  for ( var i = 0; i < allFemaleList.length; i++ ) {
    var possibleGender = allFemaleList[ i ];
    if ( possibleGender.checked ) {
      women_only = possibleGender.value;
      console.log( "we want women's only " + possibleGender.value );
      break;
    }
  }

  var regionList = document.getElementsByName( "region" );
  var region = [];
  for ( var i = 0; i < regionList.length; i++ ) {
    var possibleRegion = regionList[ i ];
    if ( possibleRegion.checked ) {
      region.push( possibleRegion.value );
    }
  }
  region = region.join( ',' );
  console.log( "region is " + region );

  var city_size = document.getElementsByName( "city-size" )[ 0 ].value;
  var locale;
  if ( city_size == 1 ) {
    locale = '11,12,13'
  }
  else if ( city_size == 2 ) {
    locale = '21,22,23'
  }
  else if ( city_size == 3 ) {
    locale = '31,32,33'
  }
  else if ( city_size == 4 ) {
    locale = '41,42,43'
  }
  console.log( "locale is " + locale );

  var sat_score = document.getElementsByName( "sat" )[ 0 ].value;
  console.log( "sat score is: " + sat_score );

  var max_admission_rate, min_admission_rate;
  var admissionRateList = document.getElementsByName( "rate" );
  for ( var i = 0; i < admissionRateList.length; i++ ) {
    var possibleRate = admissionRateList[ i ];
    if ( possibleRate.checked ) {
      if ( possibleRate.value == 0 ) {
        max_admission_rate = 1;
        min_admission_rate = .75;
      }
      if ( possibleRate.value == 1 ) {
        max_admission_rate = .75;
        min_admission_rate = .5;
      }
      if ( possibleRate.value == 2 ) {
        max_admission_rate = .5;
        min_admission_rate = .25;
      }
      if ( possibleRate.value == 3 ) {
        max_admission_rate = .25;
        min_admission_rate = .1;
      }
      if ( possibleRate.value === 4 ) {
        max_admission_rate = .1;
      }
    }
  }
  console.log( 'rate ' + max_admission_rate + ',' + min_admission_rate );


  var trHtml = '';
  searchColleges( null, null, null, region, null, min_admission_rate, max_admission_rate, women_only, sat_score, has_medicine_degree, has_business_degree, has_humanities_degree, has_sciences_degree, has_engineering_degree )
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
