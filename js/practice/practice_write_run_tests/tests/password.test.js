
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const emptyPassword = '';
    const validPassword = 'ValidPassword1'
    const pwWith12Characters = 'Password1234'
    const pwWith11Characters = 'Password123'
    const tooShortPassword = 'Mini1'
    const noNumberPassword = 'Password'


    // constructor test
    test('valid password should pass', () => {
        expect(() => {
            new Password(validPassword)
        }).not.toThrow()
    });

    // test for exactly 12 characters (edge case)
    test('valid password with exactly 12 characters should pass', () => {
        expect(() => {
            new Password(pwWith12Characters)
        }).not.toThrow()
    })

    // test for too short password
    test('too short password should throw error', () => {
        expect(() => {
            new Password(tooShortPassword)
        }).toThrow('Too short password')
    })

    // test for 11 characters (edge case)
    test('too short password with exactly 11 characters should trow error', () => {
        expect(() => {
            new Password(pwWith11Characters)
        }).toThrow('Too short password')
    })

    // test for empty password
    test('empty password should throw error', () => {
        expect(() => {
            new Password(emptyPassword)
        }).toThrow('Too short password')
    })

    // test for missing number

    // test for no hashing

    // test for no trimming

});