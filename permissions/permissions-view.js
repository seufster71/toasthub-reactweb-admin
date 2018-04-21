import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function PermissionsView({permissions}) {

  let columns = [];
  if (permissions.appLabels != null && permissions.appLabels.ADMIN_PERMISSION_TABLE != null) {
    columns = permissions.appLabels.ADMIN_PERMISSION_TABLE;
  }

  return (
    <Table items={permissions.items} columns={columns} />
  );
}


PermissionsView.propTypes = {
  permissions: PropTypes.object
};
