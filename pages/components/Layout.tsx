import React from 'react'
import Header from './Header'

interface Props {
  children: JSX.Element
}

function Layout(props: Props) {
  const { children } = props

  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
}

export default Layout
