import '../sass/components/examples.scss';
import cat from '../theme/cheshirskij_koti.gif';

import React, { Suspense } from "react";









const Box = React.lazy(() => import("./animation/box.jsx"));
const BoxAbout = React.lazy(() => import("./animation/boxAbout.jsx"));





const Contacts = () => {
  return (
    <div className="examples" id='contacts'>
      <h1 className='about-header'>О нас</h1>
      <Suspense fallback={<div className="loading">Загрузка...</div>}>
        
      <div className="App">
      <h1 className='examples-header'>Компания 🏢</h1>
        <BoxAbout className="tatu" text={<h3 className="company">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </h3>} />
        <h1 className='examples-header'>Достижения 🏆</h1>
        <Box img={cat} className="tatu"/>
        
     
      </div>
    </Suspense>
    </div>
  );
};

export default Contacts;
