/**
 * Created by Chanon.S on 10/20/2016.
 */
function ThaiMoneyText(_currencyText, _subCurrencyText) {
    this.numWord = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
    this.digitWord = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
    this._currencyText = _currencyText || "";
    this._subCurrencyText = _subCurrencyText || "";
}

ThaiMoneyText.prototype.translate = function (amount) {
    amount = (+eval(amount + "")).toFixed(2).split(/\./i);
    var beforeDot = this.toSentence(amount[0]);
    var afterDot = this.toSentence(amount[1] || "0");
    return (beforeDot + this._currencyText + (afterDot && afterDot != this.numWord[0] ? (afterDot + this._subCurrencyText) : "ถ้วน"));
};

ThaiMoneyText.prototype.toSentence = function (_amount) {
    var fullText = "";
    var sign = +_amount < 0 ? "ลบ" : "";
    _amount = _amount.replace(/[^0-9]/gi, "");
    if (+_amount == 0) return this.numWord[0];
    for (var i = 0; i < Math.ceil(_amount.length / 6); i++) {
        var s = _amount.length - (i * 6);
        var sPoint = (s < 6 ? 0 : s - 6);
        var sAmount = (_amount.substr(sPoint, s - sPoint));
        var sAmountL = sAmount.length;
        fullText = (i > 0 ? this.digitWord[6] : "") + fullText;
        var subText = "";
        for (var j = 0; j < sAmountL; j++) {
            var digit = sAmountL - (j + 1);
            var num = sAmount[j];
            if (num == 0)continue;
            subText += (this.numWord[num] + this.digitWord[digit]);
        }
        subText = subText.replace(/หนึ่งสิบ/gi, "สิบ");
        subText = subText.replace(/สองสิบ/gi, "ยี่สิบ");
        fullText = subText + fullText;
    }
    fullText = fullText.replace(/สิบหนึ่ง/gi, "สิบเอ็ด");
    fullText = sign + fullText;
    return fullText;
};