import {useState, useEffect} from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import './others.css'
import axios from 'axios'

const Portfolio = () => {
  const [repositories, setRepositories] = useState([])
  const baseURL = 'https://api.github.com/users/simaraconceicao/repos'

  useEffect(()=>{
    async function getData(){
      axios.get(baseURL)
        .then((response) => setRepositories(response.data))
    }
    getData()
  
  },[])

  return(
    <>
      <h1 className="titulo">Outros Projetos no meu Github</h1>
      <div className="main">
          <div className="card-container" >
            {repositories.map(repo=>
              <div className="card">
                <h3 key={repo.id}>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo">
                  <BsArrowReturnRight size={16} color="#fff"/>
                </a>
              </div>
            )}
          </div>
      </div>
    </>
  )
}

export default Portfolio 
