import React, { component } from 'react'
import Fintechtocat from './images/Fintechtocat.jpeg'
import Brennatocat from './images/Brennatocat.jpeg'
import filmtocats from './images/filmtocats.jpeg'
import Umbrellatocat from './images/puddle_jumper_octodex.jpeg'
import Boxertocat from './images/boxertocat_octodex.jpeg'
import Surftocat from './images/surftocat.jpeg'
import img1 from './images/1.jpeg'
import img2 from './images/2.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'
import img6 from './images/6.jpeg'

import Octocats from './components/Octocats'

const App = () => {
  return (
    <>
      <header>
      <section class = "hf">
        <a href='https://octodex.github.com/' class = 'o'> Octodex </a>
        
          
            <a href='https://octodex.github.com/'class = 'h'>Home</a>
         
         
            <a href='https://octodex.github.com/faq/'class= 'f'>FAQ</a>
         
            </section>
          
            <a href='https://twitter.com/githubdesign' class = "follow">Follow us on Twiter</a>
        
          
            <a href='https://github.com/' class = 'back'>Back to GitHub.com</a>
         
        
      </header>
      <main>
        <ul>
          <Octocats
            image={Fintechtocat}
            number='#148:'
            name='Fintechtocat'
            imagep={img1}
          />
          <Octocats
            image={Brennatocat}
            number='#147:'
            name='Brennatocat'
            imagep={img2}
          />
          <Octocats
            image={filmtocats}
            number='#146:'
            name='Filmtocats'
            imagep={img3}
          />
          <Octocats
            image={Umbrellatocat}
            number='144:'
            name='Umbrellatocat'
            imagep={img4}
          />
          <Octocats
            image={Boxertocat}
            number='143:'
            name='Boxertocat'
            imagep={img5}
          />
          <Octocats
            image={Surftocat}
          
            number='#142:'
            name='Surftocat'
            imagep={img6}
          />
        </ul>
      </main>
    </>
  )
}

export default App
