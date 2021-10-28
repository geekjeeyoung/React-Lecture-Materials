import React from "react";
import { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "No name",
  };
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        Hello {name}
      </div>
    );
  }
}

// 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면,
// babel이 JSX를 JavaScript로 변환해 준다.

export default Hello;
