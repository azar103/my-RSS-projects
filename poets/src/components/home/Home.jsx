import React from 'react';
import './home.css';
import AuthorOfTheDay from '../authorOfTheDay/AuthorOfTheDay';

const Home = props => (
  <div className="homepage">
    <article className="info-block">
      <h1>Поэзия Беларуси</h1>
      <p>Добро пожаловать на нашу страничку посвященную Поэтам Беларуси!</p>
      <p>
        Благодаря данному ресурсу вы можете быстро найти необходиомого Вам поэта и ознакомиться с
        его деятельностью.
      </p>
      <p className="literature-info">
        В области художественного творчества белорусская народность имеет богатый фольклор,
        разнообразную письменность и яркую литературу нового времени, зародившуюся еще в начале
        прошлого века, обогатившуюся в последние дни. До настоящего времени в Белоруссии собрано
        большое количество весьма ценных художественных фольклорных материалов.
      </p>
    </article>

    <article className="author-of-the-day">
      <AuthorOfTheDay {...props} />
    </article>
  </div>
);

export default Home;
