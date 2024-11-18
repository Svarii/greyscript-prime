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
The `.color` method allows you to apply a color to the given text. Example usage:

```
newString = "Hello"

print(newString.color("blue")) // Outputs: <color=blue>Hello</color>
```

  ###### .bold
The `.bold` method allows you to apply bold to the given text. Example usage:
```
newString = "Hello"

print(newString.bold) // Outputs: <b>Hello</b>
```

  ###### .italic
The `.italic` method allows you to apply italic to the given text. Example usage:
```
newString = "Hello"

print(newString.italic) // Outputs: <i>Hello</i>
```

  ###### .underline
The `.underline` method allows you to apply underline to the given text. Example usage:
```
newString = "Hello"

print(newString.underline) // Outputs: <u>Hello</u>
```

  ###### .strike
The `.strike` method allows you to apply strikethrough to the given text. Example usage:
```
newString = "Hello"

print(newString.strike) // Outputs: <s>Hello</s>
```

  ###### .highlight
The `.highlight` method allows you to apply highlight to the given text. Example usage:
```
newString = "Hello"

print(newString.highlight) // Outputs: <mark>Hello</mark>
```

  ###### .tiny
The `.tiny` method allows you to apply subscript to the given text. Example usage:
```
newString = "Hello"

print(newString.tiny) // Outputs: <sub>Hello</sub>
```

  ###### .remove_last_character
The `.remove_last_character` method allows you to remove the last character to the given text. Example usage:
```
newString = "Hello"

print(newString.remove_last_character) // Outputs: Hell
```
