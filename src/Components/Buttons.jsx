/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setFinger, setBreakfast, setLunch, setShakes, setDrink }) => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Buttons"
      css={css`
        display: flex;

        button {
          margin: 0 2rem;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: 0.3s linear;
          outline: none;

          ${mq[2]} {
            margin: 0 1rem;
          }
          ${mq[0]} {
            margin: 0;
            margin-top: 2rem;
          }

          &::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #24242a;
            transition: width 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }

          span {
            padding: 0 5px;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            margin: auto;
            ${mq[2]} {
              padding: 0;
            }
            ${mq[0]} {
              font-size: 0.9rem;
            }
          }
        }
      `}
    >
      <button
        onClick={() => {
          setFinger(true);
          setBreakfast(false);
          setLunch(false);
          setShakes(false);
          setDrink(false);
        }}
      >
        <span>Finger Foods</span>
      </button>

      <button
        onClick={() => {
          setBreakfast(true);
          setFinger(false);
          setLunch(false);
          setShakes(false);
          setDrink(false);
        }}
      >
        <span>Pizza & Focaccia</span>
      </button>

      <button
        onClick={() => {
          setLunch(true);
          setFinger(false);
          setBreakfast(false);
          setShakes(false);
          setDrink(false);
        }}
      >
        <span>Hamburger</span>
      </button>

      <button
        onClick={() => {
          setShakes(true);
          setFinger(false);
          setBreakfast(false);
          setLunch(false);
          setDrink(false);
        }}
      >
        <span>Dolci</span>
      </button>

      <button
        onClick={() => {
          setDrink(true);
          setFinger(false);
          setBreakfast(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span>Drink</span>
      </button>
    </div>
  );
};

export default Buttons;
