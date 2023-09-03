import './index.css'

/* const backgroundColors = [
  '#9ba9eb',
  '#c3caea',
  '#5763a5',
  '#f8fafc',
  '#454f84',
  '#0b69ff',
  '#94a3b8',
  '#b6c3ca',
  '#7683cb',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#ffffff',
  '#0ea5e9',
  '#64748b',
] */

const InputItem = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {id, websiteInput, passwordInput, username} = itemDetails

  const passwordItem = isChecked ? (
    <p className="username-para">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )
  const initial = websiteInput[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="initial-details-container">
        <p className="initial">{initial}</p>
        <div className="username-password-url-container">
          <p className="website-input-para">{websiteInput}</p>
          <p className="username-para">{username}</p>
          {passwordItem}
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default InputItem
