function validateUsr(username) {
    if (username.length >= 4 && username.length <= 16) {
        let value = /^[a-z0-9_]+$/.exec(username);
        let res = !!value ? username : null;
        return res;
    } else return false;
}

alert(validateUsr('p1pp1'));
alert(validateUsr('DS3@DFx'));
