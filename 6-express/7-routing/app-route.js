import express from 'express';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
// 큰 도메인이 posts와 users에 있다는 것을 한눈에 알기 쉽다.
// router를 사용하면 모듈감 있게 사용 가능

app.listen(8080);
