import React, { PureComponent } from 'react';


class CounterButton extends PureComponent {
  render() {
    const { count, incrementCount, decrementCount } = this.props;
    return (
      <div className="counter-button">
         <h1>Count: {count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
       
      </div>
    );
  }
}

export default CounterButton;
