import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '../../coreView/common/list';
import Table from '../../coreView/common/table';
import Search from '../../coreView/common/search';
import Modal from '../../coreView/common/modal';
import DeleteModal from '../../coreView/common/delete-modal';
import moment from 'moment';

export default function PreferenceSubView({containerState, preferenceState, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, onFilterClick, onSaveFilter, onClearFilter,
	onModify, onDelete, openDeleteModal, closeModal, inputChange, session, goBack}) {

	let columns = [];
	if (preferenceState.prefLabels != null ) {
		if (preferenceState.prefLabels.ADMIN_FORMFIELD_PAGE != null && preferenceState.viewType === "FORM") {
			columns = preferenceState.prefLabels.ADMIN_FORMFIELD_PAGE;
		} else if (preferenceState.prefLabels.ADMIN_LABEL_PAGE != null && preferenceState.viewType === "LABEL") {
			columns = preferenceState.prefLabels.ADMIN_LABEL_PAGE;
		} else if (preferenceState.prefLabels.ADMIN_TEXT_PAGE != null && preferenceState.viewType === "TEXT") {
			columns = preferenceState.prefLabels.ADMIN_TEXT_PAGE;
		} else if (preferenceState.prefLabels.ADMIN_OPTION_PAGE != null && preferenceState.viewType === "OPTION") {
			columns = preferenceState.prefLabels.ADMIN_OPTION_PAGE;
		}
	
	}
	
	let header = "";
	let parent = null;
	if (preferenceState.parent != null) {
		if (preferenceState.prefTexts != null) {
			if (preferenceState.viewType === "FORM" && preferenceState.prefTexts.ADMIN_FORMFIELD_PAGE != null && preferenceState.prefTexts.ADMIN_FORMFIELD_PAGE.ADMIN_FORMFIELD_PAGE_HEADER_PARENT != null) {
				header = preferenceState.prefTexts.ADMIN_FORMFIELD_PAGE.ADMIN_FORMFIELD_PAGE_HEADER_PARENT.value;
			} else if (preferenceState.viewType === "LABEL" && preferenceState.prefTexts.ADMIN_LABEL_PAGE != null && preferenceState.prefTexts.ADMIN_LABEL_PAGE.ADMIN_LABEL_PAGE_HEADER_PARENT != null) {
				header = preferenceState.prefTexts.ADMIN_LABEL_PAGE.ADMIN_LABEL_PAGE_HEADER_PARENT.value;
			} else if (preferenceState.viewType === "TEXT" && preferenceState.prefTexts.ADMIN_TEXT_PAGE != null && preferenceState.prefTexts.ADMIN_TEXT_PAGE.ADMIN_TEXT_PAGE_HEADER_PARENT != null) {
				header = preferenceState.prefTexts.ADMIN_TEXT_PAGE.ADMIN_TEXT_PAGE_HEADER_PARENT.value;
			} else if (preferenceState.viewType === "OPTION" && preferenceState.prefTexts.ADMIN_OPTION_PAGE != null && preferenceState.prefTexts.ADMIN_OPTION_PAGE.ADMIN_OPTION_PAGE_HEADER_PARENT != null) {
				header = preferenceState.prefTexts.ADMIN_OPTION_PAGE.ADMIN_OPTION_PAGE_HEADER_PARENT.value;
			}
		}
		parent = preferenceState.parent.title.langTexts[0].text;
	} else {
		if (preferenceState.prefTexts.ADMIN_PREFERENCE_PAGE != null && preferenceState.prefTexts.ADMIN_PREFERENCE_PAGE.ADMIN_PREFERENCE_PAGE_HEADER != null) {
			header = "NO header";
		}
	}
	
	let listRows = [];
	let listItems = preferenceState.items;
	if (listItems != null && listItems.length > 0) {
		for (let i = 0; i < listItems.length; i++) {
			let showTab = false;
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
              		<div className="col-md-12"> {listItems[i].title.langTexts[0].text}</div></div>
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
                  	<i className="fa fa-pencil-square-o fa-1" onClick={onModify()}/>
                  	<i className="fa fa-trash fa-1" onClick={onDelete()}/>
                	<i className="fa fa-id-card fa-1" aria-hidden="true"></i>
                	<i className="fa fa-tag fa-1" aria-hidden="true"></i>
                	<i className="fa fa-file-text fa-1" aria-hidden="true"></i>
                </div>
            </div>);

			listRows.push(<li key={listItems[i].id} scope="row" className="row">{cells}</li>);
		}
	} else {
		listRows.push(<li key="1"><div id={appPrefs.prefTexts.GLOBAL_PAGE.GLOBAL_PAGE_LIST_EMPTY.name}> {appPrefs.prefTexts.GLOBAL_PAGE.GLOBAL_PAGE_LIST_EMPTY.value}</div></li>);
	}
	
	let deleteModalHeader = "Delete ";
	if (containerState.selected != null && containerState.selected.title != null) {
		deleteModalHeader += containerState.selected.title.defaultText;
	}
	let striped = true;
	
	let viewPortSmall = false;
	if (session.viewPort === 'small') { viewPortSmall = true }
	
	return (
		<div className="main_content">
			{viewPortSmall ? (
				<List
					containerState={containerState}
					header={header}
					listRows={listRows}
					itemCount={preferenceState.itemCount}
					listStart={preferenceState.pageStart}
					listLimit={preferenceState.pageLimit}
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
					onFilterClick={onFilterClick}
					striped={striped}/>
			) : (	
				<Table
		  			containerState={containerState}
		  			header={header}
		  			items={preferenceState.items}
		  			itemCount={preferenceState.itemCount}
		  			listStart={preferenceState.listStart}
		  			listLimit={preferenceState.listLimit}
		  			columns={columns}
		  			appPrefs={appPrefs}
		  			parent={parent}
		  			onListLimitChange={onListLimitChange}
		  			onSearchChange={onSearchChange}
		  			onSearchClick={onSearchClick}
		  			onPaginationClick={onPaginationClick}
		  			onOrderBy={onOrderBy}
		  			onHeader={onModify}
		  			onOption1={onModify}
		  			onOption2={openDeleteModal}
		  			openDeleteModal={openDeleteModal}
					orderCriteria={preferenceState.orderCriteria}
  					searchCriteria={preferenceState.searchCriteria}
					goBack={goBack}
				/>
			)}				
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


PreferenceSubView.propTypes = {
  containerState: PropTypes.object,
  preferenceState: PropTypes.object,
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
