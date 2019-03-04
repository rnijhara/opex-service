"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatesShipmentTable1551612180448 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "shipment" ("id" SERIAL NOT NULL, "sourceId" character varying NOT NULL, "destinationId" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "weight" integer NOT NULL, "cost" integer NOT NULL, "newShipmentId" integer NOT NULL, "newWeight" integer NOT NULL, "newCost" integer NOT NULL, "totalTls" integer NOT NULL, CONSTRAINT "PK_f51f635db95c534ca206bf7a0a4" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "shipment"`);
    }
}
exports.CreatesShipmentTable1551612180448 = CreatesShipmentTable1551612180448;
//# sourceMappingURL=1551612180448-CreatesShipmentTable.js.map