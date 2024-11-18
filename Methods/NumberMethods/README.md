
# numberMethods.so.src
  ##### [.plus](#plus)
  ##### [.minus](#minus)
  ##### [.diff](#diff)
  ##### [.greater_than](#greater_than)
  ##### [.lesser_than](#lesser_than)

###### .plus
The `.plus` method allows you to add a specified amount to a number. If no amount is provided, it defaults to `1`. Example usage:
```greyscript
newNumber = 40

result = newNumber.plus(2)
print(result) // Outputs: 42
```

###### .minus
The `.minus` method allows you to subtract a specified amount from a number. If no amount is provided, it defaults to `1`. Example usage:
```greyscript
newNumber = 44

result = newNumber.minus(2)
print(result) // Outputs: 42
```

###### .diff
The `.diff` method calculates the absolute difference between the current number and another number. Example usage:
```greyscript
newNumber = 44
newNumber2 = 2

result = newNumber.diff(newNumber2)
print(result) // Outputs: 42
```

###### .greater_than
The `.greater_than` method checks if the current number is greater than a provided number. Returns `true` if greater, `false` otherwise. Example usage:
```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.greater_than(myNumber2)
print(result) // Outputs: 0 (false)
```

###### .lesser_than
The `.lesser_than` method checks if the current number is less than a provided number. Returns `true` if lesser, `false` otherwise. Example usage:
```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

### Notes
- All methods validate the input type and return an error message if the argument is not a `number`.
- Example error handling:
```greyscript
newNumber = 42

result = newNumber.plus("string")
print(result) // Outputs: "Error: number.plus passed object type of string, number required"
```
