import { Request, Response } from 'express';
import { join } from 'path';

import articlesRoute from '@src/routes/articlesRoute';
import express = require('express');
import morgan = require('morgan');
import mongoose = require('mongoose');
import { Article } from './models/article';

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/njt-datastore';
//express app
const app = express();

//register view engie
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', join(process.cwd(), 'src', 'views'));

//connect to mongodb
mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log('connected to mongodb');

    //listen for requests
    app.listen(3000);
    console.log('listening on port 3000');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// Middleware and static files
app.use(morgan('dev'));
app.use(express.static(join(process.cwd(), 'public')));

app.get('/', (req: Request, res: Response) => {
  Article.find()
    .sort({ createdAt: 'desc' })
    .limit(3)
    .then((articles: any) => {
      console.log(articles);
      res.render('layout', {
        page: './pages/index',
        props: { title: 'Home', articles },
      });
    });
});

app.get('/about', (req: Request, res: Response) => {
  res.render('layout', { page: './pages/about', props: { title: 'About' } });
});

app.use('/articles', articlesRoute);

app.use((req: Request, res: Response) => {
  res.render('layout', {
    page: './pages/404',
    props: { title: 'Page Not Found' },
  });
});
