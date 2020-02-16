import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function PermissionsView({containerState, permissions, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openDeleteModal, closeModal, onModify, onDelete, onRolePermissionModify, inputChange, goBack }) {

	let columns = [];
	if (permissions.appLabels != null && permissions.appLabels.ADMIN_PERMISSION_TABLE != null) {
		columns = permissions.appLabels.ADMIN_PERMISSION_TABLE;
	}

	let header = "";
	let parent = "";
	if (permissions.parent != null) {
		if (permissions.appTexts.ADMIN_PERMISSION_PAGE != null && permissions.appTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER_PARENT != null) {
			header = permissions.appTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER_PARENT.value;
		}
		parent = permissions.parent.title.langTexts[0].text;
	} else {
		if (permissions.appTexts.ADMIN_PERMISSION_PAGE != null && permissions.appTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER != null) {
			header = permissions.appTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER.value;
		}
	}
	return (
		  <div>
	  		<Table
	  			containerState={containerState}
	  			header={header}
	  			items={permissions.items}
	  			itemCount={permissions.itemCount}
	  			listStart={permissions.listStart}
	  			listLimit={permissions.listLimit}
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
	  			onOption3={onRolePermissionModify}
	  			goBack={goBack}
	  		/>
	  		<Modal isOpen={containerState.isDeleteModalOpen} onClose={closeModal()} >
	  			<div className="modal-dialog">
	  				<div className="modal-content">
	  					<div className="modal-header">
	  						<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-close"/></button>
	  						<h4 className="modal-title">Delete {containerState.selectedName}</h4>
	  					</div>
	  					<div className="modal-body">
	  						<h3>Are you sure you want to delete?</h3>
	  					</div>
	  					<div className="modal-footer">
	  						<button type="button" className="btn ai-btn-primary" onClick={onDelete(containerState.selectedId)}>Delete</button>
	  						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
	  					</div>
	  				</div>
	  			</div>
	  		</Modal>
	  	</div>
	);
}


PermissionsView.propTypes = {
	containerState: PropTypes.object,
	permissions: PropTypes.object,
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
	onRolePermissionModify: PropTypes.func,
	inputChange: PropTypes.func,
	goBack: PropTypes.func
};
