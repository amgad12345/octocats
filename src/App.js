import React, { component } from 'react'
import Fintechtocat from './images/Fintechtocat.jpeg'
import Brennatocat from './images/Brennatocat.jpeg'
import filmtocats from './images/filmtocats.jpeg'
import Umbrellatocat from './images/puddle_jumper_octodex.jpeg'
import Boxertocat from './images/boxertocat_octodex.jpeg'
import Surftocat from './images/surftocat.jpeg'
import octo from './images/octo.jpeg'
import Octogatos from './images/Octogatos.jpeg'
import Sentrytocat_octodex from './images/Sentrytocat_octodex.jpeg'
import Adacats from './images/Adacats.jpeg'
import hula_loop_octode from './images/hula_loop_octode.jpeg'
import img1 from './images/1.jpeg'
import img2 from './images/2.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'
import img6 from './images/6.jpeg'
import adacatsface from './images/adacatsface.jpeg'
import sentrycoatface from './images/sentrycoatface.jpeg'

import Octocats from './components/Octocats'

const App = () => {
  return (
    <>
      <header>
          <section class = "left">
          <div class="logo"><a href=""><img id ="octo-icon" alt = "git hub logo" src={octo} /></a></div>
            <a href='https://octodex.github.com/' class = 'o'> Octodex </a>
            <a href='https://octodex.github.com/'class = 'h'>Home</a>
            <a href='https://octodex.github.com/faq/'class= 'f'>FAQ</a>
          </section>
           <section class = "right">
           <div><a href='https://twitter.com/githubdesign' class = "follow">Follow us on Twiter</a></div>
           <div> <a href='https://github.com/' class = 'back'>Back to GitHub.com</a></div>
            </section>    
      </header>
      <main>
        <ul>
        <Octocats
            image={Octogatos}
            number='#148:'
            name='Octogatos'
            imagep={adacatsface}
          />
        <Octocats
            image={Adacats}
            number='#147:'
            name='Adacats'
            imagep={adacatsface}
          />
          <Octocats
            image={Fintechtocat}
            number='#146:'
            name='Fintechtocat'
            imagep={img1}
          />
          <Octocats
            image={Brennatocat}
            number='#145:'
            name='Brennatocat'
            imagep={img2}
          />
          <Octocats
            image={filmtocats}
            number='#144:'
            name='Filmtocats'
            imagep={img3}
          />
          <Octocats
            image={Sentrytocat_octodex}
            number='143:'
            name='Sentrytocat'
            imagep={sentrycoatface}
          />
          <Octocats
            image={Umbrellatocat}
            number='142:'
            name='Umbrellatocat'
            imagep={img4}
          />
          <Octocats
            image={Boxertocat}
            number='141:'
            name='Boxertocat'
            imagep={img5}
          />
          <Octocats
            image={Surftocat}
            number='#140:'
            name='Surftocat'
            imagep={img6}
          />
          <Octocats
            image={hula_loop_octode}
            number='#139:'
            name='Surftocat'
            imagep={img4}
          />
        </ul>
      </main>
    </>
  )
}

export default App
