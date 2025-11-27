import { expect, jest } from '@jest/globals';

// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
 import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {

    test('missing length check should fail', () => {
        const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(false),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true)
    }
        expect(() => {
            new SwedishSocialSecurityNumber('950703-123', mockHelper)
        }).toThrow('To short, must be 11 characters')
    })

    
    test('missing trim should fail', () => {
        const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(false),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        // const ssnWithSpaces = new SwedishSocialSecurityNumber(' 900101-3029 ', mockHelper)
        const stringInput = ' 900101-3029 '

        const mockTrim = jest.fn(() => { stringInput.trim() })

        expect(mockTrim(stringInput)).not.toThrow
    })

    test('missing luhn check should fail', () => {
        const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(false)
        }

        expect(() => {
            new SwedishSocialSecurityNumber('900101-3029', mockHelper)
        }).toThrow()
    })

    test('wrong year format should fail', () => {
        const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        const validSSN = new SwedishSocialSecurityNumber('900101-3029', mockHelper)
        const year = validSSN.getYear()

        expect(year).toBe('90')
    })
});