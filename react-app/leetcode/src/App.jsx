import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const problems1 = [{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%"
},{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "412%"
},
  {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  }];

  const problems2 = [{
    title: "new prob",
    difficulty: "Medium",
    acceptance: "42%"
},{
  title: "new prob2",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
      title: "new prob3",

        difficulty: "Easy",
        acceptance: "54.9%"
    }];

function App() {
  const [problems, setProblems] = useState([])


  return (
    <div>
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      <br />
      <button onClick={() =>{
        setProblems(problems => problems2)
      }}>1</button>
      <button onClick={() => {
        setProblems(problems => problems1)
      }}>2</button>
      
      <table>
        <tbody>
        {problems.map(problem => <RenderProblems
          title={problem.title}
          acceptance ={ problem.acceptance}
          difficulty= {problem.difficulty}
          />)}
        </tbody>
         
      </table>
    </div>
  )


}


function RenderProblems(props) {
  const {title, difficulty, acceptance} = props

  return <tr>
    <td>
      {title}
    </td>
    <td>
      {acceptance}
    </td>
    <td>
      {difficulty}
    </td>
  </tr>
}

export default App
