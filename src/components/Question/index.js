const Question = props => {
  const {questionsList, index} = props
  //const {id, options, options_type, question_text} = questionsList[index]
  console.log(questionsList[index])
  return (
    <div className="question">
      <h2>{index + 1}</h2>
    </div>
  )
}

export default Question
