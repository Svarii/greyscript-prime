![GreyScript](https://img.shields.io/badge/GreyScript-Prime-black?labelColor=blue&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVQ4T22T+0tTYRjHv+/u05h4KxsqW1qiiRmZEQZpCUsUJIWMJCL7IUsiCvqlftkP/gcZQr+EeClETCyk6KI/GJWSihdS58LrNnVTNy/b3M45Pe9sy6AHznue57zP+znP7WXYJ5IEGYZxBhKqSSukd3pom2GG1j6yW3ES3xmDGD7Gwoo0ilgIqKetGgnQCIIcQoBBIFelUoSCHnL20fICCjxhOVjfY5OEDgfRRqopGJCziYGjmJ82wOdVYcrhgEoTQM6JZRQVO6BWi8THe4Jc4xD2J+wG+lhLOhvpz4JXfQsZpnKotFFYcfuw43FjsKsFSewVSsqXwOSUDEMjcnGPSUM4S+Zn+qDZ9SvQ1VKK1awKMKUCVZWlcK5vobnlJQS/H9qx13h0YwRao8Bj5+lcYNIwGghQx1Nxuw6gu70E80eK4A/uwmg4DLvdAat1Diq5ErEzfbhfNopDBi+gDxXgGQeME+A4BywvxKO3swDplyqQWVKO1bUNLLs8SIiNw0BnM8bedaDGZEG6fhOIoQN6TPAUfKSqOWB2So+vPaeILIMqKhqQK0JFDOz64dveomqLqDo/i9y0UAMAHfwcQPFAw+2pYSOG+rLDzaEWivhpt0Ok6oalLH8BBdmrYTPAAeNkhVIY/ZKBiYGMiPP/AIU5DpjybHs+DJNM+kFFZKjjPxn8lAPrmCEC4OM2abMhSJGE5fQxJy4XzIOmkUtjpI18+vrf5GHRqodMIUdM4kGoo6OxZLHAvbMDh9sdAmWmbuD6xV8cwNtYvDdII3gqCezOh/YC5rLHIT45GVE6HURBgG16GhI5ebxezLpcSEncRm3ZtCSTSc/phtyNjLLgk7f1NBWafP44lmQ0UiNk/wB4IWdWVqBVbUsPKic+KqOlq+wK1iKXae5tTOy3jnP1So3uZkJqqpbxK7cvAh7FrNPl8wa8TbdLrY9THnrW9uq4T8xmsyzfs5ivS0yoppoUiYKYZrNY5JIkWMmx17mx2erq7v1qxt/r/BtM3mB6tGkzRAAAAABJRU5ErkJggg==&logoColor=white)

GreyScript Prime is an extension for **Grey Script** that adds additional methods for object manipulation. With the combination of `Greybel VS`, `Plant UML`, and `Markdown Preview Enhanced with litvis`, this tool is designed to enhance your coding efficiency in **VSCode**.

[`Example Screenshot`](#example) 

Limited custom formatting of DocBlocks and Plant UML allow for insertion to GreyScript Compiler.
***
# GreyScript Prime ![Static Badge](https://img.shields.io/badge/version-0.1.3_alpha-red)

# 📄 Methods Overview

| Category   | Method                                                  | Description                                                                                   |
|------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **String** | [`.align(string)`](#align)                               | Align text.                                                                                   |
|            | [`.alpha(string)`](#alpha)                               | Set alpha.                                                                                    |
|            | [`.bold`](#bold)                                        | Make the text bold.                                                                           |
|            | [`.color(string)`](#color)                               | Apply a color to text.                                                                        |
|            | [`.cspace(string)`](#cspace)                             | Apply cspace to text.                                                                         |
|            | [`.indent(string)`](#indent)                             | Apply indent to text.                                                                         |
|            | [`.italic`](#italic)                                    | Make the text italic.                                                                         |
|            | [`.line-indent(string)`](#line-indent)                   | Apply line-indent to text.                                                                    |
|            | [`.lowercase`](#lowercase)                               | Convert text to lowercase.                                                                    |
|            | [`.margin(string)`](#margin)                             | Apply margin to text.                                                                         |
|            | [`.mark`](#mark)                                        | Highlight the text.                                                                           |
|            | [`.mspace(string)`](#mspace)                             | Apply monospace formatting.                                                                   |
|            | [`.nobr`](#nobr)                                        | Apply no-break to the text.                                                                   |
|            | [`.noparse`](#noparse)                                  | Apply no-parse to the text.                                                                   |
|            | [`.pos(string)`](#sub)                                  | Apply pos to text.                                                                            |
|            | [`.strike`](#strike)                                    | Apply strikethrough to text.                                                                  |
|            | [`.sub`](#sub)                                          | Apply subscript to text.                                                                      |
|            | [`.sup`](#sup)                                          | Apply superscript to text.                                                                    |
|            | [`.uppercase`](#uppercase)                              | Convert text to uppercase.                                                                    |
|            | [`.underline`](#underline)                              | Apply underline to text.                                                                      |
|            | [`.rotate`](#rotate)                                    | Rotates the text.                                                                             |
|            | [`.voffset(string)`](#voffset)                           | Add voffset tag.                                                                              |
|            | [`.width`](#width)                                      | Add width tag.                                                                                |
|            | [`.extract`](#extract)                                  | Extract the text between the given values.                                                  |
|            | [`.format`](#format)                                    | Allows for string interpolation.                                                            |
|            | [`.remove_char_last`](#remove_char_last)                | Remove the last character from text.                                                        |
|            | [`.remove_char_first`](#remove_char_first)              | Remove the first character from text.                                                       |
|            | [`.remove_bold`](#remove_bold)                          | Remove bold formatting from text.                                                           |
|            | [`.remove_italic`](#remove_italic)                      | Remove italic formatting from text.                                                         |
|            | [`.remove_underline`](#remove_underline)                | Remove underline formatting.                                                                  |
|            | [`.remove_strike`](#remove_strike)                      | Remove strikethrough formatting.                                                              |
|            | [`.remove_mark`](#remove_mark)                          | Remove highlight from text.                                                                   |
|            | [`.remove_sub`](#remove_sub)                            | Remove subscript from text.                                                                   |
|            | [`.remove_sup`](#remove_sup)                            | Remove superscript from text.                                                                 |
| **Number** | [`.diff(number)`](#diff)                                | Calculate the absolute difference.                                                          |
|            | [`.divide(number)`](#divide)                            | Divide number by a given divisor.                                                             |
|            | [`.is_more(number)`](#is_more)                          | Check if one number is greater than another.                                                  |
|            | [`.is_less(number)`](#is_less)                          | Check if one number is lesser than another.                                                   |
|            | [`.lerp(number, number, number)`](#lerp)                | Linearly interpolate between two numbers.                                                    |
|            | [`.minus(number)`](#minus)                              | Subtract a value from a number.                                                               |
|            | [`.multiply(number)`](#multiply)                        | Multiply the number by a value.                                                               |
|            | [`.plus(number)`](#plus)                                | Add a value to a number.                                                                      |
|            | [`.random_from(number)`](#random_from)                  | Generate a random number from 0 (or given start) to the specified number.                     |
|            | [`.clamp(number, number)`](#clamp)                      | Restrict a value within a specified range (minimum to maximum).                               |
| **List**   | [`.join`](#join)                                        | Combine list into a single string.                                                            |
|            | [`.print`](#print)                                      | Loop through a list and print each item.                                                      |
|            | [`.crop`](#crop)                                        | Remove empty list items from the list ends.                                                   |
| **Function** | [`load_lib(libName)`](#load_lib)                     | Load a library from /lib. Optional parameters: libDir, typeExpected.
|            | [`get_acks(number)`](#calculate_acks) | Return recommended ACKs as a number.                                                         |
|            | [`fetch_whois`](#fetch_whois)                       | Return an object containing whois information.                                                |
|            | [`file_append`](#file_append)                           | Append data to a existing file or create a new file if it doesn’t exist.                                
|            | [`file_delete`](#file_delete)                           | Delete file if it exist.                                
|            | [`file_exists`](#file_exists)                           | Check if file exists.                                |
|            | [`bool_text`](#bool_text)                               | Return a string containing either "true" or "false".                                          |
|            | [`force_params`](#force_params)                         | Require parameters and display help information.                                              |
|            | [`get_random_ip`](#get_random_ip)             | Generate random IP addresses.                                                                 |
|            | [`is_null`](#is_null)                                   | Perform null error checking.                                                                  |
|            | [`is_type`](#is_type)                                   | Perform type error handling.                                                                  |
|            | [`network_device_list`](#network_device_list)           | Return network devices as a list.                                                             |
|            | [`program_name`](#program_name)                         | Return the name of the program itself.                                                        |
|            | [`unsafe_check_list`](#unsafe_check_list)               | Split unsafe check results into individual exploit results and return a list of unsafe check strings. |
| **Object** | [`SystemObject`](#SystemObject)                         | Return an object of type SystemObject.                                                        |
|            | [`PortMemory`](#PortMemory)                             | Return an object of type PortMemory.                                                          |
|            | [`idSelf`](#idSelf)                                     | Return local environment information.                                                        |

## stringMethods
![Static Badge](https://img.shields.io/badge/method-string-green)
### TextMeshPro

#### .align
##### *[align-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextAlignment.html)*
The .align method allows you to apply the align tag to the given text.
Accepted values are: left, right, center, justified, and flush

![image](https://github.com/user-attachments/assets/0b079e33-ba42-4804-9526-f639d7b03980)
```
newString = "Hello"

print(newString.align) // Outputs: <align="center">Hello</align>
```

#### .alpha
##### *[alpha-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextOpacity.html)*
The `.alpha` method sets the opacity of using a 2 digits hex value

![image](https://github.com/user-attachments/assets/50c670d2-6102-4308-8f7e-7c46a600a710)

\#FF: 100% Opague
\#00: 100% Transparent

#### .bold
##### *[bold-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextBoldItalic.html)*
The `.bold` method allows you to apply bold to the given text.

![image](https://github.com/user-attachments/assets/3c6412aa-381a-4408-ba15-06ab0d0e3cfd)

```
newString = "Hello"

print(newString.bold) // Outputs: <b>Hello</b>
```
#### .color
##### *[color-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextColor.html)*
##### *[color-names-extended](https://htmlcolorcodes.com/color-names/)*
The `.color` method allows you to apply a color to the given text.

![image](https://github.com/user-attachments/assets/c2530db7-fee4-4454-be1d-65d7e995268b)

```
newString = "Hello"

print(newString.color("blue")) // Outputs: <color=blue>Hello</color>
```

#### .cspace
##### *[cspace-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextCharacterSpacing.html)*
The `.cspace` method allows you to adjust character spacing, either absolute or relative to the original font Asset. You can use pixels or font units.

![image](https://github.com/user-attachments/assets/46bcd46a-a89f-4242-b1af-3011f622027b)

#### .indent
##### *[indent-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextIndentation.html)*
The `.indent` method controls the horizontal caret position the same way the <pos> tag does, but the effect persists across lines.

![image](https://github.com/user-attachments/assets/f4f3eeee-1a69-4389-aecc-5c857b196fd1)


#### .italic
##### *[italic-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextBoldItalic.html)*
The `.italic` method allows you to apply italic to the given text.

![image](https://github.com/user-attachments/assets/8adc9cf4-c067-47a4-885f-e192105d169e)

```
newString = "Hello"

print(newString.italic) // Outputs: <i>Hello</i>
```

#### .line-indent
##### *[line-indent-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLineIndentation.html)*
The .line-indent method inserts horizontal space directly after it, and before the start of each new line. It only affects manual line breaks (including line breaks created with the \<br> tag, not word-wrapped lines.

![image](https://github.com/user-attachments/assets/9dfb64e0-59cf-4181-ab38-c883fe9b1410)


You can specify the indentation in pixels, font units, or percentages.

#### .lowercase
##### *[lowercase-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLetterCase.html)*
The .lowercase method alters the capitalization of your text before rendering. The text in the Text field remains as you entered it.

![image](https://github.com/user-attachments/assets/ee73d21c-5f7d-4f48-8b6a-7262babbec1f)

#### .margin
##### *[margin-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMargins.html)*
You can increase the horizontal margins of the text with the .margin method.
You can specify the margins in pixels, font units, and percentages.
Negative values have no effect.

![image](https://github.com/user-attachments/assets/4a9ec009-5f4d-4585-b3ab-991ba10128fe)


#### .mark
##### *[mark-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMark.html)*
The `.mark` method allows you to apply highlight to the given text.

![image](https://github.com/user-attachments/assets/61838003-c880-4504-a12b-94b19c29ea4b)

```
newString = "Hello"

print(newString.mark) // Outputs: <mark>Hello</mark>
```

#### .mspace
##### *[mspace-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMonospace.html)*

![image](https://github.com/user-attachments/assets/902134e5-ccda-492f-97c1-521d2003fc32)


#### .nobr
##### *[nobreak-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextNoBreak.html)*

![image](https://github.com/user-attachments/assets/68f252ff-2d60-4f2d-a32f-bf9c56b7954b)


#### .noparse
##### *[noparse-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextNoParse.html)*

![image](https://github.com/user-attachments/assets/415fb0cf-8bd6-4ea1-9193-9cd34885752b)


#### .pos
##### *[pos-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextPos.html)*

![image](https://github.com/user-attachments/assets/dcd1154f-73b2-4431-9d5d-574e885bfcb9)


#### .strike
##### *[strike-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextStrikethroughUnderline.html)*
The `.strike` method allows you to apply strikethrough to the given text.

![image](https://github.com/user-attachments/assets/f1238124-aa01-42c3-8171-b6af0d925b4a)

```
newString = "Hello"

print(newString.strike) // Outputs: <s>Hello</s>
```

#### .sub
##### *[sub-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSubSuper.html)*
The `.sub` method allows you to apply subscript to the given text. Example usage:

![image](https://github.com/user-attachments/assets/3fb3f69f-071f-4068-8a6f-9964c3f84e86)

```
newString = "Hello"

print(newString.tiny) // Outputs: <sub>Hello</sub>
```

#### .sup
##### *[sup-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSubSuper.html)*
The `.sup` method allows you to apply superscript to the given text. Example usage:

![image](https://github.com/user-attachments/assets/a94caa5a-6a99-4c90-8022-4c0b8ecd9531)

```
newString = "Hello"

print(newString.sup) // Outputs: <sup>Hello</sup>
```

#### .underline
##### *[underline-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextStrikethroughUnderline.html)*
The `.underline` method allows you to apply underline to the given text.

![image](https://github.com/user-attachments/assets/54683595-7cf9-481e-9ea9-14531fe8cb60)

```
newString = "Hello"

print(newString.underline) // Outputs: <u>Hello</u>
```
### Map Methods
#### .get_attributes

### Logic Methods
#### .extract
The `.extract` method allows you to extract the text between the provided values

![image](https://github.com/user-attachments/assets/c8df8d03-c595-48e2-9ba2-6757f675dd7b)

```
newString = "<b>0x53C737</b>"

print(newString.extract_between("<b>", "</b>")) // Outputs: 0x53C737

```
#### .format
The `.format` method allows for string interpolation

![image](https://github.com/user-attachments/assets/c2b8b59c-8ee7-4acd-a840-2fb16060ef4a)

```greyscript
// Modification of implimentation by dynobytes.
variableString = "The quick brown %s jumps over the lazy %s"
animalsList = ["fox", "dog"]      
sentence = variableString.format(animalsList)
print(sentence); // Outputs: The quick brown fox jumps over the lazy dog
```
### Removal Methods
#### .remove_char_last 
The `.remove_char_last` method allows you to remove the last character to the given text. Example usage:

![image](https://github.com/user-attachments/assets/0a870f9c-382d-41d1-a550-6a403147dbe9)

```
newString = "Hello"

print(newString.remove_char_last) // Outputs: Hell
```


#### .remove_char_first
The `.remove_char_first` method allows you to remove the last character to the given text. Example usage:

![image](https://github.com/user-attachments/assets/5eeaf542-d9bf-4426-a506-5dd3a748a9ac)

```
newString = "Hello"

print(newString.remove_char_first) // Outputs: ello
```

#### .remove_bold
The `.remove_bold` method allows you to remove bold tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/b9163072-533f-4614-b418-630d2d3c6749)

```
newString = "<b>Hello</b>"

print(newString.remove_bold) // Outputs: Hello
```

#### .remove_italic
The `.remove_italic` method allows you to remove italic tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/aeaada4d-8aaf-44ed-8935-e49de4d6f864)

```
newString = "<i>Hello</i>"

print(newString.remove_italic) // Outputs: Hello
```

#### .remove_underline
The `.remove_underline` method allows you to remove underline tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/768e7493-ead8-4a7f-b156-af9f8761815a)

```
newString = "<u>Hello</u>"

print(newString.remove_underline) // Outputs: Hello
```

#### .remove_strike
The `.remove_strike` method allows you to remove strikethrough tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/1aeed45f-4ab5-4343-8dba-949faec6c0af)

```
newString = "<s>Hello</s>"

print(newString.remove_strike) // Outputs: Hello
```

#### .remove_mark
The `.remove_mark` method allows you to remove mark tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/e8c5bdbe-e881-4ad2-996b-ef8eff80fcbe)

```
newString = "<mark>Hello</mark>"

print(newString.remove_mark) // Outputs: Hello
```

#### .remove_sub
The `.remove_sub` method allows you to remove sub tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/db99e8ca-62dc-494b-867a-8ab204fdf366)

```
newString = "<sub>Hello</sub>"

print(newString.remove_sub) // Outputs: Hello
```

#### .remove_sup
The `.remove_sup` method allows you to remove superscript tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/14996b4a-aa3c-4b02-a06c-2303cde34328)

```
newString = "<sup>Hello</sup>"

print(newString.remove_sup) // Outputs: Hello

```

## numberMethods
![Static Badge](https://img.shields.io/badge/method-number-green)

### .clamp
The `.clamp` method allows a number to be clamped within a specified range
![image](https://github.com/user-attachments/assets/53351c78-1259-4796-8a14-466e39fb5768)



### .diff
The `.diff` method calculates the absolute difference between the current number and another number.
![image](https://github.com/user-attachments/assets/f78cf4ce-805a-4d04-9e20-0f6b6a6bf8b6)

```greyscript
newNumber = 44
newNumber2 = 2

result = newNumber.diff(newNumber2)
print(result) // Outputs: 42
```


### .divide
The `.divide` method divides the current number by another number.  Zero division will result in null
![image](https://github.com/user-attachments/assets/8fe1a4f2-f56c-4b11-87c6-26e4bb3fd694)

```greyscript
newNumber = 84
newNumber2 = 2

result = newNumber.divide(newNumber2)
print(result) // Outputs: 42
```

### .is_more
The `.is_more` method checks if the current number is greater than a provided number. Returns `true` if greater, `false` otherwise.
![image](https://github.com/user-attachments/assets/6f61825e-f52c-4400-912c-c24a2b4f90a8)

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.greater_than(myNumber2)
print(result) // Outputs: 0 (false)
```

### .is_less
The `.is_less` method checks if the current number is less than a provided number. Returns `true` if lesser, `false` otherwise.
![image](https://github.com/user-attachments/assets/b6147f1f-2b63-4a3e-947e-b11f99b9feec)

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

### .lerp
The `.lerp` method computes the linear interpolation (lerp) between two numbers.
![image](https://github.com/user-attachments/assets/944bfcc8-88f9-4f3f-b96f-d1de17baf0eb)


### .minus
The `.minus` method allows you to subtract a specified amount from a number. If no amount is provided, it defaults to `1`. 
![image](https://github.com/user-attachments/assets/61390f03-12e2-4e69-b79b-d7069d01775e)

```greyscript
newNumber = 44

result = newNumber.minus(2)
print(result) // Outputs: 42
```

### .multiply
The `.multiply` method multiplies the current number the given number (or 2).
![image](https://github.com/user-attachments/assets/db319138-bfbb-4a5d-bc62-d4a0d813b17a)

```greyscript
newNumber = 21
newNumber2 = 2

result = newNumber.multiply(newNumber2)
print(result) // Outputs: 42
```

### .plus
The `.plus` method allows you to add a specified amount to a number. If no amount is provided, it defaults to `1`.
![image](https://github.com/user-attachments/assets/ff7250d7-3a92-48b7-850a-271776e80b64)

```greyscript
newNumber = 40

result = newNumber.plus(2)
print(result) // Outputs: 42
```

### .random_from
The `.random_from` method generates a random number in the range of 1 (or optional parameter) to number.
![image](https://github.com/user-attachments/assets/d55b4868-35e4-4b5d-ac96-9cafd4a6af9a)

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

### .saturate
The `.saturate` Clamps a number to the normalized range [0, 1].
![image](https://github.com/user-attachments/assets/17967389-54fb-4ec7-ba30-e50f986794a5)


---
## listMethods
![Static Badge](https://img.shields.io/badge/method-list-green)


---
### .crop
The `.crop` method Returns a new list stripped of any spacing at the beginning and ending. If any value gets passed that is not a list this method will return null.

![image](https://github.com/user-attachments/assets/c4a534f2-b5e0-47b2-a7b0-ccf5e21df680)


```greyscript
myList = ["", "string", "string", "", ""]

result = myList.trim
print(result) // Outputs: ["string", "string"]
```

### .print
The `.print` method loops through a list and prints each item

![image](https://github.com/user-attachments/assets/8e4ef1ee-1509-4053-bd80-425da124d2df)


```greyscript
myList = ["string", "string"]
myList.print

// Outputs:
string
string
```

---

## mapMethods
### .get_attributes
![image](https://github.com/user-attachments/assets/0b0825bf-dffc-4c31-8573-cefaec595d98)


---
# 📄 Functions Overview
## bool_text
![image](https://github.com/user-attachments/assets/d68784a5-db61-426b-bedf-2f1ad6927b14)
## fetch_whois
![image](https://github.com/user-attachments/assets/f1aa81d0-e525-4106-b790-dadd85095b0c)
## file_new
![image](https://github.com/user-attachments/assets/df3f8704-3322-42b4-828c-befdd7964e57)
## file_append
![image](https://github.com/user-attachments/assets/0bbcfc50-b61b-4377-abd1-f709b299b67f)
## file_delete
## file_exists
## force_params
![image](https://github.com/user-attachments/assets/de8ff88b-07f9-44f0-8c30-c7b6df62d856)
## get_acks
![image](https://github.com/user-attachments/assets/d9dec4bd-a566-496b-b5ab-c44d9be660d4)
## get_random_ip
![image](https://github.com/user-attachments/assets/8148ce40-384a-49be-a060-c104b9238337)
## is_null
![image](https://github.com/user-attachments/assets/64ec05d6-2795-43db-b40c-b055c111c1ce)
## is_type
![image](https://github.com/user-attachments/assets/84912676-131c-4689-b27e-bac18dccdc9f)
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

## network_device_list
![image](https://github.com/user-attachments/assets/2bc52a9d-381f-4314-a95c-c6ed4788f96d)
## program_name
![image](https://github.com/user-attachments/assets/b47339d1-5008-4704-872b-3f5ffb6635e7)
## unsafe_check_list
![image](https://github.com/user-attachments/assets/9ee095f2-82d7-42b1-ad84-11043361ae24)

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






