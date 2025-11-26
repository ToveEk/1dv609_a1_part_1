import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn';
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability

    test('replace this test with one of your own', () => {
        expect(true).toBe(true);
    });

    //Add your tests here
    test('missing number length check should fail', () => {

    })

    test('no number trim should fail', () => {

    })

    test('no number luhn should fail', () => {

    })

    test('wrong year should fail', () => {

    })
});