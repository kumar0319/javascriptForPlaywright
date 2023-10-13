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
var abc = /** @class */ (function () {
    function abc() {
    }
    abc.prototype.fun1 = function () {
        console.log('public fnction');
    };
    return abc;
}());
var xyz = /** @class */ (function (_super) {
    __extends(xyz, _super);
    function xyz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    xyz.prototype.fun2 = function () {
        this.fun1();
    };
    return xyz;
}(abc));
var objCla = new xyz();
objCla.fun1();
