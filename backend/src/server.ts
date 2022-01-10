import 'express-async-errors';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import { globalErrors } from './middlewares/globalErrors';
import routes from './routes';

const PORT = process.env.PORT || '3001';

createConnection().then(
   connection => {
      const app = express();

      app.use(cors());
      app.use(express.json());
      app.use(routes);
      app.use(globalErrors)

      app.listen(PORT, () => {
         console.log(`Server is running at port: ${PORT}`);
      });
   }
).catch((err) => {
   console.log("Unable to connect to the database");
   console.log(`Error: ${err}`);
});