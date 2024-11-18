![GreyScript](https://img.shields.io/badge/GreyScript-Grey%20Hack-grey?labelColor=blue&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVQ4T22T+0tTYRjHv+/u05h4KxsqW1qiiRmZEQZpCUsUJIWMJCL7IUsiCvqlftkP/gcZQr+EeClETCyk6KI/GJWSihdS58LrNnVTNy/b3M45Pe9sy6AHznue57zP+znP7WXYJ5IEGYZxBhKqSSukd3pom2GG1j6yW3ES3xmDGD7Gwoo0ilgIqKetGgnQCIIcQoBBIFelUoSCHnL20fICCjxhOVjfY5OEDgfRRqopGJCziYGjmJ82wOdVYcrhgEoTQM6JZRQVO6BWi8THe4Jc4xD2J+wG+lhLOhvpz4JXfQsZpnKotFFYcfuw43FjsKsFSewVSsqXwOSUDEMjcnGPSUM4S+Zn+qDZ9SvQ1VKK1awKMKUCVZWlcK5vobnlJQS/H9qx13h0YwRao8Bj5+lcYNIwGghQx1Nxuw6gu70E80eK4A/uwmg4DLvdAat1Diq5ErEzfbhfNopDBi+gDxXgGQeME+A4BywvxKO3swDplyqQWVKO1bUNLLs8SIiNw0BnM8bedaDGZEG6fhOIoQN6TPAUfKSqOWB2So+vPaeILIMqKhqQK0JFDOz64dveomqLqDo/i9y0UAMAHfwcQPFAw+2pYSOG+rLDzaEWivhpt0Ok6oalLH8BBdmrYTPAAeNkhVIY/ZKBiYGMiPP/AIU5DpjybHs+DJNM+kFFZKjjPxn8lAPrmCEC4OM2abMhSJGE5fQxJy4XzIOmkUtjpI18+vrf5GHRqodMIUdM4kGoo6OxZLHAvbMDh9sdAmWmbuD6xV8cwNtYvDdII3gqCezOh/YC5rLHIT45GVE6HURBgG16GhI5ebxezLpcSEncRm3ZtCSTSc/phtyNjLLgk7f1NBWafP44lmQ0UiNk/wB4IWdWVqBVbUsPKic+KqOlq+wK1iKXae5tTOy3jnP1So3uZkJqqpbxK7cvAh7FrNPl8wa8TbdLrY9THnrW9uq4T8xmsyzfs5ivS0yoppoUiYKYZrNY5JIkWMmx17mx2erq7v1qxt/r/BtM3mB6tGkzRAAAAABJRU5ErkJggg==&logoColor=white)
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
