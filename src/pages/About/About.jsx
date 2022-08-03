import Header from '../../components/Header/Header'
import imgAbout from '../../assets/about.svg'
import './about.css'

function About() {
  return(
    <>
      <Header image={imgAbout}>Sobre mim</Header>
      <div className="about">
        <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="meu gif" />
        <div className="about-text">
          <h1>Prazer, Simara</h1>
          <p>Fiz migração de carreira após os 30 anos e vindo da área de marketing, Desenvolvedora de software na Thoughtworks e Criadora do podcast e canal quero ser dev</p>
        </div>
      </div>
    </>
    
  )
}

export default About