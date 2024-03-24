import { Request, Response } from 'express';
import { Article } from '../models/article';

export const createNewArticle = (req: Request, res: Response) => {
  return res.render('layout', {
    page: './pages/create',
    props: { title: 'Create New Article' },
  });
};

export const saveNewArticle = async (req: Request, res: Response) => {
  const { title, summary, content, author } = req.body;
  const article = new Article({ title, summary, content, author });
  await article.save();
  return res.render('layout', {
    page: './pages/create',
    props: { title: 'Create New Article' },
  });
};

export const editArticle = async (req: Request, res: Response) => {
  return res.render('layout', {
    page: './pages/create',
    props: { title: 'Edit Article' },
  });
};

export const saveArticle = async (req: Request, res: Response) => {
  const { title, summary, content, author } = req.body;
  const article = new Article({ title, summary, content, author });
  await article.save();
  return res.render('layout', {
    page: './pages/create',
    props: { title: 'Create New Article' },
  });
};

export const viewArticle = async (req: Request, res: Response) => {
  return res.render('layout', {
    page: './pages/create',
    props: { title: 'Article Details' },
  });
};

export const deleteArticle = async (req: Request, res: Response) => {
  return res.render('layout', {
    page: './pages/create',
    props: { title: 'Delete Article' },
  });
};
