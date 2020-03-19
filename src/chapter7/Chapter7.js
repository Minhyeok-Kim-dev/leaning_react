import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom'
import MemberList from './MemberList'
import Clock from './Clock'
import HiddenMessages from './HiddenMessages'
import Children from './Children'
import CountryList from './CountryList'
import Timeline from './Timeline'

import './Chapter7.css';
import CountryDropDown from './CountryDropDown'
import PopupButton from './PopupButton'

import CountdownFlux from './CountdownFlux'
import Countdown from './Countdown'

const historicDatesForSkiing = [{
  year: 1879,
  event: "스키 생산 시작"
}, {
  year: 1882,
  event: "미국 스키 클럽 창설"
}, {
  year: 1924,
  event: "제1회 겨울 올림픽 개최"
}, {
  year: 1926,
  event: "첫 번째 미국 스키샵이 문을 염"
}, {
  year: 1932,
  event: "북아메리카 최초로 견인 로프(rope tow) 작동 시작"
}, {
  year: 1949,
  event: "스쿼벨리, 매드 리버 글렌 개장"
}, {
  year: 1958,
  event: "첫 번째 곤돌라 작동 시작"
}, {
  year: 1964,
  event: "플라스틱 버클 부츠 출시"
}]

class Chapter7 extends Component {
  // render() {
  //   return (
  //     <HiddenMessages />
  //     <Children />
  //     <CountryList />
  //     <Timeline name="스키의 역사" data={historicDatesForSkiing} />
  //     <CountryDropDown selected="Gabon" />

  //     <PopupButton hidden={true} txt="팝업 토글">
  //       <h1>숨겨진 콘텐츠</h1>
  //       <p>이 콘텐츠는 처음에 숨겨져 있습니다.</p>
  //     </PopupButton>
  //   )
  // }

  // flux
  
  render() {
    return (
      <h1></h1>
      //<Countdown count={10} />
      //<CountdownFlux />
    )
  }

}

export default Chapter7