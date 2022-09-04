import express from 'express';
import routes from './routes';
import cors  from 'cors';


const port = 3333;

const server = express();

server.use(routes)
server.use(express.json())
server.use(cors)

server.listen(port, () => {
  console.log("server is run and port 3333!!!")
})

