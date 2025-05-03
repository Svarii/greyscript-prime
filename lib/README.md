![GreyScript](https://img.shields.io/badge/GreyScript-Prime-black?labelColor=blue&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVQ4T22T+0tTYRjHv+/u05h4KxsqW1qiiRmZEQZpCUsUJIWMJCL7IUsiCvqlftkP/gcZQr+EeClETCyk6KI/GJWSihdS58LrNnVTNy/b3M45Pe9sy6AHznue57zP+znP7WXYJ5IEGYZxBhKqSSukd3pom2GG1j6yW3ES3xmDGD7Gwoo0ilgIqKetGgnQCIIcQoBBIFelUoSCHnL20fICCjxhOVjfY5OEDgfRRqopGJCziYGjmJ82wOdVYcrhgEoTQM6JZRQVO6BWi8THe4Jc4xD2J+wG+lhLOhvpz4JXfQsZpnKotFFYcfuw43FjsKsFSewVSsqXwOSUDEMjcnGPSUM4S+Zn+qDZ9SvQ1VKK1awKMKUCVZWlcK5vobnlJQS/H9qx13h0YwRao8Bj5+lcYNIwGghQx1Nxuw6gu70E80eK4A/uwmg4DLvdAat1Diq5ErEzfbhfNopDBi+gDxXgGQeME+A4BywvxKO3swDplyqQWVKO1bUNLLs8SIiNw0BnM8bedaDGZEG6fhOIoQN6TPAUfKSqOWB2So+vPaeILIMqKhqQK0JFDOz64dveomqLqDo/i9y0UAMAHfwcQPFAw+2pYSOG+rLDzaEWivhpt0Ok6oalLH8BBdmrYTPAAeNkhVIY/ZKBiYGMiPP/AIU5DpjybHs+DJNM+kFFZKjjPxn8lAPrmCEC4OM2abMhSJGE5fQxJy4XzIOmkUtjpI18+vrf5GHRqodMIUdM4kGoo6OxZLHAvbMDh9sdAmWmbuD6xV8cwNtYvDdII3gqCezOh/YC5rLHIT45GVE6HURBgG16GhI5ebxezLpcSEncRm3ZtCSTSc/phtyNjLLgk7f1NBWafP44lmQ0UiNk/wB4IWdWVqBVbUsPKic+KqOlq+wK1iKXae5tTOy3jnP1So3uZkJqqpbxK7cvAh7FrNPl8wa8TbdLrY9THnrW9uq4T8xmsyzfs5ivS0yoppoUiYKYZrNY5JIkWMmx17mx2erq7v1qxt/r/BtM3mB6tGkzRAAAAABJRU5ErkJggg==&logoColor=white)

GreyScript Prime is an extension for **Grey Script** that adds additional methods for object manipulation. With the combination of `Greybel VS`, `Plant UML`, and `JSDocs Live Preview`, this tool is designed to enhance your coding efficiency in **VSCode**.

[`Example Screenshot`](#example) 

Limited custom formatting of DocBlocks and Plant UML allow for insertion to GreyScript Compiler.
***
# GreyScript Prime ![Static Badge](https://img.shields.io/badge/version-0.1.0_alpha-red)

# 📄 Methods Overview

| Category         | Method                      | Description                          |
|------------------|-----------------------------|--------------------------------------|
| **String**       | [`.color("#color")`](#color) | Apply a color to text.               |
|                  | [`.bold`](#bold)               | Make the text bold.                  |
|                  | [`.italic`](#italic)             | Make the text italic.                |
|                  | [`.underline`](#underline)       | Underline the text.                  |
|                  | [`.strike`](#strike)             | Apply strikethrough to text.         |
|                  | [`.mark`](#mark)                 | Highlight the text.                  |
|                  | [`.sub`](#sub)                   | Apply subscript to text.             |
|                  | [`.sup`](#sup)                   | Apply superscript to text.           |
|                  | [`.remove_char_last`](#remove_char_last) | Remove the last character from text. |
|                  | [`.remove_char_first`](#remove_char_first) | Remove the last character from text. |
|                  | [`.remove_bold`](#remove_bold)    | Remove bold formatting from text.    |
|                  | [`.remove_italic`](#remove_italic) | Remove italic formatting from text.  |
|                  | [`.remove_underline`](#remove_underline) | Remove underline formatting.         |
|                  | [`.remove_strike`](#remove_strike) | Remove strikethrough formatting.     |
|                  | [`.remove_mark`](#remove_mark)    | Remove highlight from text.          |
|                  | [`.remove_sub`](#remove_sub)      | Remove subscript from text.          |
|                  | [`.remove_sup`](#remove_sup)      | Remove superscript from text.        |
|                  | [`.extract_between`](#extract_between)                   | Extract the text between the given values.           |
|                  | [`.format`](#format)                   | Allows for string interpolation.           |
| **Number**       | [`.plus(number)`](#plus)             | Add 1 or value to a number.             |
|                  | [`.minus(number)`](#minus)           | Subtract 1 or a value from a number.      |
|                  | [`.diff(number)`](#diff)             | Calculate the absolute difference.   |
|                  | [`.greater_than(number)`](#greater_than) | Check if number is greater.          |
|                  | [`.lesser_than(number)`](#lesser_than) | Check if number is lesser.           |
|                  | [`.random_from(number)`](#random_from) | Generate a random number from 0 (or number) to number.            |
| **List**         | [`.trim`](#trim)             | Removes empty list items from list ends  
|                  | [`.print`](#print)             | Loops through a list and prints each item             |
| **Function**         | [`load_lib(libName)`](#load_lib)             | load a lib from /lib opt:[ , libDir, typeExpected]             |
| **Object**       | [`SystemObject`](#SystemObject)             | Returns object type SystemObject
|                  | [`PortMemory`](#PortMemory)             | Returns object type PortMemory  

## stringMethods
![Static Badge](https://img.shields.io/badge/method-string-green)
  
### .color
The `.color` method allows you to apply a color to the given text.

![image](https://github.com/user-attachments/assets/c2530db7-fee4-4454-be1d-65d7e995268b) <img src="https://github.com/user-attachments/assets/b61e6ae5-97ca-4213-9f63-5689232a3ac8" align="right">

```
newString = "Hello"

print(newString.color("blue")) // Outputs: <color=blue>Hello</color>
```

### .bold
The `.bold` method allows you to apply bold to the given text.

![image](https://github.com/user-attachments/assets/3c6412aa-381a-4408-ba15-06ab0d0e3cfd) <img src="https://github.com/user-attachments/assets/4999242a-5c31-403b-a499-10049c4ba2f2" align="right">

```
newString = "Hello"

print(newString.bold) // Outputs: <b>Hello</b>
```

### .italic
The `.italic` method allows you to apply italic to the given text.

![image](https://github.com/user-attachments/assets/8adc9cf4-c067-47a4-885f-e192105d169e) <img src="https://github.com/user-attachments/assets/e1d059ba-0849-41f4-9230-713eaf975a98" align
="right">

```
newString = "Hello"

print(newString.italic) // Outputs: <i>Hello</i>
```

### .underline
The `.underline` method allows you to apply underline to the given text.

![image](https://github.com/user-attachments/assets/54683595-7cf9-481e-9ea9-14531fe8cb60) <img src="https://github.com/user-attachments/assets/07a4e6a9-c487-4a77-a0c5-e66f1c41fdd4" align="right">

```
newString = "Hello"

print(newString.underline) // Outputs: <u>Hello</u>
```

### .strike
The `.strike` method allows you to apply strikethrough to the given text.

![image](https://github.com/user-attachments/assets/f1238124-aa01-42c3-8171-b6af0d925b4a) <img src="https://github.com/user-attachments/assets/55fb0584-10d3-45db-8b12-c1f92f818d52" align="right">

```
newString = "Hello"

print(newString.strike) // Outputs: <s>Hello</s>
```

### .mark
The `.mark` method allows you to apply highlight to the given text.

![image](https://github.com/user-attachments/assets/61838003-c880-4504-a12b-94b19c29ea4b) <img src="https://github.com/user-attachments/assets/e2e0d85c-782d-4bf1-a09b-877e77ea5972" align="right">

```
newString = "Hello"

print(newString.mark) // Outputs: <mark>Hello</mark>
```

### .sub
The `.sub` method allows you to apply subscript to the given text. Example usage:

![image](https://github.com/user-attachments/assets/3fb3f69f-071f-4068-8a6f-9964c3f84e86) <img src="https://github.com/user-attachments/assets/44ccb9af-ba61-4678-9b1a-109b616ed059" align="right">

```
newString = "Hello"

print(newString.tiny) // Outputs: <sub>Hello</sub>
```

### .sup
The `.sup` method allows you to apply superscript to the given text. Example usage:

![image](https://github.com/user-attachments/assets/a94caa5a-6a99-4c90-8022-4c0b8ecd9531) <img src="https://github.com/user-attachments/assets/1d4607bb-62df-4c92-88a7-244ac5ae008a" align="right">

```
newString = "Hello"

print(newString.sup) // Outputs: <sup>Hello</sup>
```

### .remove_char_last
The `.remove_char_last` method allows you to remove the last character to the given text. Example usage:

![image](https://github.com/user-attachments/assets/0a870f9c-382d-41d1-a550-6a403147dbe9) <img src="https://github.com/user-attachments/assets/3a5b8ffd-1122-4811-b7df-ee09228977db" align="right">

```
newString = "Hello"

print(newString.remove_char_last) // Outputs: Hell
```


### .remove_char_first
The `.remove_char_first` method allows you to remove the last character to the given text. Example usage:

![image](https://github.com/user-attachments/assets/5eeaf542-d9bf-4426-a506-5dd3a748a9ac) <img src="https://github.com/user-attachments/assets/fa766c6c-9d2f-4d65-8c02-afd8ee1b914f" align="right">

```
newString = "Hello"

print(newString.remove_char_first) // Outputs: ello
```

### .remove_bold
The `.remove_bold` method allows you to remove bold tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/b9163072-533f-4614-b418-630d2d3c6749) <img src="https://github.com/user-attachments/assets/f4c50d5b-8d28-4c7b-9bd0-71bb88c28b02" align="right">

```
newString = "<b>Hello</b>"

print(newString.remove_bold) // Outputs: Hello
```

### .remove_italic
The `.remove_italic` method allows you to remove italic tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/aeaada4d-8aaf-44ed-8935-e49de4d6f864) <img src="https://github.com/user-attachments/assets/2c544f95-31be-4c8f-a458-3df2a7da9e60" align="right">

```
newString = "<i>Hello</i>"

print(newString.remove_italic) // Outputs: Hello
```

### .remove_underline
The `.remove_underline` method allows you to remove underline tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/768e7493-ead8-4a7f-b156-af9f8761815a) <img src="https://github.com/user-attachments/assets/f7f5b909-d70d-41e7-9e50-bedc24218dbe" align="right">

```
newString = "<u>Hello</u>"

print(newString.remove_underline) // Outputs: Hello
```

### .remove_strike
The `.remove_strike` method allows you to remove strikethrough tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/1aeed45f-4ab5-4343-8dba-949faec6c0af) <img src="https://github.com/user-attachments/assets/067854d8-e9d3-49ce-a992-2d30bd516517" align="right">

```
newString = "<s>Hello</s>"

print(newString.remove_strike) // Outputs: Hello
```

### .remove_mark
The `.remove_mark` method allows you to remove mark tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/e8c5bdbe-e881-4ad2-996b-ef8eff80fcbe) <img src="https://github.com/user-attachments/assets/6002997b-ace8-4972-a2c2-8e38215a0fcc" align="right">

```
newString = "<mark>Hello</mark>"

print(newString.remove_mark) // Outputs: Hello
```

### .remove_sub
The `.remove_sub` method allows you to remove sub tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/db99e8ca-62dc-494b-867a-8ab204fdf366) <img src="https://github.com/user-attachments/assets/09d958b7-2fe7-488d-be54-fd8db4e31544" align="right">

```
newString = "<sub>Hello</sub>"

print(newString.remove_sub) // Outputs: Hello
```

### .remove_sup
The `.remove_sup` method allows you to remove superscript tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/14996b4a-aa3c-4b02-a06c-2303cde34328) <img src="https://github.com/user-attachments/assets/46ea574e-1c99-4d5b-b0e9-0f4f889dc27b" align="right">

```
newString = "<sup>Hello</sup>"

print(newString.remove_sup) // Outputs: Hello

```
### .extract_between
The `.extract_between` method allows you to extract the text between the provided values

![image](https://github.com/user-attachments/assets/2fc96f61-81a7-46a1-a922-ba15c8399937) <img src="https://github.com/user-attachments/assets/bb057877-5cdb-4152-9bbd-78dd0e7140ec" align="right">

```
newString = "<b>0x53C737</b>"

print(newString.extract_between("<b>", "</b>")) // Outputs: 0x53C737

```
### .format
The `.format` method allows for string interpolation

![image](https://github.com/user-attachments/assets/b0661d5b-fdb9-400c-8181-7c7cfb5f3269) <img src="https://github.com/user-attachments/assets/68c231a4-f293-4569-a714-638feb61367d" align="right">

```greyscript
variableString = "The quick brown %s jumps over the lazy %s"
animalsList = ["fox", "dog"]      
sentence = variableString.format(animalsList)
print(sentence); // Outputs: The quick brown fox jumps over the lazy dog
```
##### Modification of implimentation by dynobytes.
---
## numberMethods
![Static Badge](https://img.shields.io/badge/method-number-green)

### .plus
The `.plus` method allows you to add a specified amount to a number. If no amount is provided, it defaults to `1`.
![image](https://github.com/user-attachments/assets/43a689b8-e9ae-43eb-a2ee-829337d19bf3) <img src="https://github.com/user-attachments/assets/e886e55f-b95d-439f-8d0d-44c84a030180" align="right">

```greyscript
newNumber = 40

result = newNumber.plus(2)
print(result) // Outputs: 42
```

### .minus
The `.minus` method allows you to subtract a specified amount from a number. If no amount is provided, it defaults to `1`. 
![image](https://github.com/user-attachments/assets/aca2249d-bf43-4031-abff-130f4a853d76) <img src="https://github.com/user-attachments/assets/edd9ae50-b11d-4870-82da-ea7957713eea" align="right">

```greyscript
newNumber = 44

result = newNumber.minus(2)
print(result) // Outputs: 42
```

### .diff
The `.diff` method calculates the absolute difference between the current number and another number.
![image](https://github.com/user-attachments/assets/65152391-7c48-4fa9-ac05-b9ba26e947f4) <img src="https://github.com/user-attachments/assets/49276e79-10dd-4bd3-901f-794d078de8f2" align="right">

```greyscript
newNumber = 44
newNumber2 = 2

result = newNumber.diff(newNumber2)
print(result) // Outputs: 42
```

### .greater_than
The `.greater_than` method checks if the current number is greater than a provided number. Returns `true` if greater, `false` otherwise.
![image](https://github.com/user-attachments/assets/3b71c3f3-abcd-40b9-ba6a-4f7b215e9d58) <img src="https://github.com/user-attachments/assets/b966ac53-3e88-4b53-81c4-008e45aa54ca" align="right">

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.greater_than(myNumber2)
print(result) // Outputs: 0 (false)
```

### .lesser_than
The `.lesser_than` method checks if the current number is less than a provided number. Returns `true` if lesser, `false` otherwise.
![image](https://github.com/user-attachments/assets/d13a7320-012f-4c69-92de-524133c64405) <img src="https://github.com/user-attachments/assets/c0cf05b3-bf72-4237-84c6-864cf907c7dd" align="right">

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

### .random_from
The `.random_from` method generates a random number in the range of 1 (or optional parameter) to number.
![image](https://github.com/user-attachments/assets/4d6c9b64-73ea-4fc4-9b3f-e10509a2d8a5) <img src="https://github.com/user-attachments/assets/3a5680f0-064f-4950-acea-0e451ecad8b1" align="right">

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

---
## listMethods
![Static Badge](https://img.shields.io/badge/method-list-green)

### .trim
The `.trim` method Returns a new list stripped of any spacing at the beginning and ending. If any value gets passed that is not a list this method will return null.

![image](https://github.com/user-attachments/assets/f7dcfc4e-81f7-46cc-b44f-96a3da4d8e97) <img src="https://github.com/user-attachments/assets/d796f888-204f-47e4-9c76-bb8593c33d98" align="right">

```greyscript
myList = ["", "string", "string", "", ""]

result = myList.trim
print(result) // Outputs: ["string", "string"]
```

---
### .print
The `.print` method loops through a list and prints each item

![image](https://github.com/user-attachments/assets/e2489ca3-569d-4009-a2d8-af71f4ec7165) <img src="https://github.com/user-attachments/assets/df9b6c0c-debe-4189-92cc-8036e010e4e8" align="right">

```greyscript
myList = ["string", "string"]
myList.print

// Outputs:
string
string
```

---
# 📄 Functions Overview
## load_lib

<img src="https://github.com/user-attachments/assets/123d920a-ac65-4524-9cbe-dc149418f334" align="left">

```greyscript
lib = load_lib;
lib = load_lib("metaxploit.so");
lib = load_lib("metaxploit.so", "/lib");
lib = load_lib("metaxploit.so", "/lib", "MetatxploitLib");
// All Output: typeof(lib) == "MetaxploitLib"
```

![image](https://github.com/user-attachments/assets/99db6c6a-6a90-415e-9c64-a55e6c6840d5)


#Additional Functions
######TODO: Detailed Documentation
- **`force_params(usage, numReqParams)`**: Force paramater usage and add help 
- **`app_name()`**: Gets name of program {self}
- **`is_null()`**: Checks if object is null; if null, print / return / exit options
- **`is_type()`**: Checks Types and specifies on-fail action
- **`network_device_list()`**: Returns Network devices in a list
- **`calcACK()`**: Caculates the recommended amount of ACKs to collect

---
# 📄 Class Overview
## SystemObject

<img src="https://github.com/user-attachments/assets/27f290d4-4544-4912-bfc5-74d68102cd41" align="left">

![image](https://github.com/user-attachments/assets/be2cf4f9-2b85-42b9-a527-379c5ea6cefa)

```greyscript
terminal = get_system_object
print typeof(terminal)  //Outputs: SystemObject      
print terminal.computer.get_name  //Outputs: The name of the computer       
print terminal.shell.launch("ls")  //Outputs: launches ls
```

---

## Port Memory Object
<img src="https://github.com/user-attachments/assets/c83516d7-c441-4ff8-ac05-6420022a51d8" align="left">

```greyscript
portScan = get_memory_portscan
print typeof(portScan)  //Outputs: PortMemory      
```

![image](https://github.com/user-attachments/assets/84f36c7e-f435-4713-9aec-151e80f58c45)


***
# Example
Screen Shot of vsCode with Grey Script Prime and recommended plugins.
![image](https://github.com/user-attachments/assets/54074b16-ca53-4f37-89cf-9462cb49f372)

![image](https://github.com/user-attachments/assets/aa003db6-90e6-441b-b468-519e893e77b3)






