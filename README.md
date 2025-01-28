# MongoDB $inc operator error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error arises from an incorrect usage of the operator, leading to unexpected behavior in updating documents.
The `bug.js` file shows the incorrect usage of `$inc`, while `bugSolution.js` provides the corrected version.
## Description
The `$inc` operator is used to increment a numerical field in a document. However, if the data types are not consistent, or if the syntax is incorrect, it may lead to errors.
## Solution
The solution involves ensuring the field to be incremented is a number and using the correct syntax of the `$inc` operator within the `updateOne` method.