"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var authRoutes_1 = require("./routes/authRoutes");
/*
*clase de inicio de nuestra aplicaccion NodeJsExpress
*Autor ¿: Karime Alejandra Caballero Campos
*Fecha: 29 febrero 2024

*/
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.listen(this.app.get("port"), function () {
            console.log("Server on port", _this.app.get("port"));
        });
    }
    //inicializa la clase
    Server.prototype.config = function () {
        // configuración del puerto para el servidor
        this.app.set("port", 3000);
        // muestra las peticiones en consola
        this.app.use((0, morgan_1.default)("dev"));
        // puertos de conexión de la API
        this.app.use((0, cors_1.default)());
        // solo se permiten peticiones en formato JSON
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false, }));
    };
    //condirma las rutas
    Server.prototype.routes = function () {
        this.app.use("/", authRoutes_1.default);
    };
    return Server;
}());
var server = new Server();
