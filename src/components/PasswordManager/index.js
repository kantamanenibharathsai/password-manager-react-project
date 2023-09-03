import {Component} from 'react'

import {v4} from 'uuid'

import InputItem from '../InputSection'

import './index.css'

class PasswordManager extends Component {
  state = {
    itemsList: [],
    websiteInput: '',
    username: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  onAddPasswordList = event => {
    event.preventDefault()
    const {websiteInput, username, passwordInput} = this.state

    const newItem = {
      id: v4(),
      websiteInput,
      username,
      passwordInput,
    }

    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      websiteInput: '',
      username: '',
      passwordInput: '',
    }))
  }

  onDeleteItem = id => {
    const {itemsList} = this.state
    const updatedList = itemsList.filter(each => each.id !== id)

    this.setState({itemsList: updatedList})
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p className="no-passwords-text">No Passwords</p>
    </div>
  )

  render() {
    const {
      websiteInput,
      username,
      passwordInput,
      isChecked,
      itemsList,
      searchInput,
    } = this.state

    const updatedList = itemsList.filter(eachItem =>
      eachItem.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = updatedList.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />

        <div className="top-container">
          <div className="password-manager-img-container-small-devices">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>

          <div className="password-manager-img-container-large-devices">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>

          <form className="form-element" onSubmit={this.onAddPasswordList}>
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                value={websiteInput}
                placeholder="Enter Website"
                className="input-field"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                value={username}
                placeholder="Enter Username"
                className="input-field"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                value={passwordInput}
                placeholder="Enter Password"
                className="input-field"
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <div className="bottom-container">
          <div className="search-input-count-container">
            <div className="your-password-text-count-container">
              <h1 className="your-password-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input-element"
                onChange={this.updateSearchList}
              />
            </div>
          </div>
          <hr className="horizontal-rule-element" />
          <div className="checkbox-element-container">
            <input
              type="checkbox"
              checked={isChecked}
              id="showPassword"
              onChange={this.onChecked}
              className="input-checkbox-element"
            />
            <label className="show-password-text" htmlFor="showPassword">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            this.renderNoPasswordsView()
          ) : (
            <ul className="list-items-container">
              {updatedList.map(each => (
                <InputItem
                  key={each.id}
                  itemDetails={each}
                  isChecked={isChecked}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
