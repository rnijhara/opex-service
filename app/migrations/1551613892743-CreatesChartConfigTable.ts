import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatesChartConfigTable1551613892743 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TYPE "chart_config_type_enum" AS ENUM('circle_packing')`);
    await queryRunner.query(`CREATE TABLE "chart_config" ("id" SERIAL NOT NULL, "type" "chart_config_type_enum" NOT NULL DEFAULT 'circle_packing', "config" jsonb NOT NULL, CONSTRAINT "PK_455ca0f61b2efba5ef03197f146" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "chart_config"`);
    await queryRunner.query(`DROP TYPE "chart_config_type_enum"`);
  }

}
