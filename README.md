# GraphQL, Express and Docker

## Run
`docker-compose up`

## Examples

### Queries

#### Get list of users
```gql
query {
  users {
    id
    name
    email
  }
}
```

### Get user by id
```gql
user(id: 1) {
  id
  name
  email
}
```

### Mutations

#### Mutate a users name by id
```gql
mutation {
  updateUser(id: 1, name: "Jack Wayne") {
    id
    name
    email
  }
}
```