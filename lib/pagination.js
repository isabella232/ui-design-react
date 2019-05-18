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
        var pages = this.renderPages();
        return React.createElement(react_bootstrap_1.Pagination, null, pages);
    };
    PaginationComponent.prototype.renderPages = function () {
        var _this = this;
        var selectedPage = this.props.selectedPage || PaginationComponent.defaultProps.selectedPage;
        var pages = [];
        var _loop_1 = function (pageNumber) {
            pages.push(React.createElement(react_bootstrap_1.Pagination.Item, { active: pageNumber === selectedPage, activeLabel: "", key: pageNumber, onClick: function () { return _this.onClickPage(pageNumber); } }, pageNumber));
        };
        for (var pageNumber = 1; pageNumber <= this.props.totalPages; pageNumber++) {
            _loop_1(pageNumber);
        }
        return pages;
    };
    PaginationComponent.prototype.onClickPage = function (e) {
        console.log('page:', e);
    };
    PaginationComponent.defaultProps = {
        selectedPage: 1,
        totalPages: 1,
    };
    return PaginationComponent;
}(React.Component));
exports.default = PaginationComponent;
//# sourceMappingURL=pagination.js.map