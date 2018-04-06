import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function PreferencesView({currentState, fields, texts, labels, path }) {


    return (
      <div>
        <div> Preferences Page {path} </div>
      </div>
    );
}


PreferencesView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object,
  texts: PropTypes.object,
  labels: PropTypes.object,
  path: PropTypes.string
};
