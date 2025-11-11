# Practice Writing and Running Tests with mocks

## Goals
* Testing classes with dependencies
* Run tests with mocks
* Test the Helper and Password classes independently of each other
    * Tests for Password should only fail if the bug is in Password class
    * Tests for Helper should only fail if the bug is in Helper class

## Task 2: Write an optimized test suite for two classes 

Most of the assignment works as the previous practice "run test" but now we have two classes with a dependency. We want to test these classes independently.

SwedishSecurityNumber depends on the class SSNHelper who holds all the validation methods. A test for SwedishSecurityNumber should only test functionality in the SwedishSecurityNumber class and not rely on SSNHelper. To accomplish this we can make use of "mocks". A mock is a configurable class instance that acts as a object of SSNHelper but we can control its output in the test.

* Write a test suite for SwedishSecurityNumber class and another for the SSNHelper class
A bug in the SwedishSecurityNumber must not fail due to a bug in SSNHelper. 
* None of the tests in SwedishSecurityNumber should use objects of the SSNHelper class.
* Only one expect/assert per test
* Show tests and bug fail matrix as in previous task

* Artifacts to show during examination
  * Table below
  




### Table for checking test suite bug coverage
| SUT | Test | Correct | BuggySSNHelperWrongLength | Buggy Helper 2 | ... | |
| --- | ---| --- | --- | --- | --- | --- |
| SwedishSecurityNumber | Test name 1 | ✅ | ❌ | ✅ | ✅ | | 
| SwedishSecurityNumber | Test name 2 | ✅ | ❌ | ✅ | ✅ | | 
| SSNHelper  | Test name 3 | ✅ | ✅ | ❌ | ✅ | | |
| Coverage |  | 100% | 100% | 100% | | |



### Reflection Questions
* What is the purpose of mocks?
* Why is it good if tests are independent of classes that the SUT depends on?
* Should private methods be tested? What are the pros and cons of having a "helper class" instead of private methods?
* Can all bugs be found by testing?
* Can all code be 100 covered by tests?

