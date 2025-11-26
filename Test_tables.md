## Password Tests

| Version | Correct | DoesNotHash | NoTrim | NumberCheck | AlwaysSame | PasswordCheck | NeverContainsNumbers | ShortPassword | BugVeryShort | HashingAlgorithm | WrongMessage | MyCustomBug |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| too short password should fail | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |
| password missing number should fail | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| password does not hash should fail | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| passwords with wrong hashing algorithm should fail | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| passwords that are different should fail | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| password with and without spaces should be treated the same | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Coverage | 94.11% | 94.11% | 94.11% | 86.66% | 94.11% | 86.66% | 41.17% | 88.23% | 88.23% | 94.11% | 94.11% | 94.11% |

## SSN Helper Tests

| SUT | Test | Correct SSNHelper | AllowDayUpTo30 | AllowMonth0 | IncorrectFormat | MessyLuhn | WrongLength |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SSNHelper  | day 31 should pass | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | --- | --- |
| SSNHelper  | month 0 should fail | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | --- | --- |
| SSNHelper  | incorrect format (space instead of hyphen) should fail | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | --- | --- |
| SSNHelper  | incorrect format (missing hyphen) should fail | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | --- | --- |
| SSNHelper  | incorrect format (hyphen misplaced) should fail | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | --- | --- |
| SSNHelper  | messy luhn should fail | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | --- | --- |
| SSNHelper  | wrong length should fail | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | --- | --- |
| Coverage   |                          | 100% | 100% | 100% | 100% | 100% | 100% | 100% |

## Swedish Social Security Number Tests
| SUT | Test | Correct SwedishSocialSecurityNumber | NoLenCheck | NoTrim | NoLuhn | WrongYear |
| --- | ---| --- | --- | --- | --- | --- |
| SwedishSecurityNumber | Test name 1 | ✅ |  |  |  | | 
| SwedishSecurityNumber | Test name 2 | ✅ |  |  |  | | 
| Coverage |  | 100% | 100% | 100% | | |
