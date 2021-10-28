import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1,
  };

  handleIncrease = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log("hey");
    });
  };

  handleDecrease = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>Fixed Value: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;

/*
getSnapshotBeforeUpdate 

참고로 함수형 컴포넌트 + Hooks 를 사용 할 때에는 
이 getSnapshotBeforeUpdate 를 대체할 수 있는 기능이 아직 없습니다. 
DOM 에 변화가 반영되기 직전에 DOM 의 속성을 확인하고 싶을 때 
이 생명주기 메서드를 사용하면 된다는 것을 알아두세요.
*/
