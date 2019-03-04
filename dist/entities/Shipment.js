"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Shipment = class Shipment extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Shipment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Shipment.prototype, "sourceId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Shipment.prototype, "destinationId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Shipment.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Shipment.prototype, "weight", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Shipment.prototype, "cost", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Shipment.prototype, "newShipmentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Shipment.prototype, "newWeight", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Shipment.prototype, "newCost", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Shipment.prototype, "totalTls", void 0);
Shipment = __decorate([
    typeorm_1.Entity()
], Shipment);
exports.Shipment = Shipment;
//# sourceMappingURL=Shipment.js.map