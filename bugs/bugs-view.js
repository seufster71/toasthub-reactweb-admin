import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function BugsView({bugs}) {


    let columns = [];
    if (bugs.appLabels != null && bugs.appLabels.ADMIN_BUGS_TABLE != null) {
      columns = bugs.appLabels.ADMIN_BUGS_TABLE;
    }
    return (
      <Table items={bugs.items} columns={columns} />
    );
}


BugsView.propTypes = {
  bugs: PropTypes.object
};
