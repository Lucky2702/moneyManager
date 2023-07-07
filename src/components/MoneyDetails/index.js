// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  const balanceImgUrl =
    'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png'
  const incomeImgUrl =
    'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'
  const expensesImgUrl =
    'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png'

  return (
    <div className="money-list">
      <li className="balance-list">
        <img src={balanceImgUrl} alt="balance" className="transaction-img" />
        <div>
          <p className="your-money">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="income-list">
        <img src={incomeImgUrl} alt="income" className="transaction-img" />
        <div>
          <p className="your-money">
            Your <br />
            Income
          </p>
          <p className="money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="expenses-list">
        <img src={expensesImgUrl} alt="expenses" className="transaction-img" />
        <div>
          <p className="your-money">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
