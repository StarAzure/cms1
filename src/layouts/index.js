import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Blog Clouds" />
    <Navbar />
    <Hero />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
