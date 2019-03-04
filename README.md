# Opex Service
Backend for Opex visualization. 

## Getting started

### Prerequisites
```
node 10.15
yarn 1.3
postgres 11
```

### Running the project
1. Provide config in [default.js](config/default.json)
2. Run the sql below to insert data into tables. 
3. Run `yarn dev` to run development server.

### Seed Data

```sql
INSERT INTO "public"."chart_config"("id","type","config")
VALUES
(1,E'circle_packing',E'{"table": "Shipment", "parentSize": "newWeight", "childrenSize": "weight", "masterCircle": "sourceId", "parentCircle": "newShipmentId", "parentTooltip": "newCost", "childrenCircle": "id", "childrenTooltip": "cost"}');

INSERT INTO "public"."shipment"("id","sourceId","destinationId","date","weight","cost","newShipmentId","newWeight","newCost","totalTls")
VALUES
(1,E'a123',E'z789',E'2015-01-01 00:00:00',25000,250,1,25000,250,1),
(2,E'a123',E'z789',E'2015-01-07 00:00:00',22000,275,2,38000,280,1),
(3,E'a123',E'z789',E'2015-01-10 00:00:00',16000,280,2,38000,280,1),
(4,E'a123',E'z789',E'2015-01-12 00:00:00',15000,295,3,15000,295,1),
(5,E'a123',E'z789',E'2015-01-16 00:00:00',44000,290,4,44000,290,1),
(6,E'a123',E'z789',E'2015-01-19 00:00:00',22000,275,5,60000,560,2),
(7,E'a123',E'z789',E'2015-01-20 00:00:00',18000,275,5,60000,560,2),
(8,E'a123',E'z789',E'2015-01-22 00:00:00',20000,285,5,60000,560,2);
```

### Endpoints

#### Get Charts
Get charts by type.
##### URI
`/charts/{chartType}`

##### Method
`GET`

##### Response
`Chart data`

##### Sample request

```bash
curl --request GET \
  --url http://localhost:9000/charts/circle_packing
```

##### Sample response
HTTP status - 200 OK
```json
{
    "name": "Shipment",
    "children": [
        {
            "name": "a123",
            "children": [
                {
                    "name": 250,
                    "value": 25000
                },
                {
                    "name": 280,
                    "children": [
                        {
                            "name": 275,
                            "value": 22000
                        },
                        {
                            "name": 280,
                            "value": 16000
                        }
                    ]
                },
                {
                    "name": 295,
                    "value": 15000
                },
                {
                    "name": 290,
                    "value": 44000
                },
                {
                    "name": 560,
                    "children": [
                        {
                            "name": 275,
                            "value": 22000
                        },
                        {
                            "name": 275,
                            "value": 18000
                        },
                        {
                            "name": 285,
                            "value": 20000
                        }
                    ]
                }
            ]
        }
    ]
}
```
