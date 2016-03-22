import * as express from 'express';

let app = express();

let port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req: express.Request,res: express.Response)=>{
   res.send(200,'Hello World');
});

app.get('/books', (req: express.Request,res: express.Response)=>{
   res.send(200,'Hello World');
});

app.listen(port,()=>{
    console.log(`running server on port ${port}`);
});



