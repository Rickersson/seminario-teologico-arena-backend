import serverlessExpress from '@vendia/serverless-express';

export const Handler = (app) => {
  return serverlessExpress({ app });
};
