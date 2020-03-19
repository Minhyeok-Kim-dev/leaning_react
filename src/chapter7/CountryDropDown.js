import React from 'react'
import DataComponent from './DataComponent'
import CountryNames from './CountryName'

const CountryDropDown =
  DataComponent(
    CountryNames,
    "https://restcountries.eu/rest/v1/all"
  )

export default CountryDropDown