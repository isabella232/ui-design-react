"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var PaginationComponent = /** @class */ (function (_super) {
    __extends(PaginationComponent, _super);
    function PaginationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationComponent.prototype.render = function () {
        return (React.createElement(react_bootstrap_1.Pagination, null,
            React.createElement(react_bootstrap_1.Pagination.First, null),
            React.createElement(react_bootstrap_1.Pagination.Prev, null),
            React.createElement(react_bootstrap_1.Pagination.Item, null, 1),
            React.createElement(react_bootstrap_1.Pagination.Ellipsis, null),
            React.createElement(react_bootstrap_1.Pagination.Item, null, 10),
            React.createElement(react_bootstrap_1.Pagination.Item, null, 11),
            React.createElement(react_bootstrap_1.Pagination.Item, { active: true }, 12),
            React.createElement(react_bootstrap_1.Pagination.Item, null, 13),
            React.createElement(react_bootstrap_1.Pagination.Item, { disabled: true }, 15),
            React.createElement(react_bootstrap_1.Pagination.Ellipsis, null),
            React.createElement(react_bootstrap_1.Pagination.Item, null, 20),
            React.createElement(react_bootstrap_1.Pagination.Next, null),
            React.createElement(react_bootstrap_1.Pagination.Last, null)));
    };
    return PaginationComponent;
}(React.Component));
exports.default = PaginationComponent;
//# sourceMappingURL=pagination.js.map