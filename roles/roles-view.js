import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import ListBuilder from '../../coreView/common/list-builder';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function RolesView({containerState, rolesState, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, openDeleteModal, 
	closeModal, onModify, onDelete, onEditPermissions, onUserRoleModify, inputChange, goBack, session}) {

	let columns = [];
	if (rolesState.prefLabels != null && rolesState.prefLabels.ADMIN_ROLE_TABLE != null) {
		columns = rolesState.prefLabels.ADMIN_ROLE_TABLE;
	}
	
	let header = "";
	let parent = null;
	if (rolesState.parent != null) {
		if (rolesState.prefTexts.ADMIN_ROLE_PAGE != null && rolesState.prefTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER_PARENT != null) {
			header = rolesState.prefTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER_PARENT.value;
		}
		parent = rolesState.parent.username;
	} else {
		if (rolesState.prefTexts.ADMIN_ROLE_PAGE != null && rolesState.prefTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER != null) {
			header = rolesState.prefTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER.value;
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
		  	      	items={rolesState.items}
		  	      	itemCount={rolesState.itemCount}
		  	      	listStart={rolesState.listStart}
		  	      	listLimit={rolesState.listLimit}
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
	  				onOption3={onUserRoleModify}
	  				goBack={goBack}
		  			orderCriteria={rolesState.orderCriteria}
	  				searchCriteria={rolesState.searchCriteria}
		  	      />
		  	) : (	
				<Table
		  			containerState={containerState}
		  			header={header}
		  			items={rolesState.items}
		  			itemCount={rolesState.itemCount}
		  			listStart={rolesState.listStart}
		  			listLimit={rolesState.listLimit}
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
					orderCriteria={rolesState.orderCriteria}
  					searchCriteria={rolesState.searchCriteria}
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
	rolesState: PropTypes.object,
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
