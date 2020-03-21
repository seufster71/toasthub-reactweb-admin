import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import ListBuilder from '../../coreView/common/list-builder';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function RolesView({containerState, items, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, openDeleteModal, 
	closeModal, onModify, onDelete, onEditPermissions, onUserRoleModify, inputChange, goBack, session}) {

	let columns = [];
	if (items.appLabels != null && items.appLabels.ADMIN_ROLE_TABLE != null) {
		columns = items.appLabels.ADMIN_ROLE_TABLE;
	}
	
	let header = "";
	let parent = null;
	if (items.parent != null) {
		if (items.appTexts.ADMIN_ROLE_PAGE != null && items.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER_PARENT != null) {
			header = items.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER_PARENT.value;
		}
		parent = items.parent.username;
	} else {
		if (items.appTexts.ADMIN_ROLE_PAGE != null && items.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER != null) {
			header = items.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER.value;
		}
	}
	
	let deleteModalHeader = "Delete ";
	if (containerState.selected != null && containerState.selected.title != null) {
		deleteModalHeader += containerState.selected.title.defaultText;
	}
	
	let viewPortSmall = false;
	if (session.viewPort === 'small') { viewPortSmall = true }
	
	return (
		<div>
			{viewPortSmall ? (
				<ListBuilder
		  	      	containerState={containerState}
		  	      	header={header}
		  	      	items={items.items}
		  	      	itemCount={items.itemCount}
		  	      	listStart={items.listStart}
		  	      	listLimit={items.listLimit}
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
	  				onOption3={onRolePermissionModify}
	  				goBack={goBack}
		  			orderCriteria={items.orderCriteria}
	  				searchCriteria={items.searchCriteria}
		  	      />
		  	) : (	
				<Table
		  			containerState={containerState}
		  			header={header}
		  			items={items.items}
		  			itemCount={items.itemCount}
		  			listStart={items.listStart}
		  			listLimit={items.listLimit}
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
		  			onOption3={onEditPermissions}
		  			onOption4={onUserRoleModify}
		  			openDeleteModal={openDeleteModal}
		  			goBack={goBack}
					orderCriteria={items.orderCriteria}
  					searchCriteria={items.searchCriteria}
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


RolesView.propTypes = {
	containerState: PropTypes.object,
	items: PropTypes.object,
	appPrefs: PropTypes.object,
	onListLimitChange: PropTypes.func,
	onSearchChange: PropTypes.func,
	onSearchClick: PropTypes.func,
	onPaginationClick: PropTypes.func,
	onOrderBy: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onModify: PropTypes.func,
	onDelete: PropTypes.func,
	onEditPermissions: PropTypes.func,
	onUserRoleModify: PropTypes.func,
	inputChange: PropTypes.func,
	goBack: PropTypes.func,
	session: PropTypes.object
};
