import '../sass/components/examples.scss';
import cat from '../theme/cheshirskij_koti.gif';

import React, { Suspense } from "react";









const Box = React.lazy(() => import("./animation/box.jsx"));





const Personal = () => {
  return (
    <div className="examples" id='personal'>
      <h1 className='about-header'>О нас</h1>
      <Suspense fallback={<div className="loading">Загрузка...</div>}>
        
      <div className="App">

        <h1 className='examples-header'>Достижения 🏆</h1>
        <Box img={cat} className="tatu"/>
        
     
      </div>
    </Suspense>
    </div>
  );
};

export default Personal;
