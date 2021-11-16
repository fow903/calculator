"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.BotonCalc = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var appTheme_1 = require("../theme/appTheme");
exports.BotonCalc = function (_a) {
    var texto = _a.texto, _b = _a.color, color = _b === void 0 ? "#2d2d2d" : _b, _c = _a.colSpan, colSpan = _c === void 0 ? 0 : _c, accion = _a.accion, focus = _a.focus;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return accion(texto); } },
        react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, appTheme_1.styles.boton), { backgroundColor: (focus) ? 'white' : color, width: (colSpan == 1) ? 180 : 80 }) },
            react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, appTheme_1.styles.botonTexto), { color: (color == '#9b9b9b') ? 'black' : (focus) ? color : 'white', textAlign: (colSpan == 1) ? 'left' : 'center', paddingLeft: (colSpan == 1) ? 20 : 10 }) }, texto))));
};
