"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _createSvgPie = require('create-svg-pie');

var _createSvgPie2 = _interopRequireDefault(_createSvgPie);

function createSVGDoughnut(data, outerRadius, innerRadius, palette) {
    if (innerRadius === undefined) innerRadius = outerRadius * 0.8;
    return (function () {
        var pie = (0, _createSvgPie2["default"])(data, outerRadius, palette);

        var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        var mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
        mask.id = "hole";

        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", outerRadius);
        circle.setAttribute("cy", outerRadius);
        circle.setAttribute("r", innerRadius);

        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width", '100%');
        rect.setAttribute("height", '100%');
        rect.setAttribute("fill", "white");

        defs.appendChild(mask);
        mask.appendChild(rect);
        mask.appendChild(circle);

        var childElementCount = pie.childElementCount;
        for (var i = 0; i < childElementCount; i++) {
            if (pie.childNodes[i].setAttribute) {
                pie.childNodes[i].setAttribute('mask', 'url(#hole)');
            }
        }

        pie.appendChild(defs);
        return pie;
    })();
}

exports["default"] = createSVGDoughnut;
module.exports = exports["default"];