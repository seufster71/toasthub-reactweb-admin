import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function AdminView(props) {

    return (
      <div>
        {props.children}
      </div>
    );
}


AdminView.propTypes = {
  children: PropTypes.array
};
