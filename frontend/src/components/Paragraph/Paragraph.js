import React from 'react'

const Paragraph = ({text}) => {
  return (
    <div className='paragraph-group'>
        {text.map((item, index) => (
                <p key={index}>{item.text}</p>
            ))}
    </div>
  )
}

export default Paragraph
