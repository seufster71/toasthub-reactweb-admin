import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '../../coreView/common/list';
import Search from '../../coreView/common/search';

export default function PreferencesView({containerState, preferences, appPrefs, onPageLimitChange,
  onSearchChange, onSearchClick, onPaginationClick, onFilterClick}) {

  let columns = [];
  if (preferences.appLabels != null && preferences.appLabels.ADMIN_PREFERENCE_TABLE != null) {
    columns = preferences.appLabels.ADMIN_PREFERENCE_TABLE;
  }
  return (
    <div className="main_content">
      <List
      containerState={containerState}
      header={preferences.appTexts.ADMIN_PREFERENCE_PAGE.ADMIN_PREFERENCE_PAGE_HEADER}
      items={preferences.items}
      itemCount={preferences.itemCount}
      pageStart={preferences.pageStart}
      pageLimit={preferences.pageLimit}
      columns={columns}
      appPrefs={appPrefs}
      onPageLimitChange={onPageLimitChange}
      onSearchChange={onSearchChange}
      onSearchClick={onSearchClick}
      onPaginationClick={onPaginationClick}
      onFilterClick={onFilterClick}/>
    </div>
  );
}


PreferencesView.propTypes = {
  containerState: PropTypes.object,
  preferences: PropTypes.object,
  appPrefs: PropTypes.object,
  onPageLimitChange: PropTypes.func,
  onSearchChange: PropTypes.func,
  onSearchClick: PropTypes.func,
  onPaginationClick: PropTypes.func,
  onFilterClick: PropTypes.func
};
