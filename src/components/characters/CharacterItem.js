import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
          <li>
              <strong>Name:</strong> {item.name}
            </li>
          <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation[0]}
            </li>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
