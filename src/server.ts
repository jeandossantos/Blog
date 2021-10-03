import "reflect-metadata";
import './database/connection';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import cors from 'cors';
import helmet from "helmet";

import routes from './routes';
import { CustomException } from "./exceptions/CustomExecption";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.use((
  error: CustomException | Error,
  req: Request,
  res: Response,
  next: NextFunction) => {
  if(error instanceof CustomException) {
    return res.status(error.code).send(error.message);
  }

  if (error instanceof Error) {
    console.error(error.message);
  }
  return res.status(500).send('Internal Error');
});

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
app.listen(3001, () => console.log('Backend is running on port 3001...'));
