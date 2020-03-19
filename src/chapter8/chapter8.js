import React from 'react'
import { createStore, combineReducers, compose } from 'redux'
import { colors, sort } from './reducers'
import * as ActionMaker from './actionMaker'

const Chapter8 = () => {
  const initialState = {
    colors: [
      {
        id: "111",
        title: "red",
        color: "#FF0000",
        rating: 3,
        timestamp: "20200101"
      },
      {
        id: "222",
        title: "blue",
        color: "#00FF00",
        rating: 4,
        timestamp: "20200201"
      },
      {
        id: "333",
        title: "green",
        color: "#0000FF",
        rating: 5,
        timestamp: "20200301"
      }
    ],
    sort: "SORTED_BY_TITLE"
  }

  //- store 생성 + 초기값 설정
  const store = createStore(
    combineReducers({ colors, sort }),
    //- 초기값 설정
    //initialState  

    //- localStorage 사용
    (localStorage['myData']) ?
      JSON.parse(localStorage['myData']) :
      {}
  )
  //console.log(store.getState())

  //- store 구독으로 dispatch내용 통지받음
  const logState = () => console.log("next state : ", store.getState())

  //- 리스너 등록 
  //const unsubscribeLogger = store.subscribe(logState)
  //- 리스너 해제하고 싶을 때 재호출
  //unsubscribeLogger() 

  store.subscribe(() => {
    //- localStorage에 추가
    localStorage['myData'] = JSON.stringify(store.getState())
    //console.log(localStorage['myData'])

    logState()
  })


  // store.subscribe(() => 
  //   console.log(store.getState())
  // )

  //- dispatch로 action 추가
  store.dispatch({
    type: "ADD_COLOR",
    id: "444",
    title: "white",
    color: "#FFFFFF",
    rating: 1,
    timestamp: "20200401"
  })
  //console.log(store.getState())

  store.dispatch({
    type: "RATE_COLOR",
    id: "444",
    rating: 5
  })
  //console.log(store.getState())
  
  //- 액션 생성기를 통한 dispatch
  store.dispatch(ActionMaker.removeColor("444"))
  store.dispatch(ActionMaker.sortColors("rating"))
  store.dispatch(ActionMaker.addColor("myColor", "#F0F0F0"))

  //- compose를 통한 함수 합성
  //  맨 아래서부터 역순으로 진행됨
  const print = compose(
    list => console.log(list),
    title => title.join(", "),
    map => map(c => c.title),
    colors => colors.map.bind(colors),
    state => state.colors
  )

  print(store.getState())

  return (
    <h1>hello</h1>
  )
}

export default Chapter8