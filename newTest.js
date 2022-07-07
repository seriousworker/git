let teem = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0};

function getMood(teem, names) {
    for (let name of Object.keys(teem)) {
        if (name == names) {
            teem.name <= 5 ? alert('Get Out Now') : alert('Nice Work Champ!');
        }
    }
}

getMood(teem, 'randy');