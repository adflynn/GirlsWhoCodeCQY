var submitMajorQuiz = function () {


};

var submitFoodQuiz = function () {
    // TODO : think about what this function should do!
    // model it after the submitEasyQuiz function, reading in the values you select on the quiz page
};


var submitEasyQuiz = function () {

    var gpa = document.getElementsByName( "gpa" )[ 0 ].value;
    console.log( "gpa is: " + gpa );

    var majorList = document.getElementsByName( "major" );
    for ( var i = 0; i < majorList.length; i++ ) {
        var possibleMajor = majorList[ i ];
        if ( possibleMajor.checked ) {
            console.log( "one major is: " + possibleMajor.value );
        }
    }

    var regionList = document.getElementsByName( "region" );
    for ( var i = 0; i < regionList.length; i++ ) {
        var possibleRegion = regionList[ i ];
        if ( possibleRegion.checked ) {
            console.log( "region is: " + possibleRegion.value );
            break;
        }
    }

    var tuition = document.getElementsByName( "tuition" )[ 0 ].value;
    console.log( "tuition is: " + tuition );

};
