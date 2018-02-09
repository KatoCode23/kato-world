import React from 'react';




export default class Clock extends React.Component {
constructor(props) {
    super(props);
    this.state = {date: new Date()};
    }

    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }

    componentWillUnmount() {
    clearInterval(this.timerID);
    }

    tick() {
    this.setState({
        date: new Date()
    });
    }

    render() {
    return (
        <div className="clock-content">
            <div className="clock">{this.state.date.toLocaleTimeString()}.</div>
            <p className="quote">"You must govern the clock, not be governed by it."</p>
        </div>
    );
    }
}