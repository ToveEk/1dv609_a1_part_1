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
    

    test('day 31 should pass', () => {
        const result = ssnHelper.isValidDay(validDay)
        
        expect(result).toBe(true)
    })

    test('month 0 should fail', () => {
        const result = ssnHelper.isValidMonth(invalidMonth)

        expect(result).toBe(false)
    })

    test('incorrect format should fail', () => {
        
    })

    test('messy luhn should fail', () => {

    })

    test('wrong length should fail', () => {
        const result = ssnHelper.isCorrectLength(invalidLength)

        expect(result).toBe(false)
    })
})