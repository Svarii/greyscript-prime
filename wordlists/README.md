# Grey Hack Unicode Support Chart
A complete, verified reference of every Unicode block supported by the Grey Hack game font.  
This chart reflects **actual in‑game rendering tests**, including full Japanese syllabaries, full box‑drawing support, full Cyrillic support, and partial CJK compatibility forms.

---

## Overview

Grey Hack uses a **CJK‑centric terminal font** with broad support for Japanese, Chinese, Cyrillic, and technical UI characters.  
This README documents all confirmed supported and unsupported Unicode blocks.

---

## ✅ Supported Unicode Blocks

### Core ASCII & Latin
| Block | Range | Notes |
|-------|--------|-------|
| **Basic Latin** | U+0020–U+007E | Full support |
| **Latin‑1 Supplement (partial)** | U+00A0–U+00FF | Some accented characters work |

---

## Japanese (FULL SUPPORT)

Grey Hack supports **all Hiragana**, **all fullwidth Katakana**, and **all halfwidth Katakana**.

### Hiragana
```
あ い う え お
ひ ら が な
```

### Katakana (fullwidth)
```
ア カ サ
カ タ カ ナ
```

### Katakana (halfwidth)
```
ｶ ﾀ ﾅ ﾊｯｶｰ
```

| Block | Range | Status |
|-------|--------|--------|
| Hiragana | U+3040–U+309F | ✔ Full |
| Katakana (fullwidth) | U+30A0–U+30FF | ✔ Full |
| Katakana (halfwidth) | U+FF65–U+FF9F | ✔ Full |

---

## Cyrillic (FULL SUPPORT)

Grey Hack fully supports **the entire Cyrillic block**, including Russian, Ukrainian, Bulgarian, Serbian, and extended letters.

### Examples
```
А Б В Г Д Е Ж З И Й
К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я
Ё І Ї Є Ґ
```

| Block | Range | Status |
|-------|--------|--------|
| Cyrillic | U+0400–U+04FF | ✔ Full |
| Cyrillic Supplement | U+0500–U+052F | ✔ Full |

---

## CJK Blocks

| Block | Range | Example | Status |
|-------|--------|---------|--------|
| CJK Unified Ideographs (Kanji) | U+4E00–U+9FFF | 木 火 心 崎 神 塚 | ✔ Full |
| CJK Radicals | U+2E80–U+2EFF | ⺗ ⺘ ⺣ | ✔ Full |
| CJK Strokes | U+31C0–U+31EF | 一 丨 丶 乀 乁 | ✔ Full |
| CJK Compatibility Ideographs | U+F900–U+FAFF | 﨑 神 塚 | ✔ Full |

---

## Terminal / UI Blocks

### Box‑Drawing (FULL SUPPORT)

Grey Hack supports **every character** in the U+2500 block.

```
─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼
═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬
```

| Block | Range | Status |
|-------|--------|--------|
| Box‑drawing | U+2500–U+257F | ✔ Full |

---

### Block Elements
| Block | Range | Example | Status |
|-------|--------|---------|--------|
| Block Elements | U+2580–U+259F | █ ▓ ▒ ░ ▙ ▛ | ✔ Full |

---

### Geometric Shapes (common subset)
| Block | Range | Example | Status |
|-------|--------|---------|--------|
| Geometric Shapes (partial) | U+25A0–U+25C7 | ■ □ ▲ ▼ ◆ | ✔ Partial |

---

## CJK Compatibility Forms (PARTIAL SUPPORT)

Supported:
```
︵ ︶ ︷ ︸ 〶 〷 〸 〹 〺
```

| Block | Range | Status |
|-------|--------|--------|
| CJK Compatibility Forms | U+FE30–U+FE4F | ✔ Partial |

---

## ❌ Unsupported Unicode Blocks

### Scripts not included
| Block | Example | Status |
|-------|---------|--------|
| Hangul | 가 나 다 | ✘ |
| Arabic | ع ب ت | ✘ |
| Hebrew | א ב ג | ✘ |
| Greek | α β γ Ω | ✘ |
| Emoji / Pictographs | 🙂 🚀 ❤️ | ✘ |

### Symbol blocks not included
| Block | Example | Status |
|-------|---------|--------|
| Misc Technical Symbols | ⟀ ⟁ ⟂ ⟃ | ✘ |
| Rare Geometric Shapes | ◪ ◫ ◬ ◭ ◮ ◯ ⬠ | ✘ |
| Enclosed CJK Letters / Months | ㊀ ㊁ ㈠ ㈡ | ✘ |

---

## Summary

Grey Hack supports:

- ASCII  
- Partial Latin‑1  
- **Full Japanese (Hiragana + Katakana)**  
- **Full Cyrillic (U+0400–U+052F)**  
- Kanji  
- CJK radicals  
- CJK strokes  
- CJK compatibility ideographs  
- **Full box‑drawing block (U+2500–U+257F)**  
- Block elements  
- Common geometric shapes  
- **Partial CJK Compatibility Forms (︵ ︶ ︷ ︸)**  

Grey Hack does **not** support:

- Hangul  
- Arabic  
- Hebrew  
- Greek  
- Emoji  
- Rare geometric shapes  
- Misc technical symbols  
- Enclosed CJK symbols  

This README represents the **complete, confirmed Unicode footprint** of the Grey Hack font.