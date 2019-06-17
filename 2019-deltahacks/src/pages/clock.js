import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      switch: false,
      finished: false,
    }
  }
  componentWillMount() {
    this.getTimeUntil(this.props.startsIn, this.props.endsIn)
  }
  componentDidMount() {
    setInterval(
      () => this.getTimeUntil(this.props.startsIn, this.props.endsIn),
      1000
    )
  }
  leading0(num) {
    return num < 10 ? '0' + num : num
  }

  getTimeUntil(startsIn) {
    const startTime = Date.parse(startsIn) - Date.parse(new Date())
    const endTime = Date.parse(this.props.endsIn) - Date.parse(new Date())

    if (endTime < 0) {
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        switch: true,
        finished: true,
      })
    } else if (startTime < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0, switch: true })

      const seconds = Math.floor((endTime / 1000) % 60)
      const minutes = Math.floor((endTime / 1000 / 60) % 60)
      const hours = Math.floor((endTime / (1000 * 60 * 60)) % 24)
      const days = Math.floor(endTime / (1000 * 60 * 60 * 24))
      this.setState({ days, hours, minutes, seconds })
    } else {
      const seconds = Math.floor((startTime / 1000) % 60)
      const minutes = Math.floor((startTime / 1000 / 60) % 60)
      const hours = Math.floor((startTime / (1000 * 60 * 60)) % 24)
      const days = Math.floor(startTime / (1000 * 60 * 60 * 24))
      this.setState({ days, hours, minutes, seconds })
    }
  }
  render() {
    return (
      <p1
        style={{
          color: this.state.finished && '#ff4c4c',
          textDecoration: this.state.finished && 'line-through',
        }}
      >
        {this.state.switch
          ? `Ends in ${this.leading0(this.state.hours)}:${this.leading0(this.state.minutes)}:${this.leading0(this.state.seconds
            )}`
          : `Starts in ${this.leading0(this.state.hours)}:${this.leading0(this.state.minutes)}:${this.leading0(this.state.seconds
            )}`}
      </p1>
    )
  }
}
export default Clock
