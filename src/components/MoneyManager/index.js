import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    inputTitle: '',
    inputAmount: '',
    inputType: 'Income',
    transactionList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {
      inputTitle,
      inputAmount,
      inputType,
      balance,
      income,
      expenses,
    } = this.state
    const newTransaction = {
      id: v4(),
      title: inputTitle,
      amount: inputAmount,
      type: inputType,
    }
    let updateBalance
    let updateIncome
    let updateExpenses
    if (inputType === 'Income') {
      updateBalance = parseInt(balance) + parseInt(inputAmount)
      updateIncome = parseInt(income) + parseInt(inputAmount)
      updateExpenses = expenses
    } else {
      updateBalance = parseInt(balance) - parseInt(inputAmount)
      updateExpenses = parseInt(expenses) + parseInt(inputAmount)
      updateIncome = income
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      inputTitle: '',
      inputAmount: '',
      inputType: 'Income',
      balance: updateBalance,
      income: updateIncome,
      expenses: updateExpenses,
    }))
  }

  onDelete = id => {
    const {balance, income, expenses, transactionList} = this.state
    const filterTransactionList = transactionList.filter(each => each.id !== id)
    const deletedList = transactionList.filter(each => each.id === id)
    const amount = parseInt(deletedList[0].amount)
    console.log(amount)
    let updateBalance
    let updateIncome
    let updateExpenses
    if (deletedList[0].type === 'Income') {
      updateBalance = parseInt(balance) - amount
      updateIncome = parseInt(income) - amount
      updateExpenses = expenses
    } else {
      updateBalance = parseInt(balance) + amount
      updateExpenses = parseInt(expenses) - amount
      updateIncome = income
    }
    this.setState({
      transactionList: filterTransactionList,
      balance: updateBalance,
      income: updateIncome,
      expenses: updateExpenses,
    })
  }

  onChangeInputTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeType = event => {
    this.setState({inputType: event.target.value})
  }

  render() {
    const {
      inputTitle,
      inputAmount,
      inputType,
      transactionList,
      balance,
      income,
      expenses,
    } = this.state

    return (
      <div className="app-container">
        <div className="card-top">
          <h1 className="heading-name">Hi, Richard</h1>
          <p className="heading-text">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="money-detail-container">
          <MoneyDetails
            balance={balance}
            income={income}
            expenses={expenses}
            key="money"
          />
        </ul>
        <div className="input-history-container">
          <div className="input-container">
            <h1 className="input-heading">Add Transaction</h1>
            <form onSubmit={this.onAddTransaction} className="form">
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                value={inputTitle}
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeInputTitle}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                value={inputAmount}
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeInputAmount}
              />
              <label htmlFor="title" className="label">
                Type
              </label>
              <select
                value={inputType}
                className="input"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.displayText} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="input-heading">History</h1>
            <div className="transaction-container">
              <div className="transaction-item">
                <div className="title-texts">
                  <p className="transaction-title">Title</p>
                  <p className="transaction-title">Amount</p>
                  <p className="transaction-title">Type</p>
                </div>
                <hr className="sep" />
                <ul>
                  {transactionList.map(each => (
                    <TransactionItem
                      item={each}
                      key={each.id}
                      onDelete={this.onDelete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
