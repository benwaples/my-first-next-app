import React from 'react'
import { CharacterTypes } from '../utils/types'
import styles from '../styles/Filter.module.css'

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
    <input 
      className={styles.filter}
      type="text" 
      name="filterQuery" 
      id="filterQuery" 
      value={filterQuery}
      onChange={(e) => setFilterQuery(e.target.value)}
    /> 
  )
}

export default Filter
