import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectCategory, fetchCategories } from '../actions/actions'
import Picker from '../components/Picker'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  handleChange(nextCategory) {
    this.props.dispatch(selectCategory(nextCategory))
  }

  render() {
    const { selectedCategory, categories, isFetching} = this.props

    return (
      <div>
        <Picker value={selectedCategory}
                onChange={this.handleChange}
                options={categories} />

        {isFetching ? <h2>Loading...</h2> : <h2></h2>}

      </div>
    )
  }
}

App.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    selectedCategory: state.selectedCategory,
    categories: state.categoriesByServer.categories,
    isFetching: state.categoriesByServer.isFetching,
  }
}

export default connect(mapStateToProps)(App)
