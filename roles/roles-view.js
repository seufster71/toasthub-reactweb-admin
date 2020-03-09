import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function RolesView({containerState, roles, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openDeleteModal, closeModal, onModify, onDelete, onEditPermissions, onUserRoleModify, inputChange, goBack}) {

	let columns = [];
	if (roles.appLabels != null && roles.appLabels.ADMIN_ROLE_TABLE != null) {
		columns = roles.appLabels.ADMIN_ROLE_TABLE;
	}
	
	let header = "";
	let parent = null;
	if (roles.parent != null) {
		if (roles.appTexts.ADMIN_ROLE_PAGE != null && roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER_PARENT != null) {
			header = roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER_PARENT.value;
		}
		parent = roles.parent.username;
	} else {
		if (roles.appTexts.ADMIN_ROLE_PAGE != null && roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER != null) {
			header = roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER.value;
		}
	}
	
	let deleteModalHeader = "Delete ";
	if (containerState.selected != null && containerState.selected.title != null) {
		deleteModalHeader += containerState.selected.title.defaultText;
	}
	
	return (
		  <div>
	  		<Table
	  			containerState={containerState}
	  			header={header}
	  			items={roles.items}
	  			itemCount={roles.itemCount}
	  			listStart={roles.listStart}
	  			listLimit={roles.listLimit}
	  			columns={columns}
	  			appPrefs={appPrefs}
	  			parent={parent}
	  			onListLimitChange={onListLimitChange}
	  			onSearchChange={onSearchChange}
	  			onSearchClick={onSearchClick}
	  			onPaginationClick={onPaginationClick}
	  			onColumnSort={onColumnSort}
	  			onHeader={onModify}
	  			onOption1={onModify}
	  			onOption2={openDeleteModal}
	  			onOption3={onEditPermissions}
	  			onOption4={onUserRoleModify}
	  			openDeleteModal={openDeleteModal}
	  			goBack={goBack}
	  		/>
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
	roles: PropTypes.object,
	appPrefs: PropTypes.object,
	onListLimitChange: PropTypes.func,
	onSearchChange: PropTypes.func,
	onSearchClick: PropTypes.func,
	onPaginationClick: PropTypes.func,
	onColumnSort: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onModify: PropTypes.func,
	onDelete: PropTypes.func,
	onEditPermissions: PropTypes.func,
	onUserRoleModify: PropTypes.func,
	inputChange: PropTypes.func,
	goBack: PropTypes.func
};
