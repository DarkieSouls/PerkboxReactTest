import React, {Component} from "react"
import {Button, ButtonGroup} from "react-bootstrap"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  jobOption(count) {
    let jobs = []
    for (let i = 0; i < count; i++) {
      jobs.push(i);
    }
    const jobList = jobs.map(job => {
      return (
        <JobCard
          cardIndex={job}
        />
      )
    })
    if (!count) {
      return (
        <NoJob />
      )
    }
    return (
      <div>
        {jobList}
      </div>
    )
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <div className="panel">
          <ButtonGroup>
            <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
            <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
            <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
            <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
          </ButtonGroup>
        </div>
        {this.jobOption(this.state.jobCount)}
      </div>
    )
  }
}

class JobCard extends Component {
  render() {
    return (
      <div className="panel">
        <h2>Job {this.props.cardIndex + 1}</h2>
        <div>
          <div>
            <strong>What is your job occupation?</strong>
          </div>
          <div>
            {renderJobSelect()}
          </div>
        </div>
        <div>
          <div>
            <strong>Company name</strong>
          </div>
          <div>
            <input className="field"/>
          </div>
        </div>
        <div>
          <div>
            <strong>Income</strong>
          </div>
          <div>
            <input className="field"/>
          </div>
        </div>
      </div>
    )
  }
}

class NoJob extends Component {
  render() {
    return (
      <div className="panel">
        <strong>What is your current status?</strong>
        <div>
          {renderNoJobSelect()}
        </div>
      </div>
    )
  }
}

function renderJobSelect() {
  const values = [
    "Developer",
    "Tester",
    "Architect",
    "Designer",
    "Analyst"
  ];
  return (
    renderSelect(values)
  )
}

function renderNoJobSelect() {
  const values = [
    "Searching for a job",
    "Taking a break"
  ];
  return (
    renderSelect(values)
  )
}

function renderSelect(values) {
  const options = values.map(option => {
    return (
      <option>{option}</option>
    )
  })
  return (
    <select className="field">
      {options}
    </select>
  )
}
