import React from 'react'
import { CharacterTypes } from '../../../utils/types'

interface Props {
  filterQuery: string;
  setFilterQuery: (q: string) => void;
}

function Filter(props: Props) {
  const {
    filterQuery,
    setFilterQuery
  } = props

  return (
    <input type="text" name="filterQuery" id="filterQuery" value={filterQuery} onChange={(e) => setFilterQuery(e.target.value)}/> 
  )
}

export default Filter
