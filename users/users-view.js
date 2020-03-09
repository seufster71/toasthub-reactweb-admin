import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';


export default function UsersView({containerState, users, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openDeleteModal, closeModal, onModify, onDelete, onEditRoles, inputChange}) {

    let columns = [];
    
    if (users.appLabels != null && users.appLabels.ADMIN_USER_TABLE != null) {
    	columns = users.appLabels.ADMIN_USER_TABLE;
    }
    let header = "";
    if (users.appTexts.ADMIN_USER_PAGE != null && users.appTexts.ADMIN_USER_PAGE.ADMIN_USER_PAGE_HEADER != null) {
		header = users.appTexts.ADMIN_USER_PAGE.ADMIN_USER_PAGE_HEADER.value;
	}

    return (
    	<div>
    		<Table
    			containerState={containerState}
    			header={header}
    			items={users.items}
    			itemCount={users.itemCount}
    			listStart={users.listStart}
    			listLimit={users.listLimit}
    			columns={columns}
    			appPrefs={appPrefs}
    			onListLimitChange={onListLimitChange}
    			onSearchChange={onSearchChange}
    			onSearchClick={onSearchClick}
    			onPaginationClick={onPaginationClick}
    			onColumnSort={onColumnSort}
    			onHeader={onModify}
    			onOption1={onModify}
    			onOption2={openDeleteModal}
    			onOption3={onEditRoles}
    		/>
    		<Modal isOpen={containerState.isDeleteModalOpen} onClose={closeModal()} >
    			<div className="modal-dialog">
    				<div className="modal-content">
    					<div className="modal-header">
    						<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-close"/></button>
    						<h4 className="modal-title">Delete {containerState.selectedUserName}</h4>
    					</div>
    					<div className="modal-body">
    						<h3>Are you sure you want to delete?</h3>
    					</div>
    					<div className="modal-footer">
    						<button type="button" className="btn btn-primary" onClick={onDelete(containerState.selectedUserId)}>Delete</button>
    						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
    					</div>
    				</div>
    			</div>
    		</Modal>
    	</div>
    );
}


UsersView.propTypes = {
  containerState: PropTypes.object,
  users: PropTypes.object,
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
  onEditRoles: PropTypes.func,
  inputChange: PropTypes.func
};
