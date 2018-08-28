"use strict";
// Utils
var elemGrab = function (model, query) { return model.querySelector(query); };
var forEach = function (collection, cb, scope) {
    try {
        if (typeof collection == "object") {
            for (var i in collection) {
                cb.call(scope, i, collection[i]);
            }
        }
        else {
            for (var i = 0; i < collection.length; i += 1) {
                cb.call(scope, i, collection[i]);
            }
        }
    }
    catch (e) {
        console.error(e);
    }
};
// Styles
var styles = {
    flex: "display:flex;",
    col: "flex-direction:column;",
    center: "align-items: center;justify-content: center;",
    justCenter: "justify-content: center;",
    alignCenter: " align-items: center;",
    pSm: "padding: 10px;"
};
// Template
var htmlTemplate = "\n<div class=\"dpickr\" style=\"display:inline-block\">\n            <div style=\"" + styles.flex + "\">\n                <div class=\"dpickr-date\" style=\"" + (styles.flex +
    styles.col +
    styles.center +
    styles.pSm) + "\">\n                    <div class=\"up p-sm\" style=\"" + styles.pSm + "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\"><path d=\"M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z\"/></svg>\n                    </div>\n                    <div class=\"date\">\n\n                    </div>\n                    <div class=\"down\" style=\"transform:rotate(180deg);" + styles.pSm + "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\"><path d=\"M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z\"/></svg>\n                    </div>\n                </div>\n                <div class=\"dpickr-month\" style=\"" + (styles.flex +
    styles.col +
    styles.center +
    styles.pSm) + "\">\n                    <div class=\"up p-sm\" style=\"" + styles.pSm + "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\"><path d=\"M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z\"/></svg>\n                    </div>\n                    <div class=\"date\">\n\n                    </div>\n                    <div class=\"down\" style=\"transform:rotate(180deg);" + styles.pSm + "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\"><path d=\"M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z\"/></svg>\n                    </div>\n                </div>\n                <div class=\"dpickr-year\" style=\"" + (styles.flex +
    styles.col +
    styles.center +
    styles.pSm) + "\">\n                    <div class=\"up p-sm\" style=\"" + styles.pSm + "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\"><path d=\"M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z\"/></svg>\n                    </div>\n                    <div class=\"date\">\n\n                    </div>\n                    <div class=\"down\" style=\"transform:rotate(180deg);" + styles.pSm + "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\"><path d=\"M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z\"/></svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n";
// Class
var dPick = /** @class */ (function () {
    function dPick(options) {
        this.today = new Date();
        this.selectors = {
            date: document.body,
            month: document.body,
            year: document.body
        };
        this.options = options;
        this.options.el.innerHTML = htmlTemplate;
        this.options.onChange(this.today);
        this.addSelectors();
        this.redrawValues();
    }
    dPick.prototype.addSelectors = function () {
        var _this = this;
        forEach(this.selectors, function (key, value) {
            var el = elemGrab(_this.options.el, ".dpickr-" + key);
            var upButton = elemGrab(el, ".up");
            var downButton = elemGrab(el, ".down");
            _this.selectors[key] = elemGrab(el, ".date");
            upButton.addEventListener("click", function (e) {
                _this.setTime(key, 1);
            });
            downButton.addEventListener("click", function (e) {
                _this.setTime(key, -1);
            });
        });
    };
    dPick.prototype.setTime = function (key, direction) {
        var date = new Date(this.today);
        if (key == "date") {
            date.setDate(date.getDate() + direction);
        }
        else if (key == "month") {
            date.setMonth(date.getMonth() + direction);
        }
        else if (key == "year") {
            date.setFullYear(date.getFullYear() + direction);
        }
        this.today = date;
        this.options.onChange(this.today);
        this.redrawValues();
    };
    dPick.prototype.redrawValues = function () {
        var _this = this;
        forEach(this.selectors, function (key, value) {
            if (!value) {
                return;
            }
            switch (key) {
                case "date":
                    value.innerHTML = _this.today.getDate();
                    break;
                case "month":
                    value.innerHTML = _this.today.getMonth() + 1;
                    break;
                case "year":
                    value.innerHTML = _this.today.getFullYear();
                    break;
            }
        });
    };
    return dPick;
}());
