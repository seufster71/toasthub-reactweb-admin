import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function PermissionsView({containerState, permissions, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openEditModal, openDeleteModal, closeModal, onSavePermission, onDeletePermission, inputChange }) {

	let columns = [];
	if (permissions.appLabels != null && permissions.appLabels.ADMIN_PERMISSION_TABLE != null) {
		columns = permissions.appLabels.ADMIN_PERMISSION_TABLE;
	}

	return (
		  <div>
	  		<Table
	  			containerState={containerState}
	  			header={permissions.appTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER}
	  			items={permissions.items}
	  			itemCount={permissions.itemCount}
	  			listStart={permissions.listStart}
	  			listLimit={permissions.listLimit}
	  			columns={columns}
	  			appPrefs={appPrefs}
	  			onListLimitChange={onListLimitChange}
	  			onSearchChange={onSearchChange}
	  			onSearchClick={onSearchClick}
	  			onPaginationClick={onPaginationClick}
	  			onColumnSort={onColumnSort}
	  			openEditModal={openEditModal}
	  			openDeleteModal={openDeleteModal}
	  		/>
	  		<Modal isOpen={containerState.isEditModalOpen} onClose={closeModal()} >
	  			<div className="modal-dialog">
	  				<div className="modal-content">
	  					<div className="modal-header">
	  						<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-close"/></button>
	  						<h4 className="modal-title">User</h4>
	  					</div>
	  					<div className="modal-body">
	  						<Input name="PERMISSION_NAME_input" label="Name" required="true" errors={containerState.errors} onChange={inputChange('name')} value={(permissions.selected != null && permissions.selected.name != null)?permissions.selected.name:""}/>
	  						<Input name="PERMISSION_CODE_input" label="Code" required="true" errors={containerState.errors} onChange={inputChange('code')} value={(permissions.selected != null && permissions.selected.code != null)?permissions.selected.code:""}/>
	  						
	          
	  						
	  						
	  					</div>
	  					<div className="modal-footer">
	  						<button type="button" className="btn ai-btn-primary" onClick={onSavePermission()}>Save</button>
	  						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
	  					</div>
	  				</div>
	  			</div>
	  		</Modal>
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
	  						<button type="button" className="btn ai-btn-primary" onClick={onDeletePermission(containerState.selectedId)}>Delete</button>
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
	openEditModal: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onSavePermission: PropTypes.func,
	onDeletePermission: PropTypes.func,
	inputChange: PropTypes.func					
};
