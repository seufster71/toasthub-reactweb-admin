import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function CategoryView({category}) {

  let columns = [];
  if (category.appLabels != null && category.appLabels.ADMIN_CATEGORY_TABLE != null) {
    columns = category.appLabels.ADMIN_CATEGORY_TABLE;
  }

  return (
    <Table items={category.items} columns={columns} />
  );
}


CategoryView.propTypes = {
  category: PropTypes.object
};
