![GreyScript](https://img.shields.io/badge/GreyScript-Prime-black?labelColor=blue&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVQ4T22T+0tTYRjHv+/u05h4KxsqW1qiiRmZEQZpCUsUJIWMJCL7IUsiCvqlftkP/gcZQr+EeClETCyk6KI/GJWSihdS58LrNnVTNy/b3M45Pe9sy6AHznue57zP+znP7WXYJ5IEGYZxBhKqSSukd3pom2GG1j6yW3ES3xmDGD7Gwoo0ilgIqKetGgnQCIIcQoBBIFelUoSCHnL20fICCjxhOVjfY5OEDgfRRqopGJCziYGjmJ82wOdVYcrhgEoTQM6JZRQVO6BWi8THe4Jc4xD2J+wG+lhLOhvpz4JXfQsZpnKotFFYcfuw43FjsKsFSewVSsqXwOSUDEMjcnGPSUM4S+Zn+qDZ9SvQ1VKK1awKMKUCVZWlcK5vobnlJQS/H9qx13h0YwRao8Bj5+lcYNIwGghQx1Nxuw6gu70E80eK4A/uwmg4DLvdAat1Diq5ErEzfbhfNopDBi+gDxXgGQeME+A4BywvxKO3swDplyqQWVKO1bUNLLs8SIiNw0BnM8bedaDGZEG6fhOIoQN6TPAUfKSqOWB2So+vPaeILIMqKhqQK0JFDOz64dveomqLqDo/i9y0UAMAHfwcQPFAw+2pYSOG+rLDzaEWivhpt0Ok6oalLH8BBdmrYTPAAeNkhVIY/ZKBiYGMiPP/AIU5DpjybHs+DJNM+kFFZKjjPxn8lAPrmCEC4OM2abMhSJGE5fQxJy4XzIOmkUtjpI18+vrf5GHRqodMIUdM4kGoo6OxZLHAvbMDh9sdAmWmbuD6xV8cwNtYvDdII3gqCezOh/YC5rLHIT45GVE6HURBgG16GhI5ebxezLpcSEncRm3ZtCSTSc/phtyNjLLgk7f1NBWafP44lmQ0UiNk/wB4IWdWVqBVbUsPKic+KqOlq+wK1iKXae5tTOy3jnP1So3uZkJqqpbxK7cvAh7FrNPl8wa8TbdLrY9THnrW9uq4T8xmsyzfs5ivS0yoppoUiYKYZrNY5JIkWMmx17mx2erq7v1qxt/r/BtM3mB6tGkzRAAAAABJRU5ErkJggg==&logoColor=white)

GreyScript Prime is an extension for **Grey Script** that adds additional methods for object manipulation. With the combination of `Greybel VS`, `Plant UML`, and `Markdown Preview Enhanced with litvis`, this tool is designed to enhance your coding efficiency in **VSCode**.

> # Table of Contents
> 
> - 📖 [Introduction](#introduction)
> - 🚀 [Getting Started](#getting-started)
> 
> <details>
> <summary>⚙️ File Management Functions</summary>
> 
> - [file_append](#file_append)
> - [file_delete](#file_delete)
> - [file_exists](#file_exists)
> - [file_new](#file_new)
> 
> </details>
> 
> - 🏷️ [Other Functions](#other-functions)
> - 🧰 [Utilities](#utilities)
> - ❓ [FAQ](#faq)



# stringMethods
![Static Badge](https://img.shields.io/badge/method-string-green)

## align
### 📝 Description
Modifies a text string to wrap it in the `<align>` tag.
Used to visually align text using supported values for alignment. Useful for rendering formatted text in UI systems such as Text Mesh Pro.
---
### 🧮 Parameters

| Name        | Type     | Description                                                                 |
|-------------|----------|-----------------------------------------------------------------------------|
| `alignment` | string   | Accepted values: `left`, `center`, `right`, `justified`, `flush`            |
| `closeTag`  | boolean  | Whether to close the tag with a matching `</align>`; accepted: `true/false` |
---
### 🧷 Default Values
| Parameter   | Default Value |
|-------------|----------------|
| `alignment` | `"center"`     |
| `closeTag`  | `true`         |
---
### 🔁 Return
`string` — the string value embedded in (or preceded by) the `<align>` tag.
---
### ✍️ Author
**Svarii**
---
### 📦 Version
`0.0.1`
---
### 💡 Example
```greyscript
newString = "Hello"

result = newString.align("center")
print result 
// Output: <align="center">Hello</align>

result = newString.align("center", false)
print result 
// Output: <align="center">Hello
```
---




#### 🔗 Links
[Text Mesh Pro: Rich Text Alignment](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextAlignment.html)
---
#### 📝 Footnotes

- Parameters are **not validated**.
  - `alignment` will not reject invalid values → **Return**: `string<withParseIssues>`
  - `closeTag` will not reject invalid values → **Return**: `null`
- If all parameters are invalid → **Return**: `null`
---

## alpha
### 📝 Description
Modifies a text string and prepends it with the `<alpha>` tag.  
Used to apply opacity using HEX-based transparency levels. Useful for controlling visual emphasis or layering in Text Mesh Pro rendering.
---
### 🧮 Parameters

| Name         | Type   | Description                                                      |
|--------------|--------|------------------------------------------------------------------|
| `hexOpacity` | string | Accepted values: 2-digit HEX value preceded by `#` (e.g., `#4C`) |
---
### 🧷 Default Values
| Parameter    | Default Value |
|--------------|----------------|
| `hexOpacity` | `#FF`          |
---
### 🔁 Return
`string` — the string value preceded by the `<alpha>` tag.
---
### ✍️ Author
**Svarii**
---
### 📦 Version
`0.0.1`
---
### 💡 Example
```greyscript
newString = "Hello"

result = newString.alpha("#4C")
print(result)
// Output: <alpha=#4C>Hello

result = newString.alpha
print(result)
// Output: <alpha=#FF>Hello
```
#### 🔗 Links
[Text Mesh Pro: Rich Text Opacity](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextOpacity.html)

#### 📝 Footnotes

- Parameters are **not validated**.
  - `hexOpacity` will not reject invalid values → **Return**: `string<withParseIssues>`
- This tag does **not** apply a closing tag; it affects **all text that follows**
- If no parameter is passed, it applies default opacity `#FF` (fully opaque)

---

## bold
### 📝 Description
Modifies a text string and wraps it within the `<b>` tag.  
Used to apply bold styling in Text Mesh Pro.
---
### 🧮 Parameters
- None
---
### 🔁 Return
`string` — the string value embedded in the `<b>` tag.
---
### ✍️ Author
**Svarii**
---
### 📦 Version
`0.0.1`
---
### 💡 Example
```greyscript
newString = "Hello"

result = newString.bold
print(result)
// Output: <b>Hello</b>
```
#### 🔗 Links
[Text Mesh Pro: Rich Text Bold](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextBoldItalic.html)

---

## color

### 📝 Description
Modifies a text string by wrapping it within the `<color>` tag.  
Used to apply a specified color to the string, supporting both hex formats and standard HTML color names.

---

### 🧮 Parameters

| Name         | Type   | Description                                                                 |
|--------------|--------|-----------------------------------------------------------------------------|
| `colorValue` | string | The desired color in hex format: `#RRGGBB`, `#RRGGBBAA`, or standard HTML color name (e.g., `"blue"`, `"Aquamarine"`) |

---

### 🔁 Return
`string` — the string value embedded in the `<color>` tag.

---

<details>
<summary><strong>About</strong></summary>

### ✍️ Author
**Svarii**

### 📦 Version
`0.0.1`
</details>
---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.color("blue")
print result
// Output: <color=blue>Hello</color>

result = newString.color("#FFFFFF")
print result
// Output: <color=#FFFFFF>Hello</color>

result = newString.color("Aquamarine")
print result
// Output: <color=#7FFFD4>Hello</color>
```



#### 🔗 Links
- [Text Mesh Pro: Rich Color Text](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextColor.html)  
- [HTML Color Names: Supported Name List](https://htmlcolorcodes.com/color-names/)

#### 🦶 Footnotes
- Color names are case sensitive
- Blue and blue, green and Green, are different colors

---


## cspace

### 📝 Description
Modifies a text string by wrapping it within the `<cspace>` tag.  
Used to control character spacing in text renderers such as Text Mesh Pro.

---

### 🧮 Parameters

| Name         | Type    | Description                                                                          |
|--------------|---------|--------------------------------------------------------------------------------------|
| `charSpacing`| string  | The amount of spacing to apply, e.g. `"1em"` or `"5px"`                             |
| `closeTag`   | boolean | Whether to close the tag with `</cspace>` — accepted values: `true` or `false`      |

---


### 🔁 Return
`string` — The string value wrapped within the `<cspace>` tag.

---

### ✍️ Author
**Svarii**

---

### 📦 Version
`0.0.1`

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.cspace
print result
// Output: <cspace=1em>Hello</cspace>
```

#### 🔗 Links
- [Text Mesh Pro: Rich Text Character Spacing](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextCharacterSpacing.html)

#### 🦶 Footnotes
- Accepts pixel or font unit values (e.g., `px`, `em`)
- Tag will not be closed if `closeTag = false`

---



## indent

### 📝 Description
Modifies a text string to wrap it in the `<indent>` tag for use with supported rich text renderers (e.g., Text Mesh Pro).

---

### 🧮 Parameters

| Name           | Type     | Description                                                                 |
|----------------|----------|-----------------------------------------------------------------------------|
| `indentPercent` | string   | Optional. Accepted input: `em`, `px`, or `%` units.                         |
| `closeTag`     | boolean  | Optional. Whether to append a closing `</indent>` tag. Accepted: `true` or `false`. |

---

#### ⚙️ Defaults

| Parameter       | Default |
|-----------------|---------|
| `indentPercent` | `15%`   |
| `closeTag`      | `true`  |

---

### 🔁 Return
`string` — the string value embedded in (or appended to) the `<indent>` tag.

---

### ✍️ Author
**Svarii**

---

### 📦 Version
`0.0.1`

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.indent
print(result)
// Outputs: <indent=15%>Hello</indent>

result = newString.indent("3em")
print(result)
// Outputs: <indent=3em>Hello</indent>

result = newString.indent("25px", false)
print(result)
// Outputs: <indent=25px>Hello
```

---

### 🔗 Links
- [Text Mesh Pro: Rich Text Indentation](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextIndentation.html)

---

### 🦶 Footnotes
- Parameters are not checked for validity.
- `indentPercent` will not reject invalid values → **Return:** `string<withParseIssues>`
- `closeTag` will not reject invalid values → **Return:** `null`
- If all parameters are invalid → **Return:** `null`

---

## italic

### 📝 Description
Modifies a text string by wrapping it within the `<i>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string value wrapped within the `<i>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------|
### 📦 Version
| `0.0.1` |
|--------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.italic
print(result)
// Outputs: <i>Hello</i>
```
#### 🔗 Links
- [Text Mesh Pro: Rich Text Indentation](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextIndentation.html)
---


## line-indent

### 📝 Description
Modifies a text string to wrap it in the `<line-indent>` tag.

---

### 🧮 Parameters

| Name           | Type     | Description                                           |
|----------------|----------|-----------------------------------------------------|
| `indentPercent` | string   | Optional. Accepted input: `em`, `px`, or `%`.       |
| `closeTag`     | boolean  | Optional. Whether to append a closing `</line-indent>` tag. Accepted: `true` or `false`. |

---

#### ⚙️ Defaults

| Parameter       | Default |
|-----------------|---------|
| `indentPercent` | `15%`   |
| `closeTag`      | `true`  |

---

### 🔁 Return
`string` — The string value embedded in (or appended to) the `<line-indent>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.line-indent
print(result)
// Outputs: <line-indent=15%>Hello</line-indent>

result = newString.line-indent("3em")
print(result)
// Outputs: <line-indent=3em>Hello</line-indent>

result = newString.line-indent("25px", false)
print(result)
// Outputs: <line-indent=25px>Hello
```

## lowercase

### 📝 Description
Modifies a text string by wrapping it within the `<lowercase>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string value wrapped within the `<lowercase>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.lowercase
print(result)
// Outputs: <lowercase>Hello</lowercase>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rich Text Lowercase](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLetterCase.html)

---


## margin

### 📝 Description
Modifies a text string by wrapping it within the `<margin>` tag.

---

### 🧮 Parameters

| Name     | Type   | Description                                      |
|----------|--------|--------------------------------------------------|
| `margin` | string | Optional. Accepted values: `em`, `px`, or `%`.   |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| `margin`  | `5em`   |

---

### 🔁 Return
`string` — The string value wrapped within the `<margin>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.margin
print(result)
// Outputs: <margin=5em>Hello</margin>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rich Text Margin](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMargins.html)


## mark
### 📝 Description
Modifies a text string by wrapping it within the `<mark>` tag.

---

### 🧮 Parameters

| Name    | Type   | Description                                 |
|---------|--------|---------------------------------------------|
| `color` | string | Optional. HEXA color value (`#RRGGBBAA`).   |

---

#### ⚙️ Defaults

| Parameter | Default     |
|-----------|-------------|
| `color`   | `#FFFF00AA` |

---

### 🔁 Return
`string` — The string value wrapped within the `<mark>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.mark
print(result)
// Outputs: <mark="#FFFF00AA">Hello</mark>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rich Text mark](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMark.html)


## mspace

### 📝 Description
Modifies a text string by wrapping it within the `<mspace>` tag.

---

### 🧮 Parameters

| Name        | Type   | Description                                     |
|-------------|--------|-------------------------------------------------|
| `monospace` | string | Optional. Accepted values: `em`, `px`, or `%`. |

---

#### ⚙️ Defaults

| Parameter   | Default   |
|-------------|-----------|
| `monospace` | `2.75em`  |

---

### 🔁 Return
`string` — The string value wrapped within the `<mspace>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.mspace
print(result)
// Outputs: <mspace="2.75em">Hello</mspace>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rich Text Monospacing](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextMonospace.html)



## nobr

### 📝 Description
Modifies a text string by wrapping it within the `<nobr>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string value wrapped within the `<nobr>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.nobr
print(result)
// Outputs: <nobr>Hello</nobr>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rich Text No Break](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextNoBreak.html)

## noparse

### 📝 Description
Modifies a text string by wrapping it within the `<noparse>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string value wrapped within the `<noparse>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.noparse
print(result)
// Outputs: <noparse>Hello</noparse>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rich Text Noparse](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextNoParse.html)


## page

### 📝 Description
Modifies a text string by appending the `<page>` tag to the end.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string value with the `<page>` tag appended to the end.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.page
print(result)
// Output: Hello<page>
```
---

#### 🔗 Links
- [Text Mesh Pro: Page Break](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextPageBreak.html)

## pos

### 📝 Description
Modifies a text string by prepending it with the `<pos>` tag.

---

### 🧮 Parameters

| Name      | Type   | Description            |
|-----------|--------|------------------------|
| `position` | string | Optional. Default: `"50%"` |

---

### ⚙️ Defaults

| Parameter  | Default |
|------------|---------|
| `position` | `"50%"` |

---

### 🔁 Return
`string` — The string prepended with the `<pos>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.pos
print(result)
// Output: <pos=50%>Hello
```
---

## rotate

### 📝 Description
Modifies a text string by wrapping it within the `<rotate>` tag.

---

### 🧮 Parameters

| Name             | Type   | Description            |
|------------------|--------|------------------------|
| `degreesRotation` | string | Optional. Default: `"45"` |

---

### ⚙️ Defaults

| Parameter         | Default |
|-------------------|---------|
| `degreesRotation` | `"45"`  |

---

### 🔁 Return
`string` — The string rotated with the `<rotate>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.rotate
print(result)
// Output: <rotate="45">Hello </rotate>
```
---

#### 🔗 Links
- [Text Mesh Pro: Rotate](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextRotate.html)

## size

### 📝 Description
Modifies a text string by wrapping it within the `<size>` tag.

---

### 🧮 Parameters

| Name      | Type   | Description          |
|-----------|--------|----------------------|
| `textSize`| string | Optional. Default: `"5em"` |

---

### ⚙️ Defaults

| Parameter  | Default |
|------------|---------|
| `textSize` | `"5em"` |

---

### 🔁 Return
`string` — The string wrapped within the `<size>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.size
print(result)
// Output: <size="5em">Hello </size>
```
---

#### 🔗 Links
- [Text Mesh Pro: Font Size](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSize.html)

## strike

### 📝 Description
Modifies a text string by wrapping it within the `<s>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string wrapped within the `<s>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.strike
print(result)
// Output: <s>Hello</s>
```

---

### 🔗 Links
- [Text Mesh Pro: Strikethrough](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextStrikethroughUnderline.html)

## sub

### 📝 Description
Modifies a text string by wrapping it within the `<sub>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string wrapped within the `<sub>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.sub
print(result)
// Output: <sub>Hello</sub>
```

---

### 🔗 Links
- [Text Mesh Pro: Subscript](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSubSuper.html)

## sup

### 📝 Description
Modifies a text string by wrapping it within the `<sup>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string wrapped within the `<sup>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.sup
print(result)
// Output: <sup>Hello</sup>
```

---

### 🔗 Links
- [Text Mesh Pro: Superscript](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSubSuper.html)

## underline

### 📝 Description
Modifies a text string by wrapping it within the `<u>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string wrapped within the `<u>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.underline
print(result)
// Output: <u>Hello</u>
```

---

### 🔗 Links
- [Text Mesh Pro: Underline](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextStrikethroughUnderline.html)

## uppercase

### 📝 Description
Modifies a text string by wrapping it within the `<uppercase>` tag.

---

### 🧮 Parameters

| `none` |
|--------|

---

### 🔁 Return
`string` — The string wrapped within the `<uppercase>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
newString = "Hello"

result = newString.uppercase
print(result)
// Output: <uppercase>Hello</uppercase>
```

---

### 🔗 Links
- [Text Mesh Pro: Uppercase](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextLetterCase.html)

## voffset

### 📝 Description  
Modifies a text string by wrapping it within the `<voffset>` tag.

---

### 🧮 Parameters

| Name           | Type     | Description                          |
|----------------|----------|------------------------------------|
| `verticalOffset` | string   | Optional. Accepted input: `em`, `px`, or `%`. |


#### ⚙️ Defaults

| Parameter       | Default |
|-----------------|---------|
| `verticalOffset` | `1em`   |


### 🔁 Return  
`string` — The string value wrapped within the `<voffset>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example  
```greyscript
newString = "Hello"

result = newString.voffset
print(result)
// Outputs: <voffset=1em>Hello</voffset>
```
---

## width

### 📝 Description  
Modifies a text string by wrapping it within the `<width>` tag.

---

### 🧮 Parameters

| Name    | Type   | Description                         |
|---------|--------|-----------------------------------|
| `width` | string | Optional. Accepted input: `em`, `px`, or `%`. |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| `width`   | `"50%"` |

---

### 🔁 Return  
`string` — The string value wrapped within the `<width>` tag.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example  
```greyscript
newString = "Hello"

result = newString.width
print(result)
// Outputs: <width=50%>Hello</width>
```


#### 🔗 Links
- [Text Mesh Pro: Horizontal Position](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextPos.html)


## Logic Methods
### .extract
The `.extract` method allows you to extract the text between the provided values

![image](../images/docblocks/string/extract.png)

```
newString = "<b>0x53C737</b>"

print(newString.extract_between("<b>", "</b>")) // Outputs: 0x53C737

```
### .format
The `.format` method allows for string interpolation

![image](../images/docblocks/string/format.png)

```greyscript
// Modification of implimentation by dynobytes.
variableString = "The quick brown %s jumps over the lazy %s"
animalsList = ["fox", "dog"]      
sentence = variableString.format(animalsList)
print(sentence); // Outputs: The quick brown fox jumps over the lazy dog
```
## Removal Methods
### .remove_char_last 
The `.remove_char_last` method allows you to remove the last character to the given text. Example usage:

![image](../images/docblocks/string/remove_char_last.png)

```
newString = "Hello"

print(newString.remove_char_last) // Outputs: Hell
```


### .remove_char_first
The `.remove_char_first` method allows you to remove the last character to the given text. Example usage:

![image](../images/docblocks/string/remove_char_first.png)

```
newString = "Hello"

print(newString.remove_char_first) // Outputs: ello
```

### .remove_bold
The `.remove_bold` method allows you to remove bold tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/b9163072-533f-4614-b418-630d2d3c6749)

```
newString = "<b>Hello</b>"

print(newString.remove_bold) // Outputs: Hello
```

### .remove_italic
The `.remove_italic` method allows you to remove italic tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/aeaada4d-8aaf-44ed-8935-e49de4d6f864)

```
newString = "<i>Hello</i>"

print(newString.remove_italic) // Outputs: Hello
```

### .remove_underline
The `.remove_underline` method allows you to remove underline tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/768e7493-ead8-4a7f-b156-af9f8761815a)

```
newString = "<u>Hello</u>"

print(newString.remove_underline) // Outputs: Hello
```

### .remove_strike
The `.remove_strike` method allows you to remove strikethrough tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/1aeed45f-4ab5-4343-8dba-949faec6c0af)

```
newString = "<s>Hello</s>"

print(newString.remove_strike) // Outputs: Hello
```

### .remove_mark
The `.remove_mark` method allows you to remove mark tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/e8c5bdbe-e881-4ad2-996b-ef8eff80fcbe)

```
newString = "<mark>Hello</mark>"

print(newString.remove_mark) // Outputs: Hello
```

### .remove_sub
The `.remove_sub` method allows you to remove sub tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/db99e8ca-62dc-494b-867a-8ab204fdf366)

```
newString = "<sub>Hello</sub>"

print(newString.remove_sub) // Outputs: Hello
```

### .remove_sup
The `.remove_sup` method allows you to remove superscript tags from the given text. Example usage:

![image](https://github.com/user-attachments/assets/14996b4a-aa3c-4b02-a06c-2303cde34328)

```
newString = "<sup>Hello</sup>"

print(newString.remove_sup) // Outputs: Hello

```

# numberMethods
![Static Badge](https://img.shields.io/badge/method-number-green)

## .clamp
The `.clamp` method allows a number to be clamped within a specified range
![image](https://github.com/user-attachments/assets/53351c78-1259-4796-8a14-466e39fb5768)



## .diff
The `.diff` method calculates the absolute difference between the current number and another number.
![image](https://github.com/user-attachments/assets/f78cf4ce-805a-4d04-9e20-0f6b6a6bf8b6)

```greyscript
newNumber = 44
newNumber2 = 2

result = newNumber.diff(newNumber2)
print(result) // Outputs: 42
```


## .divide
The `.divide` method divides the current number by another number.  Zero division will result in null
![image](https://github.com/user-attachments/assets/8fe1a4f2-f56c-4b11-87c6-26e4bb3fd694)

```greyscript
newNumber = 84
newNumber2 = 2

result = newNumber.divide(newNumber2)
print(result) // Outputs: 42
```

## .is_more
The `.is_more` method checks if the current number is greater than a provided number. Returns `true` if greater, `false` otherwise.
![image](https://github.com/user-attachments/assets/6f61825e-f52c-4400-912c-c24a2b4f90a8)

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.greater_than(myNumber2)
print(result) // Outputs: 0 (false)
```

## .is_less
The `.is_less` method checks if the current number is less than a provided number. Returns `true` if lesser, `false` otherwise.
![image](https://github.com/user-attachments/assets/b6147f1f-2b63-4a3e-947e-b11f99b9feec)

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

## .lerp
The `.lerp` method computes the linear interpolation (lerp) between two numbers.
![image](https://github.com/user-attachments/assets/944bfcc8-88f9-4f3f-b96f-d1de17baf0eb)


## .minus
The `.minus` method allows you to subtract a specified amount from a number. If no amount is provided, it defaults to `1`. 
![image](https://github.com/user-attachments/assets/61390f03-12e2-4e69-b79b-d7069d01775e)

```greyscript
newNumber = 44

result = newNumber.minus(2)
print(result) // Outputs: 42
```

## .multiply
The `.multiply` method multiplies the current number the given number (or 2).
![image](https://github.com/user-attachments/assets/db319138-bfbb-4a5d-bc62-d4a0d813b17a)

```greyscript
newNumber = 21
newNumber2 = 2

result = newNumber.multiply(newNumber2)
print(result) // Outputs: 42
```

## .plus
The `.plus` method allows you to add a specified amount to a number. If no amount is provided, it defaults to `1`.
![image](https://github.com/user-attachments/assets/ff7250d7-3a92-48b7-850a-271776e80b64)

```greyscript
newNumber = 40

result = newNumber.plus(2)
print(result) // Outputs: 42
```

## .random_from
The `.random_from` method generates a random number in the range of 1 (or optional parameter) to number.
![image](https://github.com/user-attachments/assets/d55b4868-35e4-4b5d-ac96-9cafd4a6af9a)

```greyscript
myNumber = 42
myNumber2 = 100

result = myNumber.lesser_than(myNumber2)
print(result) // Outputs: 1 (true)
```

## .saturate
The `.saturate` Clamps a number to the normalized range [0, 1].
![image](https://github.com/user-attachments/assets/17967389-54fb-4ec7-ba30-e50f986794a5)


---
## listMethods
![Static Badge](https://img.shields.io/badge/method-list-green)


---
## .crop
The `.crop` method Returns a new list stripped of any spacing at the beginning and ending. If any value gets passed that is not a list this method will return null.

![image](https://github.com/user-attachments/assets/c4a534f2-b5e0-47b2-a7b0-ccf5e21df680)

```greyscript
myList = ["", "string", "string", "", ""]

result = myList.trim
print(result) // Outputs: ["string", "string"]
```

## .print
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

# mapMethods
## .get_attributes
![image](https://github.com/user-attachments/assets/0168765b-4220-4176-88d1-257209da67b8)

---
# 📄 Functions Overview
## bool_text

### 📝 Description  
Converts a boolean-like value (`true`, `false`, `1`, `0`) into a string: `"true"` or `"false"`.

---

### 🧮 Parameters

| Name      | Type   | Description       |
|-----------|--------|-------------------|
| `boolVal` | flag   | A boolean or number (0 or 1) to be converted to a string. |

---

#### ⚙️ Defaults

_None_

---

### 🔁 Return  
`string` — Returns `"true"` or `"false"` if the value is valid. Returns `null` for invalid input.

---

### 📎 Footnotes

- Parameters are not checked for validity.
- Invalid input (including strings or objects) returns `null`.
- Negative numbers return `"false"`.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
print(bool_text("true"))
// Output: null

print(bool_text(true))
// Output: "true"

print(bool_text(1))
// Output: "true"

print(bool_text(0))
// Output: "false"

print(bool_text(-1))
// Output: "false"

print(bool_text(false))
// Output: "false"

print(bool_text(object))
// Output: null
```

---

## extractIP

### 📝 Description  
Scans a string for a valid IPv4 address and returns the first match.  
Returns `null` if no valid IP address is found.

---

### 🧮 Parameters

| Name          | Type   | Description                         |
|---------------|--------|-------------------------------------|
| `inputString` | string | The text string to search for an IP address. |

---

#### ⚙️ Defaults

| Parameter     | Default |
|---------------|---------|
| _None_        |         |

---

### 🔁 Return  
`string | null` — The first matching IPv4 address, or `null` if none is found.

---

### 🧠 Notes
- Uses a regular expression to identify IPv4 patterns.
- Only the **first** valid match is returned.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
print(extractIP("My IP is 192.168.1.5"))
// Output: 192.168.1.5

print(extractIP("No IP here"))
// Output: null

print(extractIP("IPs: 10.0.0.1, 172.16.0.1"))
// Output: 10.0.0.1
```
---


## file_append

### 📝 Description  
Appends data to an existing file, or creates a new file if the file does not exist.

---

### 🧮 Parameters

| Name        | Type   | Description                    |
|-------------|--------|--------------------------------|
| `savePath`  | string | Directory path to the file.    |
| `saveFile`  | string | Name of the file to append to. |
| `newText`   | string | Text to append into the file.  |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| _None_    |         |

---

### 🔁 Return  
`void` — No return value.

---

### 🧠 Notes
- Parameters are not validated.
- If the file does not exist, it will be created.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
dataString = "0xFC45B2XR9:missspeling"

file_append("/DatabaseDir", "addressData.db", dataString)
// Appends dataString to addressData.db in /DatabaseDir
```
---

## file_delete

### 📝 Description  
Delete a specified file if it has write permissions.

---

### 🧮 Parameters

| Name        | Type   | Description                        |
|-------------|--------|------------------------------------|
| `filePath`  | string | Path to the directory containing the file. |
| `fileName`  | string | Name of the file to delete.        |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| _None_    |         |

---

### 🔁 Return  
`boolean` — `true` if the file has write permission; `false` if not.  
🛈 *This does not verify that the file exists or was successfully deleted.*

---

### 🧠 Notes
- Only checks for write permission.
- Does not confirm file existence or successful deletion.
- Parameters are not validated.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
file_delete("/DatabaseDir", "addressData.db")
// Deletes the file if write permission exists
```

---

## file_exists

### 📝 Description  
Check to see if the specified file exists.

---

### 🧮 Parameters

| Name        | Type   | Description                        |
|-------------|--------|------------------------------------|
| `filePath`  | string | Path to the directory to search.   |
| `fileName`  | string | Name of the file to check for.     |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| _None_    |         |

---

### 🔁 Return  
`boolean` — `true` if the file is found, otherwise `false`.

---

### 🧠 Notes
- Parameters are not validated.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
file_exists("/DatabaseDir", "addressData.db")
// return true if found, otherwise false
```

---

## file_new

### 📝 Description  
Create a new file at the specified path if it does not already exist.

---

### 🧮 Parameters

| Name        | Type   | Description                     |
|-------------|--------|---------------------------------|
| `filePath`  | string | Path to the directory.          |
| `fileName`  | string | Name of the new file to create. |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| _None_    |         |

---

### 🔁 Return  
`void` — This function does not return any value.

---

### 🧠 Notes
- File permissions are **not checked**.  
- Parameters are **not validated**.

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example
```greyscript
file_new("/DatabaseDir", "addressData.db")
// Creates a file at the specified location
```
---

## find_exploitable_addresses

### 📝 Description  
Scan a library for vulnerable addresses.

---

### 🧮 Parameters

| Name               | Type                 | Description                                |
|--------------------|----------------------|--------------------------------------------|
| `libLocation`      | string               | Remote IP address or local absolute file location. |
| `metaxploitObject` | map<string, function> | Metaxploit library object.                  |
| `remoteTarget`     | flag (optional)      | Optional flag indicating if the target is remote. Default: `false`. |
| `targetPort`       | number (optional)    | Optional target port number. Default: `0`. |


#### ⚙️ Defaults

| Parameter      | Default |
|----------------|---------|
| `remoteTarget` | `false` |
| `targetPort`   | `0`     |

---

### 🔁 Return  
`list<string>` — List of vulnerable addresses found.

---

### 📃 Author & Version

<details>
<summary>Show Author & Version</summary>

| Author  | Version |
|---------|---------|
| Svarii  | 0.0.1   |

</details>

---

### 💡 Example
```greyscript
libLocation = params[0]
metax = include_lib("/lib/metaxploit.so")

print find_exploitable_addresses(libLocation, metax)
```

---

## require_params

### 📝 Description  
Specifies usage information and the number of required parameters.

---

### 🧮 Parameters

| Name           | Type   | Description                       |
|----------------|--------|---------------------------------|
| `usage`        | string | The name or usage pattern of the library to load. |
| `minReqParams` | number | The minimum number of required parameters.          |

---

#### ⚙️ Defaults

| Parameter | Default |
|-----------|---------|
| _None_    |         |

---

### 🔁 Return  
`void` — No return value.

---

### ✍️ Author & 📦 Version  
<details><summary>Click to expand</summary>

| **`Svarii`** | `0.0.1` |
|--------------|---------|

</details>

---

### 💡 Example
```greyscript
force_params("myApp [ipAddress] [port#]", 2)
```

---

## force_params

### 📝 Description  
Specifies usage information and checks if the required number of parameters have been passed. If not, the script exits and displays the usage message.

---

### 🧮 Parameters

| Name            | Type   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| `usage`         | string | The usage string to display if validation fails. |
| `minReqParams`  | number | Minimum number of required parameters.           |

---

### ⚙️ Default Values

| Parameter       | Default |
|-----------------|---------|
| *(None)*        | *(None)*|

---

### 🔁 Return  
`void` — This function does not return any value.  
🛈 Terminates the script early if the parameters do not meet requirements.

---

<details>
<summary>📃 Author & Version</summary>

#### ✍️ Author  
**Svarii**

#### 📦 Version  
`0.0.1`

</details>

---

### 💡 Example
```greyscript
force_params("myApp [ipAddress] [port#]", 2)
```
---


## get_acks

### 📝 Description  
Calculates the recommended number of ACKs to collect based on signal strength.

---

### 🧮 Parameters

| Name            | Type   | Description                        |
|-----------------|--------|----------------------------------|
| `signalStrength` | number | Signal strength value (default is 1). |

---

#### ⚙️ Defaults

| Parameter       | Default |
|-----------------|---------|
| `signalStrength` | `1`     |

---

### 🔁 Return  
`number` — Recommended number of ACKs to collect.

---

### ✍️ Author & 📦 Version  
<details><summary>Click to expand</summary>

| **`Svarii`** | `0.0.1` |
|--------------|---------|

</details>

---

### 💡 Example
```greyscript
reqACK = get_acks(6) // Signal Strength 6%
print(reqACK) // Output: 14286
```

---

## get_inbox

### 📝 Description  
Logs into the mail account and fetches inbox messages.

---

### 🧮 Parameters

| Name         | Type   | Description                                                                 |
|--------------|--------|-----------------------------------------------------------------------------|
| `mailPass`   | string | **Required.** Password for the email account. If `null`, the function exits. |
| `mailAddress`| string | *(Optional)* Email address to log in with. Defaults to `user_mail_address`. |

---

### ⚙️ Default Values

| Parameter     | Default             |
|---------------|---------------------|
| `mailAddress` | `user_mail_address` |
| `mailPass`    | `null`              |

---

### 🔁 Return  
`object` — Inbox messages fetched from the mail server.  
🛈 Returns `null` if `mailPass` is not provided.

---

<details>
<summary>📃 Author & Version</summary>

#### ✍️ Author  
**Svarii**

#### 📦 Version  
`0.0.1`

</details>

---

### 💡 Example
```greyscript
inbox = get_inbox("mypassword", "user@example.com")
print(inbox)
```
---


---

## get_random_ip

### 📝 Description  
Generate a single random IP address.

---

### 🧮 Parameters  
_None_

---

### 🔁 Return  
`string` — Randomly generated IP Address.

---

<details>
<summary>📃 Author & Version</summary>

| **Author** | **Version** |
|------------|-------------|
| `Svarii`   | `0.0.1`     |

</details>

---

### 💡 Example
```greyscript
randomIP = get_random_ip
print(randomIP) // Output: ###.###.###.###
```

---

## is_null

### 📝 Description  
Return `true` if item is null, `false` otherwise.

---

### 🧮 Parameters

| Name        | Type | Description           |
|-------------|------|-----------------------|
| `testObject`| any  | The item to check     |

---

#### ⚙️ Default Parameters  
_None_

---

### 🔁 Return  
`boolean` — `true` if null, otherwise `false`.

---

<details>
<summary>📃 Author & Version</summary>

| **Author** | **Version** |
|------------|-------------|
| `Svarii`   | `0.0.1`     |

</details>

---

### 💡 Example
```greyscript
nullItem = null
notNull = "A string"

print is_null(nullItem)  // Output: 1
print is_null(notNull)   // Output: 0
```

---

## is_typeof

### 📝 Description  
Check if the object passed is of the specified type and return a boolean answer.

---

### 🧮 Parameters

| Name        | Type   | Description            |
|-------------|--------|------------------------|
| `testObject`| any    | The object to test     |
| `objectType`| string | The expected identifier|

---

#### ⚙️ Default Parameters  
_None_

---

### 🔗 Links  
[typeof Documentation](https://documentation.greyscript.org/#GENERAL_TYPEOF) — List of standard object types.

---

### 🔁 Return  
`boolean` — `true` if the object is of the specified type, otherwise `false`.

---

<details>
<summary>📃 Author & Version</summary>

| **Author** | **Version** |
|------------|-------------|
| `Svarii`   | `0.0.1`     |

</details>

---

### 💡 Example
```greyscript
print is_typeof(cryptoLibObject, "cryptoLib")       // Output: true
print is_typeof(metaxploitLibObject, "MetaxploitLib") // Output: true
print is_typeof(metaxploitLibObject, "cryptoLib")     // Output: false
```

---

## load_lib

### 📝 Description  
Loads a library from the lib directory, optionally specifying directory and verifying type.

---

### 🔗 Links  
[Default type list](https://documentation.greyscript.org/#GENERAL_TYPEOF)

---

### 🧮 Parameters

| Name      | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `libName` | string | The file name of the library to load (must include extension).                              |
| `libDir`  | string | *(optional)* Directory where the library is located (should not have trailing slash).       |
| `libType` | string | *(optional)* Expected type of the library (case sensitive).                                |

---

### 🔁 Return  
`objectLibrary` | `null` — Returns the loaded library object or `null` if not found or type mismatched.

---

### 🧠 Notes  
- `libName` must be full filename including extension  
- `libDir` should not have trailing slash  
- `libType` is case sensitive  

---

<details>
<summary>📃 Author & Version</summary>

| **Author** | **Version** |
|------------|-------------|
| `Svarii`   | `0.0.1`     |

</details>

---

### 💡 Examples
```greyscript
lib = load_lib  
// Loads "metaxploit.so" from "/lib" directory

lib = load_lib("metaxploit.so")  
// Loads a library without specifying type

lib = load_lib("customLib.so", "/altLib")  
// Loads a library from specified directory

lib = load_lib("crypto.so", "/lib", "cryptoLib")  
// Loads a library with specified type (returns null on type mismatch)
```

---

## network_device_list

### 📝 Description  
Pulls network device data from the host computer and returns a list of network device information. Each item is a list representing a network adaptor, its model, and monitoring status.

---

### 🧮 Parameters

| Name     | Type   | Description                            |
|----------|--------|----------------------------------------|
| `user`   | string | *(Optional)* Username for access.      |
| `pass`   | string | *(Optional)* Password for access.      |

---

### ⚙️ Default Values

| Parameter | Default |
|-----------|---------|
| `user`    | `""`    |
| `pass`    | `""`    |

---

### 🔁 Return  
`list<list<string>>` — A list of network device entries.  
Each sublist contains:

```text
[ adapter, model, monitor_enabled ]
```

---

<details>
<summary>📃 Author & Version</summary>

#### ✍️ Author  
**Svarii**

#### 📦 Version  
`0.0.1`

</details>

---

### 💡 Example
```greyscript
netList = network_device_list()
for net in netList
    print(net[0] + " - " + net[1] + " [" + net[2] + "]")

```

---

## parse_inbox

### 📝 Description

Parses a list of mail IDs using a global `metaMail` object and extracts structured message data.  
Each parsed message includes: `id`, `from`, `subject`, `body`.

---

### 🧮 Parameters

| Name         | Type          | Description                        |
|--------------|---------------|----------------------------------|
| `mailIDList` | list<string>  | A list of message IDs to parse.  |

---

### 🧷 Default Values

| Parameter | Default Value |
|-----------|---------------|
| *(None)*  | *(None)*      |

---

### 🔁 Return

`list<object>` — A list of parsed mail objects with the following structure:

- `id`: Message ID  
- `from`: Sender  
- `subject`: Subject line  
- `body`: Full body text of the email  

---

<details>
<summary>📃 Author & Version</summary>

- **Author:** Svarii  
- **Version:** 0.0.1  

</details>

---

### 💡 Example

```greyscript
mailIDs = ["msgid-001", "msgid-002"]
parsed = parse_inbox(mailIDs)
print(parsed[0].subject)  // Output: "Subject line here"
```

---

## program_name

### 📝 Description

Return a string with the name of the file that is running this script.

---

### 🧮 Parameters

| Name | Type   | Description                                         |
|------|--------|-----------------------------------------------------|
| `user` | string (optional) | The username to use for access                  |
| `pass` | string (optional) | The password to use for access                  |

---

### 🧷 Default Values

| Parameter | Default Value |
|-----------|---------------|
| *(None)*  | *(None)*      |

---

### 🔁 Return

`string` — The name of the running program file.

---

<details>
<summary>📃 Author & Version</summary>

- **Author:** Svarii  
- **Version:** 0.0.1  

</details>

---

### 💡 Example

```greyscript
programName = program_name
```

---

## unsafe_check_list

### 📝 Description

Split Unsafe Check Results into individual exploit result strings and return a list of UnsafeCheck strings.

---

### 🧮 Parameters

| Name          | Type   | Description                                              |
|---------------|--------|----------------------------------------------------------|
| `scanResults` | string | Result from `fetch_exploit_requirements()` function.     |

---

### 🧷 Default Values

| Parameter | Default Value |
|-----------|---------------|
| *(None)*  | *(None)*      |

---

### 🔁 Return

`list<string>` — List of individual unsafe check strings.

---

<details>
<summary>📃 Author & Version</summary>

- **Author:** Svarii  
- **Version:** 0.0.1  

</details>

---

### 💡 Example

```greyscript
libLocation = "/lib/aptclient.so"
metax = include_lib("/lib/metaxploit.so")
metaLib = metax.load(locals.libLocation)
exploitMem = find_exploitable_addresses(libLocation, metaxploitObject)
unsafeCheckList = unsafe_check_list(fetch_exploit_requirements(exploitMem))
```
---

# 📄 Construct Overview
## report_string_construct__

### 📝 Description  
Constructs and returns an object containing categorized status strings used for reporting various checks and statuses such as network devices, libraries, files, users, internet connection, and more.

---

### 🧮 Parameters  
_None_

---

### 🔁 Return  
`object` — An object (`gstexts`) containing categorized status messages grouped by `fail`, `pass`, `action`, `info`, and `email` categories.

---



### ⚙️ Structure Overview

| Category | Description                                |
|----------|--------------------------------------------|
| `fail`   | Contains failure status messages           |
| `pass`   | Contains success status messages           |
| `action` | Contains messages indicating ongoing checks|
| `info`   | Contains informational messages            |
| `email`  | Contains email-related messages             |

---

### ✍️ Author

| **`Svarii`** |
|--------------|

### 📦 Version

| `0.0.1` |
|---------|

---

### 💡 Example  
```greyscript
statusMessages = report_string_construct__()

print(statusMessages.fail.network_devices_found)
// Output: "No network devices found"

print(statusMessages.pass.lib_found)
// Output: "Library found"

print(statusMessages.action.check_user_email)
// Output: "Checking for email account..."
```
---



