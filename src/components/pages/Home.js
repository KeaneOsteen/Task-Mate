import React from 'react'

export default function Home() {
  return (
    <div className='home-page'>
      <h1 style={{
        fontFamily: 'sans-serif',
        fontSizeAdjust: 'initial',
        fontSize: '150px',
        color: 'white',
        textAlign: 'center'
      }}>Task Mate</h1>
      <div class='wrapper'>
        <ul class="dynamic-txts">
          <li><span>Don't just list, make progress</span></li>
          <li><span>From To-Do To Completion</span></li>
        </ul>
      </div>
    </div>
  )
}
