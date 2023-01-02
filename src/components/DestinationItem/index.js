// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem

  return (
    <li className="di-card-container">
      <img src={imgUrl} className="di-card-img" alt={name} />
      <p className="di-card-heading">{name}</p>
    </li>
  )
}

export default DestinationItem
