"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
/*

* clase para la funcionalidad de rutas login
*/
var AuthRoutes = /** @class */ (function () {
    //Inicializa
    function AuthRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    AuthRoutes.prototype.config = function () {
        this.router.post('/', authController_1.authController.iniciarSesion);
    };
    return AuthRoutes;
}());
var authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
