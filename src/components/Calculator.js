import React from 'react';

const Calculator = () => {
  const handleClick = (buttonName) => (`${buttonName}clicked`);
  return (
    <div className="math-container">
      <div className="container">
        <h2 className="heading">Lets do some Math</h2>
        <section className="section">
          <div className="results gray-bg flex-container" />
          <button
            type="button"
            className="items item1 light-bg"
            onClick={() => handleClick('AC')}
          >
            AC
          </button>
          <button
            type="button"
            className="items item2 light-bg"
            onClick={() => handleClick('+/-')}
          >
            +/-
          </button>
          <button
            type="button"
            className="items item3 light-bg"
            onClick={() => handleClick('%')}
          >
            %
          </button>
          <button
            type="button"
            className="items item4 golden-bg"
            onClick={() => handleClick('/')}
          >
            /
          </button>
          <button
            type="button"
            className="items item5 light-bg"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            type="button"
            className="items item6 light-bg"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            type="button"
            className="items item7 light-bg"
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            type="button"
            className="items item8 golden-bg"
            onClick={() => handleClick('x')}
          >
            x
          </button>
          <button
            type="button"
            className="items item9 light-bg"
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            type="button"
            className="items item10 light-bg"
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            type="button"
            className="items item11 light-bg"
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            type="button"
            className="items item12 golden-bg"
            onClick={() => handleClick('+')}
          >
            +
          </button>
          <button
            type="button"
            className="items item13 light-bg"
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            type="button"
            className="items item14 light-bg"
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            type="button"
            className="items item15 light-bg"
            onClick={() => handleClick('3')}
          >
            3
          </button>
          <button
            type="button"
            className="items item16 golden-bg"
            onClick={() => handleClick('-')}
          >
            -
          </button>
          <button
            type="button"
            className="items item17 light-bg"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            type="button"
            className="items item18 golden-bg"
            onClick={() => handleClick('=')}
          >
            =
          </button>
        </section>
      </div>
    </div>
  );
};

export default Calculator;