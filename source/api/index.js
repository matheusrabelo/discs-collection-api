import express from 'express';
import { PORT } from '../configuration';
import router from '../routes/router';

const app = express();
app.use(router);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
