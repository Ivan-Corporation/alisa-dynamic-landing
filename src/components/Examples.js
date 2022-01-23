import '../sass/components/examples.scss';
import manikur from '../theme/collages/manikur.jpg';
import tatu from '../theme/collages/tatu.jpg';
import hairs from '../theme/collages/hairs.jpg';
import React, { Suspense } from "react";









const Box = React.lazy(() => import("./animation/box.jsx"));




const Examples = () => {
  return (
    <div className="examples" id='examples'>
      <h1 className='examplessuper-header'>Примеры Работ</h1>
      <Suspense fallback={<div className="loading">Загрузка...</div>}>
        
      <div className="App">
      <h1 className='examples-header'>Маникюр 💅</h1>
        <Box img={manikur} className="tatu"/>
        <h1 className='examples-header'>Татуаж 👩</h1>
        <Box img={tatu} className="tatu"/>
        <h1 className='examples-header'>Прически 🦱</h1>
        <Box img={hairs} className="tatu"/>
       
        
      </div>
    </Suspense>
    </div>
  );
};

export default Examples;
