declare module 'express-boom';

declare namespace Express {
  export interface Response {
    boom: any
  }
}
