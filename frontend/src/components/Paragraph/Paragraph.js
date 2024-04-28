import React from 'react'

const Paragraph = ({text}) => {
  return (
    <div>
        {text.map((item, index) => (
                <p key={index}>{item.text}</p>
            ))}
    </div>
  )
}

export default Paragraph
