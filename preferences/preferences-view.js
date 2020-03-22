import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '../../coreView/common/list';
import Search from '../../coreView/common/search';
import Modal from '../../coreView/common/modal';
import DeleteModal from '../../coreView/common/delete-modal';
import Tabs from '../../coreView/common/tabs';
import moment from 'moment';

export default function PreferencesView({containerState, items, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, onFilterClick, onSaveFilter, onClearFilter,
	onModify, onDelete, openDeleteModal, closeModal, onClickTabItem, onToggleItem, inputChange}) {

	let tabLabels = ["Fields","Labels","Texts"];
	let activeTab = "Fields";
	let columns = [];
	if (items.appLabels != null && items.appLabels.ADMIN_PREFERENCE_TABLE != null) {
		columns = items.appLabels.ADMIN_PREFERENCE_TABLE;
	}
	let listRows = [];
	let listItems = items.items;
	if (listItems != null && listItems.length > 0) {
		for (let i = 0; i < listItems.length; i++) {
			let cells = [];
			let active = "Disabled";
			if (listItems[i].active == true) {
				active = "Active";
			}
			let created = "";
			if (listItems[i].created != null) {
				created = new Intl.DateTimeFormat('en-US', {
	         	year: 'numeric',
	         	month: 'short',
	         	day: 'numeric',
	         	hour: 'numeric',
	         	minute: 'numeric',
	         	second: 'numeric',
	         	timeZone: 'America/New_York'
				}).format(moment(listItems[i].created).toDate());
			}
			let modified = "";
			if (listItems[i].modified != null) {
				modified = new Intl.DateTimeFormat('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					timeZone: 'America/New_York'
				}).format(moment(listItems[i].modified).toDate());
			}
			cells.push(<div key={0} >
              	<div className="row">
              		<div className="col-md-12"><i className="fa fa-plus-square" onClick={onToggleItem(listItems[i].id)}/><span> {listItems[i].title.langTexts[0].text}</span></div></div>
              		<div className="col-md-4">
              		<div>Category: {listItems[i].category}</div>
              		<div>Code: {listItems[i].name}</div>
              	</div>
                <div className="col-md-4">
                  	<div>Status: {active}</div>
                  	<div><small>Created: {created}</small></div>
                  	<div><small>Modified: {modified}</small></div>
                </div>
                <div className="col-md-4">
                  	<i className="fa fa-pencil-square-o" onClick={onModify()}/>
                  	<i className="fa fa-trash" onClick={onDelete()}/>
                </div>
                <div className="col-md-12">
                	<Tabs tabLabels={tabLabels} activeTab={activeTab} onClickTabItem={onClickTabItem()}/>
                </div>
            </div>);

			listRows.push(<li key={listItems[i].id} scope="row" className="row">{cells}</li>);
		}
	} else {
		listRows.push(<li key="1"><div id={appPrefs.appTexts.GLOBAL_PAGE.GLOBAL_PAGE_LIST_EMPTY.name}> {appPrefs.appTexts.GLOBAL_PAGE.GLOBAL_PAGE_LIST_EMPTY.value}</div></li>);
	}
	
	let header = <h5 style={{display:'inline'}}>{items.appTexts.ADMIN_PREFERENCE_PAGE.ADMIN_PREFERENCE_PAGE_HEADER.value}</h5>;
	
	let deleteModalHeader = "Delete ";
	if (containerState.selected != null && containerState.selected.title != null) {
		deleteModalHeader += containerState.selected.title.defaultText;
	}
	
	return (
		<div className="main_content">
			<List
			containerState={containerState}
			header={header}
			listRows={listRows}
			itemCount={items.itemCount}
			listStart={items.pageStart}
			listLimit={items.pageLimit}
			columns={columns}
			appPrefs={appPrefs}
			onListLimitChange={onListLimitChange}
			onSearchChange={onSearchChange}
			onSearchClick={onSearchClick}
			onPaginationClick={onPaginationClick}
			onOrderBy={onOrderBy}
			onHeader={onModify}
			onOption1={onModify}
			onOption2={openDeleteModal}
			onFilterClick={onFilterClick}/>
			<Modal isOpen={containerState.isDeleteModalOpen} onClose={closeModal()} >
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-close"/></button>
							<h4 className="modal-title">{deleteModalHeader}</h4>
						</div>
						<div className="modal-body">
							<h3>Are you sure you want to delete?</h3>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" onClick={onDelete(containerState.selected)}>Delete</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}


PreferencesView.propTypes = {
  containerState: PropTypes.object,
  items: PropTypes.object,
  appPrefs: PropTypes.object,
  onListLimitChange: PropTypes.func,
  onSearchChange: PropTypes.func,
  onSearchClick: PropTypes.func,
  onPaginationClick: PropTypes.func,
  onOrderBy: PropTypes.func,
  onFilterClick: PropTypes.func,
  onSaveFilter: PropTypes.func,
  onClearFilter: PropTypes.func,
  onModify: PropTypes.func,
  onDelete: PropTypes.func,
  openDeleteModal: PropTypes.func,
  closeModal: PropTypes.func,
  onClickTabItem: PropTypes.func,
  onToggleItem: PropTypes.func,
  inputChange: PropTypes.func,
};
