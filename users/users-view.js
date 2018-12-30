import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function UsersView({containerState, users, appPrefs, onPageLimitChange,
  onSearchChange, onSearchClick, onPaginationClick, onFilterClick}) {

    let columns = [];
    if (users.appLabels != null && users.appLabels.ADMIN_USER_TABLE != null) {
      columns = users.appLabels.ADMIN_USER_TABLE;
    }

    return (
      <Table
      containerState={containerState}
      header={users.appTexts.ADMIN_USER_PAGE.ADMIN_USER_PAGE_HEADER}
      items={users.items}
      itemCount={users.itemCount}
      pageStart={users.pageStart}
      pageLimit={users.pageLimit}
      columns={columns}
      appPrefs={appPrefs}
      onPageLimitChange={onPageLimitChange}
      onSearchChange={onSearchChange}
      onSearchClick={onSearchClick}
      onPaginationClick={onPaginationClick}
      onFilterClick={onFilterClick}
      />
    );
}


UsersView.propTypes = {
  users: PropTypes.object
};
