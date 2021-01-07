import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import style from "./header.module.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="site-header" className={style.masthead}>
    <div className={style.masthead_info}>
      <Link to="/">
        <img
          src="/logo.svg"
          width="366"
          height="374"
          alt={siteTitle}
          className={style.site_logo}
        />
        <div className={style.site_title}>{siteTitle}</div>
        <div>{siteDescription}</div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
