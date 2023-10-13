var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.PersonFullName = function () {
        console.log('James K');
    };
    return person;
}());
var James = /** @class */ (function (_super) {
    __extends(James, _super);
    function James() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    James.prototype.PersonFamily = function () {
        console.log('James family');
        this.PersonFullName();
    };
    return James;
}(person));
var jamesClass = new James();
jamesClass.PersonFamily();
