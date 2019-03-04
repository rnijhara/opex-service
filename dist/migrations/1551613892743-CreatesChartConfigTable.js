"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatesChartConfigTable1551613892743 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "chart_config_type_enum" AS ENUM('circle_packing')`);
        await queryRunner.query(`CREATE TABLE "chart_config" ("id" SERIAL NOT NULL, "type" "chart_config_type_enum" NOT NULL DEFAULT 'circle_packing', "config" jsonb NOT NULL, CONSTRAINT "PK_455ca0f61b2efba5ef03197f146" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "chart_config"`);
        await queryRunner.query(`DROP TYPE "chart_config_type_enum"`);
    }
}
exports.CreatesChartConfigTable1551613892743 = CreatesChartConfigTable1551613892743;
//# sourceMappingURL=1551613892743-CreatesChartConfigTable.js.map