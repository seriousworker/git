let teem = {"tim":4,"jim":2,"randy":6,"sandy":4,"andy":8,"katie":7,"laura":3,"saajid":5,"alex":7,"john":5,"mr":2};

function getMood(teem, names) {
    for (let name of Object.keys(teem)) {
        if (name == names) {
            teem[name] < 5 ? alert('Get Out Now!') : alert('Nice Work Champ!');
        }
    }
}


getMood(teem, 'john');
