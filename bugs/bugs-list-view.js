import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function BugsListView({bugs}) {


    let columns = [];
    if (bugs.prefLabels != null && bugs.prefLabels.ADMIN_BUG_TABLE != null) {
      columns = bugs.prefLabels.ADMIN_BUG_TABLE;
    }
    return (
      <Table items={bugs.items} columns={columns} />
    );
}


BugsListView.propTypes = {
  bugs: PropTypes.object
};
