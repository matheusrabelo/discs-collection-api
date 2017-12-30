import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { PORT } from '../configuration';
import router from '../routes/router';

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(router);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
