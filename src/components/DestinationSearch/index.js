// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchItem: ''}

  changingSearchInput = event => {
    this.setState({searchItem: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {searchItem} = this.state
    const {destinationsList} = this.props

    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return (
      <div className="ds-container">
        <div className="ds-inner-container">
          <h1 className="ds-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              value={searchItem}
              placeholder="Search"
              onChange={this.changingSearchInput}
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="ds-card-container">
            {filteredList.map(eachItem => (
              <DestinationItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
