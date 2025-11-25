
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
    // valid
    const validPassword = 'Password1234' // exactly 12 characters (egde case)

    // invalid
    const tooShortPassword = 'Password123' // exactly 11 characters (edge case)
    const noNumberPassword = 'NoNumberPassword'

    test('password with exactly 12 characters should pass', () => {
        expect(() => {
            new Password(validPassword)
        }).not.toThrow()
    })

    // BugToShortPassword (and BugWrongMessage + BugMissingPasswordCheck)
   test('too password with should fail', () => {
        expect(() => {
            new Password(tooShortPassword)
        }).toThrow('Too short password')
    })

    // BugMissingNumberCheck
    test('password missing number should fail', () => {
        expect(() => {
            new Password(noNumberPassword)
        }).toThrow('No number found')
    })

    // BugNeverContainsNumbers
    test('password contains number should pass', () => {
        expect(() => {
            new Password(validPassword)
        }).not.toThrow()
    })

    // BugDoesNotHash
    test('password does not hash should fail', () => {
        const password = new Password(validPassword)
        const hashedPassword = password.getPasswordHash()

        expect(hashedPassword).not.toBe(validPassword)
    })

    // BugWrongHashingAlgorithm
    test('passwords with wrong hashing algorithm should fail', () => {
        const password = new Password(validPassword)

        const wrongHash = password.getPasswordHash()

        expect(wrongHash).toBeGreaterThan(4)
    })

    // BugisPasswordAlwaysSame
    test('passwords that are different should fail', () => {
        const password = new Password(validPassword)
        const differentPassword = new Password('DifferentPassword123')

        expect(password.isPasswordSame(differentPassword)).toBe(false)
    })

    test('passwords that are the same should pass', () => {
        const password = new Password(validPassword)
        const samePassword = new Password(validPassword)

        expect(password.isPasswordSame(samePassword)).toBe(true)
    })

    // BugDoesNotTrim
    test('password with and without spaces should be treated the same', () => {
        const passwordWithSpaces = new Password(' Password12345 ')
        const passwordWithoutSpaces = new Password('Password12345')

        expect(passwordWithSpaces.isPasswordSame(passwordWithoutSpaces)).toBe(true)
    })
});