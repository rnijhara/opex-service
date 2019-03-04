import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatesShipmentTable1551612180448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "shipment" ("id" SERIAL NOT NULL, "sourceId" character varying NOT NULL, "destinationId" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "weight" integer NOT NULL, "cost" integer NOT NULL, "newShipmentId" integer NOT NULL, "newWeight" integer NOT NULL, "newCost" integer NOT NULL, "totalTls" integer NOT NULL, CONSTRAINT "PK_f51f635db95c534ca206bf7a0a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "shipment"`);
    }

}
