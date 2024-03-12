"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = require("promise-mysql");
var pool = promise_mysql_1.default.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '8520',
    database: 'apliweb'
});
exports.default = pool;
