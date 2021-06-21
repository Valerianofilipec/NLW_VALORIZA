import express from 'express'

const app = express()

app.get("/test", (request, response) => {
    return response.send("Olá NLW");
  });
  
  app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST");
  });
  
  // http://localhost:3333
  app.listen(3333, () => console.log("Server is running"));