import React, { Component } from 'react'
import Summary from './Summary'
import Summary2 from './Summary2'
import AddColorForm from './AddColorForm'
import AddColorForm2 from './AddColorForm2'
import Star from './StarRating'
import StarRating from './StarRating'

import './Chapter6.css';

class Chapter6 extends Component {
  render() {
    return (
      //<Summary />
      // <Summary title="tsefsefsefesfsefdsfesfskfjdlf" 
      //   ingredients="땅콩버터, 젤리, 식빵"
      //   steps="만들어" />
  
      // <AddColorForm />
      // <AddColorForm2 onNewColor={(title, color) => {
      //   console.log(`${title} // ${color}`)
      // }}/>

      <StarRating totalStars={7} starsSelected={3}/>
    )
  }
}

export default Chapter6