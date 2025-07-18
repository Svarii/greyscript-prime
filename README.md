# GreyScript Prime ![Version Badge](https://img.shields.io/badge/version-0.1.0_alpha-red)
**NOTICE**: Greyscript Prime is currently undergoing major structural changes.The next update of the application will have an altered structure from the previouw versions.<ins>It is NOT recommened to update your local repo with every update.  As the program is alpha, some updates may break the code entirely, or change the way it works.</ins>

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

3. Open the project in VSCode and start coding!

> # API Overview
> 
> <details>
> <summary>🅰️  Text Mesh Pro Methods</summary>
>
> - string.[align](#align)
> - string.[alpha](#alpha)
> - string.[bold](#bold)
> - string.[color](#color)
> - string.[cspace](#cspace)
> - string.[indent](#indent)
> - string.[italic](#italic)
> - string.[line-indent](#line-indent)
> - string.[lowercase](#lowercase)
> - string.[margin](#margin)
> - string.[mark](#mark)
> - string.[mspace](#mspace)
> - string.[nobr](#nobr)
> - string.[noparse](#noparse)
> - string.[page](#page)
> - string.[pos](#pos)
> - string.[rotate](#rotate)
> - string.[size](#size)
> - string.[strike](#strike)
> - string.[sub](#sub)
> - string.[sup](#sup)
> - string.[sub](#sub)
> - string.[underline](#underline)
> - string.[uppercase](#uppercase)
> - string.[voffset](#voffset)
> - string.[width](#width)
> </details>
>
> <details>
> <summary>🔢 Number Methods</summary>
>
> - number.[clamp](#clamp)
> - number.[diff](#diff)
> - number.[divide](#divide)
> - number.[is_more](#is_more)
> - number.[is_less](#is_less)
> - number.[lerp](#lerp)
> - number.[minus](#minus)
> - number.[multiply](#multiply)
> - number.[plus](#plus)
> - number.[random_from](#random_from)
> - number.[saturate](#saturate)
> </details>
> <details>
> <summary>📋 List Methods</summary>
>
> - list.[crop](#crop)
> - list.[string](#string)
> </details>
>
> <details>
> <summary>🗂️ Map Methods</summary>
>
> - map.[get_atrributes](#get_atrributes)
> </details>
>
> <details>
> <summary>📁 File Management Functions</summary>
> 
> - [file_append](#file_append)
> - [file_delete](#file_delete)
> - [file_exists](#file_exists)
> - [file_new](#file_new)
> </details>
>
> <details>
> <summary>⚙️ Task Functions</summary>
> 
> - [file_append](#file_append)
> - [file_delete](#file_delete)
> - [file_exists](#file_exists)
> - [file_new](#file_new)
> </details>


---
## License
GreyScript Prime is released under the MIT License. See [LICENSE](LICENSE) for more details.
