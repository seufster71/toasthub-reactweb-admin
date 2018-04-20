import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';


export default function LanguageView({languages }) {

  let columns = [];
  if (languages.appLabels != null && languages.appLabels.ADMIN_LANGUAGE_TABLE != null) {
    columns = languages.appLabels.ADMIN_LANGUAGE_TABLE;
  }
  return (
      <Table items={languages.items} columns={columns} />
  );
}


LanguageView.propTypes = {
  languages: PropTypes.object
};
