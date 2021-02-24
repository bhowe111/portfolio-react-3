import React from "react";
import RightArrow from "../images/rightarrow-nobg.png";

console.clear();

const slides = [
  {
    title: "Duo Noire",
    subtitle: "Night Triptych interview",
    description:
      "Album release interview for Chamber  Music Magazine, all pieces by female composers",
    image:
      "https://images.squarespace-cdn.com/content/v1/55c8a213e4b08793bdd1dc40/1526235968963-UJ1EHBY3Z37Z5PXU3H0V/ke17ZwdGBToddI8pDm48kEYgnIkz7dwsOdoAu8gcW3J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmGHgEVW2Xh-yUJXyO3Z6YHF0oYaG8J8uu5y1ssKQNlUNPe3Sb49j6qnZmO9hPRrEr/Chamber+Music+America+Duo+Noire+Feature+Article.png?format=750w",
    link: "https://duonoire.com",
  },
  {
    title: "Third Angle Music",
    subtitle: "Portland",
    description: "Contemporary Music Cooperative",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b09f06cf8370ad65113b318/1527538837439-2ZL8DVUSMGWVWK2UBU78/ke17ZwdGBToddI8pDm48kICndz-T9Ge4MSoSGE8R8LNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHbgp9B9pBhRilCWoxHw6g8E3P16rrsK_yi50qfqtBQmO87Nsj43NRAr6WuWZv5DKs/CMM.jpeg?format=500w",
    link:
      "https://static1.squarespace.com/static/5b09f06cf8370ad65113b318/t/5b0c64ec0e2e723b7480f23b/1527538930612/CMmagazine_profile.pdf",
  },
  {
    title: "Yuval Sharon Opera",
    subtitle: "Los Angeles",
    description: "An opera in 26 cars",
    image:
      "https://van-magazine.com/wp-content/uploads/sites/2/2017/03/umbau_us_44-380x230.jpg",
    link: "https://van-us.atavist.com/nonlinearity",
  },
  {
    title: "Quantum Computing",
    subtitle: "AI",
    description: "Insight article for Logic 20/20",
    image:
      "https://www.logic2020.com/media/k2/items/cache/42121f00ffc451d0c288e11c1f28cbd4_M.jpg",
    link: "https://www.logic2020.com/insight/quantum-computing",
  },
  {
    title: "Customer Experience Management",
    subtitle: "Insights",
    description: "Insight article for Logic 20/20",
    image:
      "https://www.logic2020.com/media/k2/items/cache/1d73e13563b8be946c0f00bab252d7ea_M.jpg",
    link: "https://www.logic2020.com/insight/customer-experience-management",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
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

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const ref = useTilt();
  const active = offset === 0 ? true : null;
  return (
    <div
      ref={active ? ref : null}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        backgroundImage: `url('${slide.image}')`,
      }}
    >
      <a
        className="slide-link"
        target="_blank"
        rel="noreferrer"
        href={slide.link}
      >
        <img src={RightArrow} alt="view  page" style={{ maxHeight: "50px" }} />
      </a>
    </div>
  );
}

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button
        style={{ color: `${({ theme }) => theme.mainText}` }}
        onClick={() => dispatch({ type: "NEXT" })}
      >
        NEXT
      </button>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} />;
      })}

      <button
        style={{ color: `${({ theme }) => theme.mainText}` }}
        onClick={() => dispatch({ type: "PREV" })}
      >
        PREV
      </button>
    </div>
  );
}

export default Carousel;
