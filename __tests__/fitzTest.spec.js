const fitzjs = require('../fitzjs');
const moment = require('moment');

describe('Lets fitzTest!!', () => {
    const dateFormat = 'YYYY-MM-DD hh:mm:ss a';
    const utcIsoDate = fitzjs('2019-11-06T17:39:22.000Z', dateFormat);

    test('Verify date format length!', () => {
        expect(utcIsoDate).toHaveLength(24);
    });
    test('Verify utc to iso date conversion!', () => {
        expect(utcIsoDate).toBe('2019-11-06T17:39:22.000Z');
    });
});

describe('Moment formats', () => {
    test('Should parse MomentBuiltinFormat args', () => {
        const now = new Date().toISOString();
        expect(fitzjs(now, moment.ISO_8601)).toBe(now);

    });

    test('Should parse HTML5 format date args', () => {
        const fitzJzBirthday = '2019-05';
        const dateString = fitzjs(fitzJzBirthday, moment.HTML5_FMT.MONTH);
        expect(dateString).toBe('2019-05-01T00:00:00.000Z');
    });
});

