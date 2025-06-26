![GreyScript](https://img.shields.io/badge/GreyScript-Prime-black?labelColor=blue&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVQ4T22T+0tTYRjHv+/u05h4KxsqW1qiiRmZEQZpCUsUJIWMJCL7IUsiCvqlftkP/gcZQr+EeClETCyk6KI/GJWSihdS58LrNnVTNy/b3M45Pe9sy6AHznue57zP+znP7WXYJ5IEGYZxBhKqSSukd3pom2GG1j6yW3ES3xmDGD7Gwoo0ilgIqKetGgnQCIIcQoBBIFelUoSCHnL20fICCjxhOVjfY5OEDgfRRqopGJCziYGjmJ82wOdVYcrhgEoTQM6JZRQVO6BWi8THe4Jc4xD2J+wG+lhLOhvpz4JXfQsZpnKotFFYcfuw43FjsKsFSewVSsqXwOSUDEMjcnGPSUM4S+Zn+qDZ9SvQ1VKK1awKMKUCVZWlcK5vobnlJQS/H9qx13h0YwRao8Bj5+lcYNIwGghQx1Nxuw6gu70E80eK4A/uwmg4DLvdAat1Diq5ErEzfbhfNopDBi+gDxXgGQeME+A4BywvxKO3swDplyqQWVKO1bUNLLs8SIiNw0BnM8bedaDGZEG6fhOIoQN6TPAUfKSqOWB2So+vPaeILIMqKhqQK0JFDOz64dveomqLqDo/i9y0UAMAHfwcQPFAw+2pYSOG+rLDzaEWivhpt0Ok6oalLH8BBdmrYTPAAeNkhVIY/ZKBiYGMiPP/AIU5DpjybHs+DJNM+kFFZKjjPxn8lAPrmCEC4OM2abMhSJGE5fQxJy4XzIOmkUtjpI18+vrf5GHRqodMIUdM4kGoo6OxZLHAvbMDh9sdAmWmbuD6xV8cwNtYvDdII3gqCezOh/YC5rLHIT45GVE6HURBgG16GhI5ebxezLpcSEncRm3ZtCSTSc/phtyNjLLgk7f1NBWafP44lmQ0UiNk/wB4IWdWVqBVbUsPKic+KqOlq+wK1iKXae5tTOy3jnP1So3uZkJqqpbxK7cvAh7FrNPl8wa8TbdLrY9THnrW9uq4T8xmsyzfs5ivS0yoppoUiYKYZrNY5JIkWMmx17mx2erq7v1qxt/r/BtM3mB6tGkzRAAAAABJRU5ErkJggg==&logoColor=white)

GreyScript Prime is an extension for **Grey Script** that adds additional methods for object manipulation. With the combination of `Greybel VS`, `Plant UML`, and `Markdown Preview Enhanced with litvis`, this tool is designed to enhance your coding efficiency in **VSCode**.

[`Example Screenshot`](#example) 

Limited custom formatting of DocBlocks and Plant UML allow for insertion to GreyScript Compiler.
***
# GreyScript Prime ![Static Badge](https://img.shields.io/badge/version-0.1.3_alpha-red)

# 📄 Methods Overview

## stringMethods
![Static Badge](https://img.shields.io/badge/method-string-green)
### TextMeshPro

#### .align
##### *[align-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextAlignment.html)*
The .align method allows you to apply the align tag to the given text.
Accepted values: `left`, `right`, `center`, `justified`, and `flush`

![align](../images/docblocks/string/align.png)



```
newString = "Hello"

print(newString.align) // Outputs: <align="center">Hello</align>
```

#### .alpha
##### *[alpha-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextOpacity.html)*
The `.alpha` method sets the opacity of using a 2 digits hex value

![alpha](../images/docblocks/string/alpha.png)


\#FF: 100% Opague
\#00: 100% Transparent

#### .bold
##### *[bold-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextBoldItalic.html)*
The `.bold` method allows you to apply bold to the given text.

![bold](../images/docblocks/string/bold.png)

```
newString = "Hello"

print(newString.bold) // Outputs: <b>Hello</b>
```
#### .color
##### *[color-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextColor.html)*
##### *[color-names-extended](https://htmlcolorcodes.com/color-names/)*
The `.color` method allows you to apply a color to the given text.

![bold](../images/docblocks/string/bold.png)

```
newString = "Hello"

print(newString.color("blue")) // Outputs: <color=blue>Hello</color>
```

#### .cspace
##### *[cspace-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextCharacterSpacing.html)*
The `.cspace` method allows you to adjust character spacing, either absolute or relative to the original font Asset. You can use pixels or font units.

![bold](../images/docblocks/string/cspace.png)

#### .indent
##### *[indent-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextIndentation.html)*
The `.indent` method controls the horizontal caret position the same way the <pos> tag does, but the effect persists across lines.

![image](../images/docblocks/string/indent.png)


#### .italic
##### *[italic-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextBoldItalic.html)*
The `.italic` method allows you to apply italic to the given text.

![image](../images/docblocks/string/italic.png)

```
newString = "Hello"

print(newString.italic) // Outputs: <i>Hello</i>
```

#### .line-indent
##### *[line-indent-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLineIndentation.html)*
The .line-indent method inserts horizontal space directly after it, and before the start of each new line. It only affects manual line breaks (including line breaks created with the \<br> tag, not word-wrapped lines.

![image](../images/docblocks/string/line-indent.png)


You can specify the indentation in pixels, font units, or percentages.

#### .lowercase
##### *[lowercase-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLetterCase.html)*
The .lowercase method alters the capitalization of your text before rendering. The text in the Text field remains as you entered it.

![image](../images/docblocks/string/lowercase.png)

#### .margin
##### *[margin-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMargins.html)*
You can increase the horizontal margins of the text with the .margin method.
You can specify the margins in pixels, font units, and percentages.
Negative values have no effect.

![image](../images/docblocks/string/margin.png)


#### .mark
##### *[mark-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMark.html)*
The `.mark` method allows you to apply highlight to the given text.

![image](../images/docblocks/string/mark.png)

```
newString = "Hello"

print(newString.mark) // Outputs: <mark>Hello</mark>
```

#### .mspace
##### *[mspace-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMonospace.html)*

![image](../images/docblocks/string/mspace.png)


#### .nobr
##### *[nobreak-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextNoBreak.html)*

![image](../images/docblocks/string/nobr.png)


#### .noparse
##### *[noparse-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextNoParse.html)*

![image](../images/docblocks/string/noparse.png)


#### .page
##### *[page-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextPageBreak.html)*

![image](../images/docblocks/string/page.png)


#### .pos
##### *[pos-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextPage.html)*

![image](../images/docblocks/string/pos.png)

#### .rotate
##### *[rotate-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextRotate.html)*

![image](../images/docblocks/string/rotate.png)

#### .size
##### *[size-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSize.html)*

![image](../images/docblocks/string/size.png)

#### .strike
##### *[strike-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextStrikethroughUnderline.html)*
The `.strike` method allows you to apply strikethrough to the given text.

![image](../images/docblocks/string/strike.png)

```
newString = "Hello"

print(newString.strike) // Outputs: <s>Hello</s>
```

#### .sub
##### *[sub-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSubSuper.html)*
The `.sub` method allows you to apply subscript to the given text. Example usage:

![image](../images/docblocks/string/sub.png)

```
newString = "Hello"

print(newString.tiny) // Outputs: <sub>Hello</sub>
```

#### .sup
##### *[sup-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSubSuper.html)*
The `.sup` method allows you to apply superscript to the given text. Example usage:

![image](../images/docblocks/string/sup.png)

```
newString = "Hello"

print(newString.sup) // Outputs: <sup>Hello</sup>
```

#### .underline
##### *[underline-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextStrikethroughUnderline.html)*
The `.underline` method allows you to apply underline to the given text.

![image](../images/docblocks/string/underline.png)

#### .uppercase
##### *[uppercase-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLetterCase.html)*
The `.uppercase` method allows you to apply uppercase to the given text.

![image](../images/docblocks/string/uppercase.png)

#### .voffset
##### *[voffset-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextVOffset.html)*
The `.voffset` method allows you to apply voffset to the given text.

![image](../images/docblocks/string/voffset.png)


#### .width
##### *[width-tmpdocs](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextWidth.html)*
The `.width` method allows you to apply width to the given text.

![image](../images/docblocks/string/width.png)


```
newString = "Hello"

print(newString.underline) // Outputs: <u>Hello</u>
```
### Map Methods
#### .get_attributes
![image](../images/docblocks/map/get_attributes.png)

### Logic Methods
#### .extract
The `.extract` method allows you to extract the text between the provided values

![image](../images/docblocks/string/extract.png)

```
newString = "<b>0x53C737</b>"

print(newString.extract_between("<b>", "</b>")) // Outputs: 0x53C737

```
#### .format
The `.format` method allows for string interpolation

![image](../images/docblocks/string/format.png)

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

![image](../images/docblocks/string/remove_char_last.png)

```
newString = "Hello"

print(newString.remove_char_last) // Outputs: Hell
```


#### .remove_char_first
The `.remove_char_first` method allows you to remove the last character to the given text. Example usage:

![image](../images/docblocks/string/remove_char_first.png)

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

![image](https://github.com/user-attachments/assets/51a0f05d-e9c0-4786-a53c-c32ccf4d722c)

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
![image](https://github.com/user-attachments/assets/0168765b-4220-4176-88d1-257209da67b8)

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
![image](..\images\docblocks\function\force_params.png)
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

# 📄 Construct Overview
## id_self

![image](../images/docblocks/construct/id_self.png)






