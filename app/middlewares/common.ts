import parser from 'body-parser';
import cors from 'cors';
import { Router } from 'express';

export const handleCors = (router: Router) => {
  router.use(cors());
};

export const handleBodyParsing = (router: Router) => {
  router.use(parser.json());
  router.use(parser.urlencoded({extended: true}));
};
