var submitMajorQuiz = function () {
    // TODO : think about what this function should do!
    // model it after the submitEasyQuiz function, reading in the values you select on the quiz page

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
