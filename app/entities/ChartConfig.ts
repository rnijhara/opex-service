import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ChartType } from "../types/chartType";

@Entity()
export class ChartConfig extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({type: 'enum', enum: ChartType, default: ChartType.CIRCLE_PACKING})
  public type: ChartType;

  @Column({type: 'jsonb'})
  public config: any;
}
