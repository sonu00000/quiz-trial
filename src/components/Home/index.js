import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-container">
      <div className="instructions-container">
        <h1>Instructions</h1>
        <ul className="instructions-list">
          <li>Total Questions: 10</li>
          <li>Type Of Questions: MCQ</li>
          <li>Duration: 10 mins</li>
          <li>Type Of Questions: MCQ</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
