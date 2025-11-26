 import { SSNHelper } from '../src/correct/SSNHelper';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength"



describe('SSNHelper Tests', () => {
    const ssnHelper = new SSNHelper()
    const validDay = 31
    const invalidMonth = 0
    const invalidLength = '950703-12345'
    const spaceInsteadOfHyphen = '950703 1234'
    const missingHyphen = '9507031234'
    const hyphenMisplaced = '95070-31234'
    const validLuhnCheck = '900101-3029'


    test('day 31 should pass', () => {
        const result = ssnHelper.isValidDay(validDay)

        expect(result).toBe(true)
    })

    test('month 0 should fail', () => {
        const result = ssnHelper.isValidMonth(invalidMonth)

        expect(result).toBe(false)
    })

    test('incorrect format (space instead of hyphen) should fail', () => {
        const result = ssnHelper.isCorrectFormat(spaceInsteadOfHyphen)

        expect(result).toBe(false)
    })

    test('incorrect format (missing hyphen) should fail', () => {
        const result = ssnHelper.isCorrectFormat(missingHyphen)

        expect(result).toBe(false)
    })

    test('incorrect format (hyphen misplaced) should fail', () => {
        const result = ssnHelper.isCorrectFormat(hyphenMisplaced)

        expect(result).toBe(false)
    })

    test('messy luhn should fail', () => {
        const result = ssnHelper.luhnisCorrect(validLuhnCheck)

        expect(result).toBe(true)
    })

    test('wrong length should fail', () => {
        const result = ssnHelper.isCorrectLength(invalidLength)

        expect(result).toBe(false)
    })
})