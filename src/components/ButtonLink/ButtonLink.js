import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './buttonLink.scss'

function ButtonLink({ link, text, color, type }) {
  const btnStyle = type === 'simple' ? 'link' : '';
  return (
    <Link
      className={['btn-link', btnStyle].join(' ')}
      to={link}
      title={text}> {text}
    </Link>
  )
}
export default ButtonLink;
ButtonLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['simple', 'btn']),

};
ButtonLink.defaultProps = {
  text: 'See More',
  type: 'btn',
};
