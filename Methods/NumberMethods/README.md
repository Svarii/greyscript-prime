
# numberMethods.so.src
  #### [.plus](#plus)
  #### [.minus](#minus)
  #### [.diff](#diff)
  #### [.greater_than](#greater_than)
  #### [.lesser_than](#lesser_than)
  #### [.random_from](#random_from)

##### .plus
The `.plus` method allows you to add a specified amount to a number. If no amount is provided, it defaults to `1`. Example usage:![image](https://github.com/user-attachments/assets/e9c828a9-747b-4033-a6c5-df598750951f)
```greyscript
newNumber = 40

result = newNumber.plus(2)
print(result) // Outputs: 42
```

##### .minus
The `.minus` method allows you to subtract a specified amount from a number. If no amount is provided, it defaults to `1`. Example usage:![image](https://github.com/user-attachments/assets/3a41b282-6973-49ae-828e-cfc69b38992c)
```greyscript
newNumber = 44

result = newNumber.minus(2)
print(result) // Outputs: 42
```

##### .diff
The `.diff` method calculates the absolute difference between the current number and another number. Example usage:![image](https://github.com/user-attachments/assets/7f53d021-0089-4833-b3e1-1248b05e0d44)
```greyscript
newNumber = 44
newNumber2 = 2

result = newNumber.diff(newNumber2)
print(result) // Outputs: 42
```

##### .greater_than
The `.greater_than` method checks if the current number is greater than a provided number. Returns `true` if greater, `false` otherwise. Example usage:![image](https://github.com/user-attachments/assets/7a87acd3-f3b3-4c7b-ae38-471824ac0181)
```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.greater_than(myNumber2)
print(result) // Outputs: 0 (false)
```

##### .lesser_than
The `.lesser_than` method checks if the current number is less than a provided number. Returns `true` if lesser, `false` otherwise. Example usage:![image](https://github.com/user-attachments/assets/78235c4e-ba17-479f-9ace-510487a59698)
```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

##### .random_from
The `.random_from` method generates a random number in the range of 1 (or optional parameter) to number. Example usage:![image](https://github.com/user-attachments/assets/52cc4813-51af-46d0-8d8a-a0d6d2140f4c)
```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

#### Notes
- All methods validate the input type and return an error message if the argument is not a `number`.
- Example error handling:
```greyscript
newNumber = 42

result = newNumber.plus("string")
print(result) // Outputs: "Error: number.plus passed object type of string, number required"
```