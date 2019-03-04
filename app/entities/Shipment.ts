import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipment extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public sourceId: string;

  @Column()
  public destinationId: string;

  @Column()
  public date: Date;

  @Column()
  public weight: number;

  @Column()
  public cost: number;

  @Column()
  public newShipmentId: number;

  @Column()
  public newWeight: number;

  @Column()
  public newCost: number;

  @Column()
  public totalTls: number;
}
