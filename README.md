# strapi 5 graphql plugin is broken

this is a demo to demonstrate our usecases and the points where the gql api is not working reliable

## datamodel

there are cars and motors (with draft & publish feature enabled) and passengers (no draft & publish) with relations to a driver and a list of passengers

just create a few entries and publish / link them together as you like, also do not forget to enable all types for the public role

## query draft versions

where the rest api shows everything correct 

http://localhost:1337/api/cars?populate=*&status=draft

http://localhost:1337/api/cars?populate=*&status=published

this gql query returns always an empty list for passengers and null for the driver

```graphql
query draftCars {
	cars(status: DRAFT) {
		name
		passengers {
			name
		}
		driver {
			name
		}
	}
}
```

requesting with the status `published` - everything shows up