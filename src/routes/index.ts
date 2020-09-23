import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) =>
  response.json({ message: 'Hello, danilo!' }),
);

export default router;
