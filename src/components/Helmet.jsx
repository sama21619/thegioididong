import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {

    document.title = 'Thegioididong - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
