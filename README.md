# GreyScript Prime ![Version Badge](https://img.shields.io/badge/version-0.1.0_alpha-red)
**NOTICE**: <ins>It is NOT recommened to update your local repo with every update.  As the program is alpha, some updates may break the code entirely, or change the way it works.</ins>

![GreyScript Prime Banner](https://img.shields.io/badge/GreyScript-Prime-black?labelColor=blue&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVQ4T22T+0tTYRjHv+/u05h4KxsqW1qiiRmZEQZpCUsUJIWMJCL7IUsiCvqlftkP/gcZQr+EeClETCyk6KI/GJWSihdS58LrNnVTNy/b3M45Pe9sy6AHznue57zP+znP7WXYJ5IEGYZxBhKqSSukd3pom2GG1j6yW3ES3xmDGD7Gwoo0ilgIqKetGgnQCIIcQoBBIFelUoSCHnL20fICCjxhOVjfY5OEDgfRRqopGJCziYGjmJ82wOdVYcrhgEoTQM6JZRQVO6BWi8THe4Jc4xD2J+wG+lhLOhvpz4JXfQsZpnKotFFYcfuw43FjsKsFSewVSsqXwOSUDEMjcnGPSUM4S+Zn+qDZ9SvQ1VKK1awKMKUCVZWlcK5vobnlJQS/H9qx13h0YwRao8Bj5+lcYNIwGghQx1Nxuw6gu70E80eK4A/uwmg4DLvdAat1Diq5ErEzfbhfNopDBi+gDxXgGQeME+A4BywvxKO3swDplyqQWVKO1bUNLLs8SIiNw0BnM8bedaDGZEG6fhOIoQN6TPAUfKSqOWB2So+vPaeILIMqKhqQK0JFDOz64dveomqLqDo/i9y0UAMAHfwcQPFAw+2pYSOG+rLDzaEWivhpt0Ok6oalLH8BBdmrYTPAAeNkhVIY/ZKBiYGMiPP/AIU5DpjybHs+DJNM+kFFZKjjPxn8lAPrmCEC4OM2abMhSJGE5fQxJy4XzIOmkUtjpI18+vrf5GHRqodMIUdM4kGoo6OxZLHAvbMDh9sdAmWmbuD6xV8cwNtYvDdII3gqCezOh/YC5rLHIT45GVE6HURBgG16GhI5ebxezLpcSEncRm3ZtCSTSc/phtyNjLLgk7f1NBWafP44lmQ0UiNk/wB4IWdWVqBVbUsPKic+KqOlq+wK1iKXae5tTOy3jnP1So3uZkJqqpbxK7cvAh7FrNPl8wa8TbdLrY9THnrW9uq4T8xmsyzfs5ivS0yoppoUiYKYZrNY5JIkWMmx17mx2erq7v1qxt/r/BtM3mB6tGkzRAAAAABJRU5ErkJggg==&logoColor=white) by [![Svarii](https://img.shields.io/badge/Svarii-blue?&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADYElEQVQ4Tx2TyW9bVRjFf8/D8xxnsp2BRk3S1KZOmzRRHZJYpF1Ahay0sIQlG3aIv4UNu8ICVdlUQQgJNhQqWpFCSjMIUBonTWPsNHbsDPbz9Ox3+ZrFu4sr3fO+c87v0/rdDoVStNsWrTbYbdCyFE1Ak88pp8cO3T4ngYAbTdcYGh1kY/0VuVIVbUAEPPKq1W7JCxuxeJzZuQSFoyL5XI6d7ZeUiwX6e730Rfw4XXYuxi9zUCiz9nwHLeTQVEC343bYWUilmJwcp9Pvoq+vn3qtSil/yP1v7uPmlKvREN3dfnpiUZa/XxXxHFqvTVNeJ4zE3mYmOcfQQITODh/dXUE8uoNXL3dwOZxk/3nEUMRJ5aSOd3iEnGHn3lfLaEMum/K6dG7dvSMjhgj19hDweQn6PTSqDU5Lh1iWxchwmNl3db784h6ngV4yO/s8/iuDFg/oanp+jvj0FC4RMs02Pp8Ht7KIXYoT7Ozk7LjIVnqTQHmN9c0MSz+/wO/RKdZMtIXYiPrgo0Xcbhem1NA0WzSNCgHdyY3rCTTVwma389vvT/lu6VtsLWlL0/js02ke/PACbTGZUJNTE3j9PhqNJj89fIxq1skfn9DV0cFicoaN3X3MSpWt9ef4XE76xd7+qUG6KhOkblxTk3MzHB7kyb4+JL2XI9rXw0A4TLtlcn18nHzJoHr0CiuzLWDYePhvFkOslpqWCEzE1Pj8LIX8EU+ePjv35ZNKP7k5L1Bp9IZCvHUhSvrXB1jHBUwBzibc/JkpsCdTaO9NRNX7H97FqBh8vbSMUyorGwY342M4dRfPtnZJzb5D7e8V+gMezuomB2InW65hvqE1lZhQt++k2Mtk+fGXJ9SMGoM9XUSEg3AwyMlZlamxUfT0H2+Ix2iYVCTsjdcl/isLytPDAyq5kKQiyo9WVikdnwrRDhKxUaJDAxRksmuDYTylNC5Jf3M7jy7kFmp1do8qaJ9/fEvV6WBldY1c8URqUzTqTSQeJi5fIuB3Uy8fQ7spNbewJIOrFyMc5Yu0JUjtduKKqske7WeFa/FkCUA22caSVFSXB6PhDvxer+AsayriddOkJkGP9LgpFMVC8soFFfAI60XjHKKTpsIhfwvK3a7cjUWCApkbp6bO19yypD7DJKJDVYT+B3hpidBMcnLFAAAAAElFTkSuQmCC)](https://github.com/Svarii/GreyScript/blob/main/README.md)

## Enhance Your GreyScript Coding Experience in VSCode

**GreyScript Prime** is an extension for **GreyScript** that adds powerful methods for object manipulation. Combined with tools like `Greybel VS`, `Plant UML`, `Comment Anchors`, and `Markdown Preview Enhanced with litvis`, GreyScript Prime is designed to boost your coding efficiency and make your development experience in **VSCode** seamless and productive.

## Installation

To install GreyScript Prime, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Svarii/greyscript-prime.git
   ```

2. Install the recommended VSCode extensions:

   - [Greybel VS](https://marketplace.visualstudio.com/items?itemName=ayecue.greybel-vs)
   - [Markdown Preview Enhanced with litvis](https://marketplace.visualstudio.com/items?itemName=gicentre.markdown-preview-enhanced-with-litvis)
   - [Plant UML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)
   - [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)

3. Open the project in VSCode and start coding!

## Usage

Import GreyScript Prime into your GreyScript projects to start using the extended methods. Here's a quick example:

Paste each .src from the lib folder (seperatly) into the Code Editor and save the file with a .so extension in the /lib directory with the allow import box checked.
![image](https://github.com/user-attachments/assets/b821fc24-d106-40f2-b09b-63d311258271)


```greyscript
import_code("/lib/gsprime.so")";
import_code("/lib/gslibs.so")";
import_code("/lib/gsobjects.so")";

newString = "Hello World";
print(newString.bold.color("blue"));

metax = load_lib("metaxploit.so")
print(typeof(metax))

portScan = get_memory_portscanner
print(typeof(portScan))
```

## Methods Overview

### String Methods

- **`.color("#color")`**: Apply a color to text.
- **`.bold`**: Make the text bold.
- **`.italic`**: Make the text italic.
- **`.indent`**: Add indent.
- **`.line-indent`**: Add line-indent.
- **`.margin`**: Add margin.
- **`.mspace`**: Add mspace.
- **`.nobr`**: add nobr tag.
- **`.noparse`**: add noparse tag.
- **`.pos`**: add pos tag.
- **`.rotate`**: Rotate characters.
- **`.underline`**: Underline the text.
- **`.strike`**: Apply strikethrough to text.
- **`.mark`**: Highlight the text.
- **`.sub`**: Apply subscript to text.
- **`.sup`**: Apply superscript to text.
- **`.voffset`**: Add voffset tag.
- **`.width`**: Add width tag.
- **`.remove_char_last`**: Remove the last character from text.
- **`.remove_char_first`**: Remove the first character from text.
- **`.remove_bold`**: Remove bold formatting from text.
- **`.remove_italic`**: Remove italic formatting from text.
- **`.remove_underline`**: Remove underline formatting.
- **`.remove_strike`**: Remove strikethrough formatting.
- **`.remove_mark`**: Remove highlight from text.
- **`.remove_sub`**: Remove subscript from text.
- **`.remove_sup`**: Remove superscript from text.
- **`.extract_between`**: Extract the text between the given values.
- **`.format`**: Allows for string interpolation.

### Number Methods

- **`.plus(number)`**: Add 1 or value to a number.
- **`.minus(number)`**: Subtract 1 or a value from a number.
- **`.diff(number)`**: Calculate the absolute difference.
- **`.greater_than(number)`**: Check if number is greater.
- **`.lesser_than(number)`**: Check if number is lesser.
- **`.random_from(number)`**: Generate a random number from 0 (or number) to number.
- **`.multiply(number)`**: Calculate the multiple.
- **`.divide(number)`**: divide by number.

### List Methods

- **`.trim`**: Removes empty list items from list ends.
- **`.print`**: Loops through a list and prints each item.

### Function Methods

- **`load_lib(libName, libDir, typeExpected)`**: Load a library from `/lib`.
- **`force_params(usage, numReqParams)`**: Force paramater usage and add help 
- **`app_name()`**: Gets name of program {self}
- **`is_null()`**: Checks if object is null; if null, print / return / exit options
- **`is_type()`**: Checks Types and specifies on-fail action
- **`network_device_list()`**: Returns Network devices in a list
- **`calc_ack()`**: Caculates the recommended amount of ACKs to collect
- **`bool_text()`**: Return string true or false representing boolean

### Object Methods

- **`SystemObject`**: Returns object type SystemObject.
- **`PortMemory`**: Returns object type PortMemory.

## Classes Overview

### SystemObject

Access system-level functionalities directly from your code.

```greyscript
terminal = get_system_object;
print(typeof(terminal)); // Outputs: SystemObject
print(terminal.computer.get_name); // Outputs: The name of the computer
terminal.shell.launch("ls"); // Executes the 'ls' command
```

### PortMemory

Interact with collected port information with ease.

```greyscript
portScan = get_memory_portscan;
print(typeof(portScan)); // Outputs: PortMemory
```

## Example

Here's a short video showcasing GreyScript Prime in within VSCode:
<a href="https://www.youtube.com/watch?v=Jt-PkKpnxj8">GreyScript Prime</a>

## License

GreyScript Prime is released under the MIT License. See [LICENSE](LICENSE) for more details.

---

*Enhance your GreyScript development experience today with GreyScript Prime!*

---
Refrence file screenshot
![image](https://github.com/user-attachments/assets/05965984-8b6a-4094-8f9b-39ab96eb3107)
