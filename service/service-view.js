import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function ServiceView({services}) {

  let columns = [];
  if (services.appLabels != null && services.appLabels.ADMIN_SERVICE_CRAWLER_TABLE != null) {
    columns = services.appLabels.ADMIN_SERVICE_CRAWLER_TABLE;
  }
  return (
    <Table items={services.items} columns={columns} />
  );
}


ServiceView.propTypes = {
  services: PropTypes.object
};
