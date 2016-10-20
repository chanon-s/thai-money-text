# thai-money-text
Convert numeric to Thai language text.

## Quick start
- Link script file 
```html
<script type="text/javascript" src="./script/thai-money-text.min.js"></script>
```
- In script tag or youre JavaScript file put the code
``` javascript
// Initial object
var amount = "1900.50"; // Can use integer type.

var moneyText = new ThaiMoneyText("บาท","สตางค์");

// Translate to variable
var text = moneyText.translate(amount);

// Output "หนึ่งพันเก้าร้อยบาทห้าสิบสตางค์"
```
