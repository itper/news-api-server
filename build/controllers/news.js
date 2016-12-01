'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchNews = undefined;

var fetchNews = exports.fetchNews = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
        var _ctx$query$displayTim, displayTime, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _ctx$query$displayTim = ctx.query.displayTime, displayTime = _ctx$query$displayTim === undefined ? 0 : _ctx$query$displayTim;
                        _context.next = 3;
                        return service.fetchNews(displayTime);

                    case 3:
                        data = _context.sent;

                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: data
                        };

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function fetchNews(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _news = require('../services/news');

var service = _interopRequireWildcard(_news);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }