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

  ###### .color
The `.color` method allows you to apply a color to the given text. Example usage:![image](https://github.com/user-attachments/assets/48643a76-8cd0-4aca-a159-7928e3ea3b13)
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

