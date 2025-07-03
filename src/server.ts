import serverlessExpress from '@vendia/serverless-express';

export function Handler(serverPromise: Promise<any>) {
  let cachedHandler: any;

  return async (event: any, context: any) => {
    if (!cachedHandler) {
      const server = await serverPromise;
      cachedHandler = serverlessExpress({ app: server });
    }
    return cachedHandler(event, context);
  };
}