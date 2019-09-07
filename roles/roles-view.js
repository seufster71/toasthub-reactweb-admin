import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function RolesView({containerState, roles, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openEditModal, openDeleteModal, closeModal, onSaveRole, onDeleteRole, inputChange}) {

	let columns = [];
	if (roles.appLabels != null && roles.appLabels.ADMIN_ROLE_TABLE != null) {
		columns = roles.appLabels.ADMIN_ROLE_TABLE;
	}
	
	let header = "";
	if (roles.appTexts.ADMIN_ROLE_PAGE != null && roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER != null) {
		header = roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER;
	}
	
	return (
		  <div>
	  		<Table
	  			containerState={containerState}
	  			header={roles.appTexts.ADMIN_ROLE_PAGE.ADMIN_ROLE_PAGE_HEADER}
	  			items={roles.items}
	  			itemCount={roles.itemCount}
	  			listStart={roles.listStart}
	  			listLimit={roles.listLimit}
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
	  						<Input name="ROLE_NAME_input" label="Name" required="true" errors={containerState.errors} onChange={inputChange('name')} value={(roles.selected != null && roles.selected.name != null)?roles.selected.name:""}/>
	  						<Input name="ROLE_CODE_input" label="Code" required="true" errors={containerState.errors} onChange={inputChange('code')} value={(roles.selected != null && roles.selected.code != null)?roles.selected.code:""}/>
	  						
	          
	  						
	  						
	  					</div>
	  					<div className="modal-footer">
	  						<button type="button" className="btn ai-btn-primary" onClick={onSaveRole()}>Save</button>
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
	  						<button type="button" className="btn ai-btn-primary" onClick={onDeleteRole(containerState.selectedId)}>Delete</button>
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
	openEditModal: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onSaveRole: PropTypes.func,
	onDeleteRole: PropTypes.func,
	inputChange: PropTypes.func
};
