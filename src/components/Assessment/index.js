import {Component} from 'react'
import Question from '../Question'

class Assessment extends Component {
  state = {
    status: 'loading',
    questionsList: [],
    numQuestions: null,
    index: 0,
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    try {
      const apiUrl = `https://apis.ccbp.in/assess/questions`
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(response)
      console.log(data)
      if (response.ok === true) {
        console.log(data.questions)
        this.setState({
          status: 'success',
          questionsList: data.questions,
          numQuestions: data.total,
        })
      } else {
        this.setState({status: 'failure'})
      }
    } catch (error) {
      //this.setState({status: 'failure'})
    }
  }

  render() {
    const {questionsList, index} = this.state
    return (
      <div className="assessment">
        <Question questionsList={questionsList} index={index} />
      </div>
    )
  }
}

export default Assessment
