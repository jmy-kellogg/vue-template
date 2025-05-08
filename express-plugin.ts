import { Request, Response, NextFunction } from "express";

export default function express(path: string) {
  return {
    name: "vite3-plugin-express",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    configureServer: (server: any) => {
      server.middlewares.use(
        async (req: Request, res: Response, next: NextFunction) => {
          try {
            const { app } = await server.ssrLoadModule(path);
            app(req, res, next);
          } catch (err) {
            console.error(err);
          }
        }
      );
    },
  };
}
