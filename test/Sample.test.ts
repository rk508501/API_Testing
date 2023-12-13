import {spec} from "pactum"

beforeEach(async function(){
  const currentTestTitle = this._runnable.title;
})

it.only("TestID(POC:123) Debug block AAA <smoke><regression>", async function(){
  let title = this._runnable.title
  //console.log(title);
  
   await spec().get('https://jsonplaceholder.typicode.com/todos/1')
  .expectStatus(200)     
})

it.only("TestID(POC:345) Debug block BBB <smoke><regression>", async function(){
  let title = this._runnable.title
  //console.log(title);
  
  await spec().get('https://jsonplaceholder.typicode.com/todos/1')
  .expectStatus(200)  
})

it('Test A', async () => {
  await spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418)
});

it('Test B', async () => {
  await spec()
    .post('https://jsonplaceholder.typicode.com/users')
    .withHeaders('Authorization', 'Basic xxxx')
    .withJson({
      name: 'bolt',
      email: 'bolt@swift.run'
    })
    .expectStatus(200)
});
