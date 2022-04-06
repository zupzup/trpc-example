# trpc-example

Example for using tRPC both on the server and on the client

Start the server using the `./run.sh` script inside the `server` folder and run the client by running `npm start` inside the `client` folder.

## Endpoints;

```bash
// create a new cat
curl -X POST "http://localhost:8080/cat/create" -d '{"name": "Minka" }' -H 'content-type: application/json'

// list all cats
curl "http://localhost:8080/cat/list"

// get a cat by id
curl "http://localhost:8080/cat/get?input=1234"

// delete a cat
curl -X POST  "http://localhost:8080/cat/delete" -d '{"id": 1234}' -H 'content-type: application/json'
```

