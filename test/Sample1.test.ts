import {spec} from "pactum"

it('Test C', async () => {
  await spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418)
});
