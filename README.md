# strapi 5 graphql plugin is broken

this is a demo to demonstrate our usecases and the points where the gql api is not working reliable

## datamodel

there are cars and motors (with draft & publish feature enabled) and passengers (no draft & publish) with relations to a driver and a list of passengers

just create a few entries and publish / link them together as you like, also do not forget to enable all types for the public role

## query draft versions (fixed with 5.16.1)

where the rest api shows everything correct 

http://localhost:1337/api/cars?populate=*&status=draft

http://localhost:1337/api/cars?populate=*&status=published

this gql query returns always an empty list for passengers and null for the driver

```gql
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


## new bug with 5.16.1

after updating to 5.16.1 another bug was introduced, we do have usecases where we want both draft and published versions to compare. 

to show it, i added the motor type as dependency of the car (with draft / publish enabled).

we fetch them with the following query - with 5.16.1 the non-draft/publish types are there, but the motor is missing in the draft version 


```gql
query compareCars {
	draft: cars(status: DRAFT) {
		name
		passengers {
			name
		}
		driver {
			name
		}
		motor {
			manufacturer
		}
	}
	published: cars(status: PUBLISHED) {
		name
		passengers {
			name
		}
		driver {
			name
		}
		motor {
			manufacturer
		}
	}
}
```