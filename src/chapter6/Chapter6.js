import React, { Component } from 'react'
import Summary from './Summary'
import Summary2 from './Summary2'
import AddColorForm from './AddColorForm'
import AddColorForm2 from './AddColorForm2'
import Star from './StarRating'
import StarRating from './StarRating'
import ColorList from './ColorList'
import { v4 } from 'uuid'


import './Chapter6.css';

class Chapter6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({ colors })
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ?
        color:
        {
          ...color,
          rating
        }
    )
    this.setState({ colors })
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
      this.setState({ colors })
  }

  render() {
    const { addColor, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      //<Summary />
      // <Summary title="tsefsefsefesfsefdsfesfskfjdlf" 
      //   ingredients="땅콩버터, 젤리, 식빵"
      //   steps="만들어" />
  
      // <AddColorForm />
      // <AddColorForm2 onNewColor={(title, color) => {
      //   console.log(`${title} // ${color}`)
      // }}/>

      // <StarRating totalStars={7} starsSelected={3}/>
      <div>
        <AddColorForm2 onNewColor={(addColor)} />
        <ColorList colors = {colors} 
          onRate={rateColor}
          onRemove={removeColor} />
      </div>
    )
  }
}

export default Chapter6