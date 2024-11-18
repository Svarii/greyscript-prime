The comments in this **GreyScript** are designed to be used in tanden with **VSCode** and the **greybel** extention.  This limited format is compatible with the ingame compiler.

# GreyScript Extentions
### stringMethods.so.src
  ##### [.color](#color)
  ##### [.bold](#bold)
  ##### [.italic](#italic)
  ##### [.underline](#underline)
  ##### [.strike](#strike)
  ##### [.highlight](#highlight)
  ##### [.tiny](#tiny)
  ##### [.remove_last_character](#remove_last_character)
  ##### [.remove_bold](#remove_bold)
  ##### [.remove_italic](#remove_italic)
  ##### [.remove_underline](#remove_underline)
  ##### [.remove_strike](#remove_strike)
  ##### [.remove_highlight](#remove_highlight)
  ##### [.remove_tiny](#remove_tiny)
  ##### [.remove_sup](#remove_sup)

  ###### .color
The `.color` method allows you to apply a color to the given text. Example usage:![image](https://github.com/user-attachments/assets/1df01792-5749-4076-bc71-7a4c6e4e45cd)
```
newString = "Hello"

print(newString.color("blue")) // Outputs: <color=blue>Hello</color>
```

  ###### .bold
The `.bold` method allows you to apply bold to the given text. Example usage:![image](https://github.com/user-attachments/assets/1125b1a9-3884-415c-992b-13b07b22e0e5)
```
newString = "Hello"

print(newString.bold) // Outputs: <b>Hello</b>
```

  ###### .italic
The `.italic` method allows you to apply italic to the given text. Example usage:![image](https://github.com/user-attachments/assets/31e5f53a-1560-4bf0-be13-9b7b5a4c23df)
```
newString = "Hello"

print(newString.italic) // Outputs: <i>Hello</i>
```

  ###### .underline
The `.underline` method allows you to apply underline to the given text. Example usage:![image](https://github.com/user-attachments/assets/801251ed-5cbc-432f-93e8-a298ee50bc4d)
```
newString = "Hello"

print(newString.underline) // Outputs: <u>Hello</u>
```

  ###### .strike
The `.strike` method allows you to apply strikethrough to the given text. Example usage:![image](https://github.com/user-attachments/assets/ae49ab0a-bd0b-4252-85e0-24b698f75db7)
```
newString = "Hello"

print(newString.strike) // Outputs: <s>Hello</s>
```

  ###### .highlight
The `.highlight` method allows you to apply highlight to the given text. Example usage:![image](https://github.com/user-attachments/assets/83f429b3-1296-47a7-ae3f-c00c238631c4)
```
newString = "Hello"

print(newString.highlight) // Outputs: <mark>Hello</mark>
```

  ###### .tiny
The `.tiny` method allows you to apply subscript to the given text. Example usage:![image](https://github.com/user-attachments/assets/bc44925e-739a-46ae-8d67-a1b4ece39a86)
```
newString = "Hello"

print(newString.tiny) // Outputs: <sub>Hello</sub>
```

  ###### .remove_last_character
The `.remove_last_character` method allows you to remove the last character to the given text. Example usage:![image](https://github.com/user-attachments/assets/794a176d-75b3-4abc-88f0-2c89d22ff4b3)
```
newString = "Hello"

print(newString.remove_last_character) // Outputs: Hell
```

  ###### .remove_bold
The `.remove_bold` method allows you to remove bold tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/1aafa4e7-2181-4242-89b9-27c6065008cd)
```
newString = "<b>Hello</b>"

print(newString.remove_bold) // Outputs: Hello
```

  ###### .remove_italic
The `.remove_italic` method allows you to remove italic tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/1335de93-87ec-4af4-a13c-f6c5b9fa2e40)
```
newString = "<i>Hello</i>"

print(newString.remove_italic) // Outputs: Hello
```

  ###### .remove_underline
The `.remove_underline` method allows you to remove underline tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/9edc210f-b8aa-43c0-a88c-5640478cdd75)
```
newString = "<u>Hello</u>"

print(newString.remove_underline) // Outputs: Hello
```

  ###### .remove_strike
The `.remove_strike` method allows you to remove strikethrough tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/af14cfb9-6dde-4d1a-b58c-54a27611a0da)
```
newString = "<s>Hello</s>"

print(newString.remove_strike) // Outputs: Hello
```

  ###### .remove_highlight
The `.remove_strike` method allows you to remove mark tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/70a2557b-7acf-44d3-8af1-1adf2d7f73d6)
```
newString = "<mark>Hello</mark>"

print(newString.remove_mark) // Outputs: Hello
```

  ###### .remove_tiny
The `.remove_tiny` method allows you to remove sub tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/a65a4085-d7d7-4d39-b947-90181b3ae6e8)
```
newString = "<sub>Hello</sub>"

print(newString.remove_tiny) // Outputs: Hello
```

  ###### .remove_sup
The `.remove_tiny` method allows you to remove superscript tags from the given text. Example usage:![image](https://github.com/user-attachments/assets/27c47d75-875c-4d30-bfe2-181dfb2398d9)
```
newString = "<sup>Hello</sup>"

print(newString.remove_sup) // Outputs: Hello
```
