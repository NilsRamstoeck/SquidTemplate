import { Request, Response } from 'express';

export default async function getServerSideProps(req: Request, res: Response) {
  return {
    props: {
      name: 'world'
    }
  };
}

export type ServerSideProps = Awaited<ReturnType<typeof getServerSideProps>>['props'];