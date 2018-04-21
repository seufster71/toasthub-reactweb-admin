import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function UsersView({users}) {

    let columns = [];
    if (users.appLabels != null && users.appLabels.ADMIN_USER_TABLE != null) {
      columns = users.appLabels.ADMIN_USER_TABLE;
    }

    return (
      <Table items={users.items} columns={columns} />
    );
}


UsersView.propTypes = {
  users: PropTypes.object
};
