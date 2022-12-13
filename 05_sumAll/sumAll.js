const sumAll = function (from, destination) {
    if (typeof (from) == 'number' && typeof (destination) == 'number') {
        var sumall = 0;
        if (from < destination) {
            for (var i = from; i <= destination; i++) {
                sumall = sumall + i;
            }
            return sumall;
        }
        if (from > destination) {
            for (var i = detination; i <= from; i++) {
                sumall = sumall + i;
            }
            return sumall;
        }
    }
    return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
