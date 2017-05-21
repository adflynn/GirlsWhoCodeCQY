var queryCollegeScorecardApi = function ( data ) {
    $.extend( data, {api_key: 'jh4T7Ei9av4SziJYbiOoSk77dzRB67m9zUX0mE3P'} );
    $.extend( data, {_per_page: 100} );
    $.extend( data, {fields: 'school.locale,id,school.name,school.city,school.state,school.school_url,2014.admissions.admission_rate.overall,2014.admissions.act_scores.midpoint.cumulative,2014.admissions.sat_scores.average.overall,school.men_only,school.women_only,2014.student.size,2014.student.demographics.men,2014.student.demographics.women,2014.cost.tuition.in_state,2014.cost.tuition.out_of_state,2014.aid.median_debt.completers.overall,2014.earnings.10_yrs_after_entry.working_not_enrolled.mean_earnings'} );

    return $.ajax( {
        url: 'https://api.data.gov/ed/collegescorecard/v1/schools',
        type: 'GET',
        data: data,
        dataType: 'json',
        error: function ( err ) {
            console.log( 'error' );
            console.log( this.url );
        }
    } );
};

var collegeScorecardResult = function ( raw ) {
    var result = {
        'id': raw[ 'id' ],
        'name': raw[ 'school.name' ],
        'city': raw[ 'school.city' ],
        'state': raw[ 'school.state' ],
        'url': raw[ 'school.school_url' ],
        'admission_rate': raw[ '2014.admissions.admission_rate.overall' ],
        'avg_act_score': raw[ '2014.admissions.act_scores.midpoint.cumulative' ],
        'avg_sat_score': raw[ '2014.admissions.sat_scores.average.overall' ],
        'men_only': raw[ 'school.men_only' ],
        'women_only': raw[ 'school.women_only' ],
        'size': raw[ '2014.student.size' ],
        'percent_men': raw[ '2014.student.demographics.men' ],
        'percent_women': raw[ '2014.student.demographics.women' ],
        'in_state_tuition': raw[ '2014.cost.tuition.in_state' ],
        'out_of_state_tuition': raw[ '2014.cost.tuition.out_of_state' ],
        'median_debt': raw[ '2014.aid.median_debt.completers.overall' ],
        'avg_earnings_after_10_yrs': raw[ '2014.earnings.10_yrs_after_entry.working_not_enrolled.mean_earnings' ]
    };
    return result;
}

var constructCollegeScorecardSearch = function ( name, city, state, region, locale, min_admission_rate, max_admission_rate, women_only, sat_score, has_medicine_degree, has_business_degree, has_humanities_degree, has_sciences_degree, has_engineering_degree ) {
    var queryFilters = {};
    if ( name ) {
        $.extend( queryFilters, {'school.name': name } );
    }
    if ( city ) {
        $.extend( queryfilters, {'school.city': city} );
    }
    if ( state ) {
        $.extend( queryFilters, {'school.state': state} );
    }
    if ( min_admission_rate && max_admission_rate ) {
        $.extend( queryFilters, {'2014.admissions.admission_rate.overall__range': min_admission_rate + '..' + max_admission_rate} );
    }
    if ( women_only ) {
        $.extend( queryFilters, {'school.women_only': women_only} );
    }
    if ( region ) {
        $.extend( queryFilters, {'school.region_id': region} )
    }
    if ( locale ) {
        $.extend( queryFilters, {'school.locale': locale} )
    }
    // the SAT score entered by the search should be >= the median SAT score
    if ( sat_score ) {
        $.extend( queryFilters, {'2014.admissions.sat_scores.average.overall__range': '..' + sat_score} )
    }
    // if(has_medicine_degree){
    //   $.extend(queryFilters,{'academics.program.bachelors.biological': 1})
    // }
    // if(has_business_degree){
    //   $.extend(queryFilters,{'academics.program.bachelors.business_marketing': 1})
    // }
    // if(has_humanities_degree){
    //   $.extend(queryFilters,{'academics.program.bachelors.humanities': 1})
    // }
    // if(has_sciences_degree){
    //   $.extend(queryFilters,{'academics.program.bachelors.physical_science': 1})
    // }
    // if(has_engineering_degree){
    //   $.extend(queryFilters,{'academics.program.bachelors.engineering_technology': 1})
    // }
    return queryFilters;
};

var searchColleges = function ( name, city, state, region, locale, min_admission_rate, max_admission_rate, women_only, sat_score, has_medicine_degree, has_business_degree, has_humanities_degree, has_sciences_degree, has_engineering_degree ) {
    return queryCollegeScorecardApi(
        constructCollegeScorecardSearch( name, city, state, region, locale, min_admission_rate, max_admission_rate, women_only, sat_score, has_medicine_degree, has_business_degree, has_humanities_degree, has_sciences_degree, has_engineering_degree )
    ).then( function ( data ) {
        console.log( 'success' );
        console.log( this.url );
        var schools = [];
        $.each( data.results, function ( i, val ) {
            schools.push( collegeScorecardResult( val ) );
        } );
        console.log( schools );
        return schools;
    });
};
