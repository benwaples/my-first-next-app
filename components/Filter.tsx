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
    <div className={styles.filter}>
      Search
      <input 
        type="text" 
        name="filterQuery" 
        id="filterQuery" 
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
      /> 
      <div className={styles.buttonContainer}>
        <div className={styles.yellowSquare}/>
        <div className={styles.yellowSquare}/>
        <div className={styles.redCircle}/>
        <div className={styles.blueCircle}/>
        
      </div>
    </div>
  )
}

export default Filter
