import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '../../coreView/common/list';
import Search from '../../coreView/common/search';
import Modal from '../../coreView/common/modal';
import DeleteModal from '../../coreView/common/delete-modal';

export default function PreferencesView({containerState, preferences, appPrefs, onPageLimitChange,
  onSearchChange, onSearchClick, onPaginationClick, onFilterClick, onSaveFilter, onClearFilter,
  onSavePreference, onDeletePreference, onAddModal, onDeleteModal, onCloseModal}) {

  let columns = [];
  if (preferences.appLabels != null && preferences.appLabels.ADMIN_PREFERENCE_TABLE != null) {
    columns = preferences.appLabels.ADMIN_PREFERENCE_TABLE;
  }
  let listRows = [];
  let items = preferences.items;
  if (items != null && items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let cells = [];
      let active = "Disabled";
      if (items[i].active == true) {
        active = "Active";
      }
      let created = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }).format(items[i].created);
      let modified = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }).format(items[i].modified);
      cells.push(<div key={0} >
              <div className="row"><div className="col-md-12"><h5>{items[i].title.langTexts[0].text}</h5></div></div>
              <div className="col-md-4">

                <div>Category: {items[i].category}</div>
                <div>Code: {items[i].name}</div>
              </div>
              <div className="col-md-4">
                <div>Status: {active}</div>
                <div><small>Created: {created}</small></div>
                <div><small>Modified: {modified}</small></div>
              </div>
              <div className="col-md-4">
                <i className="fa fa-pencil-square-o" onClick={onAddModal()}/>
                <i className="fa fa-trash" onClick={onDeleteModal()}/>
              </div>
              </div>);

      listRows.push(<li key={items[i].id} scope="row" className="row">{cells}</li>);
    }
  } else {
    listRows.push(<li key="1"><div id={appPrefs.appTexts.GLOBAL_PAGE.GLOBAL_PAGE_LIST_EMPTY.name}> {appPrefs.appTexts.GLOBAL_PAGE.GLOBAL_PAGE_LIST_EMPTY.value}</div></li>);
  }
  let header = <h5 style={{display:'inline'}}>{preferences.appTexts.ADMIN_PREFERENCE_PAGE.ADMIN_PREFERENCE_PAGE_HEADER.value}</h5>;
  return (
    <div className="main_content">
      <List
      containerState={containerState}
      header={header}
      items={listRows}
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
      <Modal isOpen={containerState.isAddModalOpen} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-close" onClick={onCloseModal()}/></button>
              <h4 className="modal-title">New Preference</h4>
            </div>
            <div className="modal-body">
              <h2> body </h2>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onSavePreference()}>Save</button>
              <button type="button" className="btn btn-secondary" onClick={onCloseModal()}>Cancel</button>
            </div>
          </div>
        </div>
     </Modal>
     <DeleteModal isOpen={containerState.isDeleteModalOpen}
        title="Delete Preference"
        bodyMsg="Are you sure you want to delete?"
        onDeleteModal={onDeleteModal()}
        onCloseModal={onCloseModal()}
        onDelete={onDeletePreference()}
      />
     <Modal isOpen={containerState.isFilterModalOpen} >
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-close" onClick={onCloseModal()}/></button>
             <h4 className="modal-title">Filter</h4>
           </div>
           <div className="modal-body">
             <h2> body </h2>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-primary" onClick={onSaveFilter()}>Save</button>
             <button type="button" className="btn btn-secondary" onClick={onClearFilter()}>Clear</button>
             <button type="button" className="btn btn-secondary" onClick={onCloseModal()}>Close</button>
           </div>
         </div>
       </div>
    </Modal>
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
  onFilterClick: PropTypes.func,
  onSaveFilter: PropTypes.func,
  onClearFilter: PropTypes.func,
  onSavePreference: PropTypes.func,
  onDeletePreference: PropTypes.func,
  onAddModal: PropTypes.func,
  onDeleteModal: PropTypes.func,
  onCloseModal: PropTypes.func
};
