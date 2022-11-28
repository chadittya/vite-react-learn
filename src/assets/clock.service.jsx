// JSX element
// export function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, Dunia</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// ES6 Class
import React from "react";

function FormatedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, Dunia</h1>
        <FormatedDate date={this.state.date} />
      </div>
    );
  }
}
