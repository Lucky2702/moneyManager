// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item, onDelete} = props
  const {id, title, amount, type} = item
  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <div className="transaction-list">
        <p className="list-text">{title}</p>
        <p className="list-text">{amount}</p>
        <p className="list-text">{type}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr className="sep" />
    </li>
  )
}

export default TransactionItem
