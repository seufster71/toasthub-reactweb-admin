import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function RolesView({roles}) {

  let columns = [];
  if (roles.appLabels != null && roles.appLabels.ADMIN_ROLE_TABLE != null) {
    columns = roles.appLabels.ADMIN_ROLE_TABLE;
  }
  return (
    <Table items={roles.items} columns={columns} />
  );
}


RolesView.propTypes = {
  roles: PropTypes.object
};
