import { app } from "./app";

app.listen({
  host: '0.0.0.0', // makes it accessible on the front end
  port:3333
}).then(()=>{
  console.log("HTTP SERVER RUNNING")
})
