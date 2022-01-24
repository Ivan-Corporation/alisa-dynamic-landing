import '../sass/components/examples.scss';
import cat from '../theme/cheshirskij_koti.gif';

import React, { Suspense } from "react";
import { render } from "react-dom";

import "../sass/components/stuff.css";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax
} from "react-scroll-parallax";


const BoxAbout = React.lazy(() => import("./animation/boxAbout.jsx"));




const initialState = {
  slideIndex: 0
};

const slides = [
  {
    title: "Таня",
    subtitle: "Парикмахер",
    description: "Любит единорогов 🌈",
    image:
      "https://img.zet.com/products/48626/421798_48626_1532064050_1000.png"
  },
  {
    title: "Валя",
    subtitle: "Визажист",
    description: "Ne touche pas ton visage 🤭",
    image:
      "https://static.tildacdn.com/tild3464-6263-4664-b163-366663393037/kimmeru742noroot.png"
  },
  {
    title: "Женька",
    subtitle: "Тату мастер",
    description: "Истинный маори 👣",
    image:
      "https://sun9-70.userapi.com/impf/c840637/v840637336/595c2/eQwNxESh8-0.jpg?size=604x604&quality=96&sign=45678325d579c821cb927bc5e55cd803&type=album"
  },
  {
    title: "Тетя Зина",
    subtitle: "Уборщица",
    description: "Моет полы 👍",
    image:
      "http://itd2.mycdn.me/image?id=900207145362&t=20&plc=MOBILE&tkn=*wqYHSz50WSHV9RksV9xXIjpHEX0"
  },
  {
    title: "Шлёпа",
    subtitle: "МасКот",
    description: "Завлекает посетителей 🐈",
    image:
      "https://i.pinimg.com/736x/90/0a/b7/900ab76cf0c3b2fe8683e0e2039beb00.jpg"
  },
  {
    title: "Алиса",
    subtitle: "Администратор",
    description: "Вроде что-то делает 👸",
    image:
      "https://c.podium.im/photo/29445/2248/5ae903981dd3d.jpg"
  },
  {
    title: "Иван",
    subtitle: "Клоун",
    description: "Развлекает посетителей 🤡",
    image:
      "https://image.noelshack.com/fichiers/2020/45/5/1604689482-pepe-clown-sad-main.png"
  },
];




const slidesReducer = (state, event) => {
  const midNumber = Math.round((slides.length - 1) / 2);
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex < midNumber ? state.slideIndex + 1 : -1 * midNumber
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex > -1 * midNumber ? state.slideIndex - 1 : midNumber
    };
  }
};

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}


function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}


const ImageScroller = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const midNumber = Math.round((slides.length - 1) / 2);
  return (
    <div className="slide-container">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>{" "}
        {slides.map((slide, i) => {
          let offset = -1 * (midNumber + (state.slideIndex - i));
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
};

const Stuff = () => {
  return (
    <div className="examples" id='personal'>
      <h1 className='about-header'>О нас</h1>
      <Suspense fallback={<div className="loading">Загрузка...</div>}>

        <div className="App">

          <h1 className='examples-header'>Сотрудники 💇</h1>
          <div className='stuffcarousel'><BoxAbout text={<ImageScroller />} className="personalabout" /></div>


        </div>
      </Suspense>
    </div>
  );
};

export default Stuff;
