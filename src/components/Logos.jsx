import React from 'react'

const Logos = () => {
    const logoNum = Array.from({length: 6}, (_, i) => i+1)

  return (
    <div className='my-4 py-2 flex justify-evenly items-center'>
        {
            logoNum.map(logo => {
                return <img src={`./logo${logo}.svg`} className='w-24 h-24'/>
            })
        }
    </div>
  )
}

export default Logos