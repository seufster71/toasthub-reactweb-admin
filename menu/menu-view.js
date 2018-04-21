import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function MenuView({menus}) {

  let columns = [];
  if (menus.appLabels != null && menus.appLabels.ADMIN_MENU_TABLE != null) {
    columns = menus.appLabels.ADMIN_MENU_TABLE;
  }
  return (
    <Table items={menus.items} columns={columns} />
  );
}

MenuView.propTypes = {
  menus: PropTypes.object
};
