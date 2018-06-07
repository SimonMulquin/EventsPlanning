import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import * as GoogleOAuth from 'passport-google-oauth20';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { graphqlExpress } from 'graphql-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import schema from './graphql';

//env
const port = process.env.PORT || 4000;

//server
const server = express();
server.use('*', cors());
server.use(
  '/graphql', 
  bodyParser.json(), 
  graphqlExpress(req => ({
    schema,
  }))
);

//startup
createServer(server).listen(port, '0.0.0.0', err => {
  if ( err ) { throw new Error('Failed to startup: ', err) };
  
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    }, 
    {
      server,
      path: '/subscriptions'
    }
  );

  console.log('Listening on port', port);
});