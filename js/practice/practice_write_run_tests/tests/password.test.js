
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
    const tooShortPw = 'TooShort1'


    // constructor test
    test('create valid password', () => {
        expect(() => {
            new Password(validPassword)
        }).not.toThrow()
    });

    // test for exactly 12 characters (edge case)
    test('valid password with exactly 12 characters', () => {
        expect(() => {
            new Password(pwWith12Characters)
        }).not.toThrow()
    })

    // test for 11 characters (edge case)
    test('too short password with exactly 11 characters should trow error', () => {
        expect(() => {
            new Password(pwWith11Characters)
        }).toThrow('Too short password')
    })
});