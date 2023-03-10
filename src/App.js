import './App.css';
import { Testimonio } from './components/Testimonio';



export const App = () => {

  return (

    <div className='App'>
      <div className='container-main'>
          <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimonio 
          name='Shawn Wang'
          country='Singapore'
          img='1'
          cargo='Software Engineer'
          enterprise='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
          />
          <Testimonio
           name='Sara Chima'
           country='Nigeria'
           img='2'
           cargo='Software Engineer'
           enterprise='ChatDesk'
           testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
          />
          <Testimonio
           name='Emma Bostian'
           country='Suecia'
           img='3'
           cargo='Software Engineer'
           enterprise='Spotify'
           testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'
          />
     </div>
    </div>
  );
}

