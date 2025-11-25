| Version | Correct | DoesNotHash | NoTrim | NumberCheck | AlwaysSame | PasswordCheck | NeverContainsNumbers | ShortPassword | BugVeryShort | HashingAlgorithm | WrongMessage | MyCustomBug |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| too short password should fail | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |
| password missing number should fail | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| password does not hash should fail | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| passwords with wrong hashing algorithm should fail | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| passwords that are different should fail | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| password with and without spaces should be treated the same | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Coverage | 94.11% | 94.11% | 94.11% | 86.66% | 94.11% | 86.66% | 41.17% | 88.23% | 88.23% | 94.11% | 94.11% | 94.11% |
