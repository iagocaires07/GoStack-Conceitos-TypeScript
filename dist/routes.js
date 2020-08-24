"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helouWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helouWorld(require, response) {
    var user = CreateUser_1.default({
        name: 'Iago Caires',
        email: 'iagoceires@teste.com',
        password: '12345',
        techs: [
            'ReactJS',
            'React Native',
            { title: 'Node.js', experience: 100 }
        ]
    });
    return response.json(user);
}
exports.helouWorld = helouWorld;
