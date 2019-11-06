const fitzjs = require('../fitzjs');

describe('Lets fitzTest!!', () => {
    const dateFormat = 'YYYY-MM-DD hh:mm:ss a';
    const utcIsoDate = fitzjs('2019-11-06T12:39:22.000Z', dateFormat);

    test('Verify date format length!', () => {
        expect(utcIsoDate).toHaveLength(24);
    });
    test('Verify utc to iso date conversion!', () => {
        expect(utcIsoDate).toBe('2019-11-06T17:39:22.000Z');
    });
});