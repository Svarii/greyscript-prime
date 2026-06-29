# Grey Hack Unicode Support Chart
A complete, verified reference of every Unicode block supported by the Grey Hack game font.  
This chart reflects **actual in‑game rendering tests**, including full support for the U+2500 box‑drawing block and partial support for CJK Compatibility Forms.

---

## Overview

Grey Hack uses a **partial CJK terminal font**, giving it strong support for East Asian glyph ranges and full support for box‑drawing characters.  
This README documents all confirmed supported and unsupported Unicode blocks.

---

## ✅ Supported Unicode Blocks

### Core ASCII & Latin
| Block | Range | Notes |
|-------|--------|-------|
| **Basic Latin** | U+0020–U+007E | Full support |
| **Latin‑1 Supplement (partial)** | U+00A0–U+00FF | Some accented characters work |

---

### CJK Blocks
| Block | Range | Example | Status |
|-------|--------|---------|--------|
| **CJK Unified Ideographs (Kanji)** | U+4E00–U+9FFF | 木 火 心 崎 神 塚 | ✔ Full |
| **CJK Radicals** | U+2E80–U+2EFF | ⺗ ⺘ ⺣ | ✔ Full |
| **CJK Strokes** | U+31C0–U+31EF | 一 丨 丶 乀 乁 | ✔ Full |
| **CJK Compatibility Ideographs** | U+F900–U+FAFF | 﨑 神 塚 | ✔ Full |

---

### Japanese (partial)
| Block | Range | Example | Status |
|-------|--------|---------|--------|
| **Halfwidth Katakana** | U+FF65–U+FF9F | ｶﾀｶﾅ ﾊｯｶｰ | ✔ Full |
| **Hiragana** | U+3040–U+309F | あ い う | ✘ None |
| **Fullwidth Katakana** | U+30A0–U+30FF | ア カ サ | ✘ None |

---

### Terminal / UI Blocks

#### Box‑Drawing (FULL SUPPORT)
Grey Hack supports **every character** in the U+2500 block:

- Single‑line  
- Double‑line  
- Heavy  
- Light  
- Mixed single/double  
- All corners  
- All tees  
- All junctions  
- All crossings  
- All diagonals  
- All connectors  

Examples:

```
─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼
═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬
╒ ╓ ╔ ╕ ╖ ╗
╘ ╙ ╚ ╛ ╜ ╝
╞ ╟ ╠ ╡ ╢ ╣
╤ ╥ ╦ ╧ ╨ ╩
╪ ╫ ╬
```

| Block | Range | Status |
|-------|--------|--------|
| **Box‑drawing** | U+2500–U+257F | ✔ Full |

---

#### Block Elements
| Block | Range | Example | Status |
|-------|--------|---------|--------|
| **Block Elements** | U+2580–U+259F | █ ▓ ▒ ░ ▙ ▛ | ✔ Full |

---

#### Geometric Shapes (common subset)
| Block | Range | Example | Status |
|-------|--------|---------|--------|
| **Geometric Shapes (partial)** | U+25A0–U+25C7 | ■ □ ▲ ▼ ◆ | ✔ Partial |

---

### CJK Compatibility Forms (PARTIAL SUPPORT)

Grey Hack supports **some** characters from the CJK Compatibility Forms block, specifically vertical punctuation:

Supported:
```
︵ ︶ ︷ ︸
```

These correspond to:
- U+FE35 — Vertical Left Parenthesis  
- U+FE36 — Vertical Right Parenthesis  
- U+FE37 — Vertical Left Curly Bracket  
- U+FE38 — Vertical Right Curly Bracket  

Unsupported examples:
```
〶 〷 〸 〹 〺
```

| Block | Range | Status |
|-------|--------|--------|
| **CJK Compatibility Forms** | U+FE30–U+FE4F | ✔ Partial |

---

## ❌ Unsupported Unicode Blocks

### Scripts not included
| Block | Example | Status |
|-------|---------|--------|
| **Hangul** | 가 나 다 | ✘ |
| **Arabic** | ع ب ت | ✘ |
| **Hebrew** | א ב ג | ✘ |
| **Greek** | α β γ Ω | ✘ |
| **Emoji / Pictographs** | 🙂 🚀 ❤️ | ✘ |

### Symbol blocks not included
| Block | Example | Status |
|-------|---------|--------|
| **Misc Technical Symbols** | ⟀ ⟁ ⟂ ⟃ | ✘ |
| **Rare Geometric Shapes** | ◪ ◫ ◬ ◭ ◮ ◯ ⬠ | ✘ |
| **Enclosed CJK Letters / Months** | ㊀ ㊁ ㈠ ㈡ | ✘ |

---

## Summary

Grey Hack supports:

- ASCII  
- Partial Latin‑1  
- Cyrillic  
- Kanji  
- CJK radicals  
- CJK strokes  
- CJK compatibility ideographs  
- Halfwidth Katakana  
- **Full box‑drawing block (U+2500–U+257F)**  
- Block elements  
- Common geometric shapes  
- **Partial CJK Compatibility Forms (︵ ︶ ︷ ︸)**  

Grey Hack does **not** support:

- Hiragana  
- Fullwidth Katakana  
- Hangul  
- Arabic  
- Hebrew  
- Greek  
- Emoji  
- Rare geometric shapes  
- Misc technical symbols  
- Enclosed CJK symbols  