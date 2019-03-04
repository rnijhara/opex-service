"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const typeorm_1 = require("typeorm");
const utils_1 = require("./utils");
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
typeorm_1.createConnection().then(async (connection) => {
    console.log('Preparing to run migrations');
    await connection.runMigrations();
    console.log('Completed running migrations');
    const app = express_1.default();
    app.get('/', (req, res) => {
        res.send({ message: 'Opex service' });
    });
    utils_1.applyMiddleware(middlewares_1.default, app);
    app.use(routes_1.default);
    const PORT = config_1.default.get('server.port');
    const server = http_1.default.createServer(app);
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch((error) => console.error(error));
//# sourceMappingURL=index.js.map