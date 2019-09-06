import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';


export default function UsersView({containerState, users, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openEditModal, openDeleteModal, closeModal, onSaveUser, onDeleteUser, inputChange}) {

    let columns = [];
    
    if (users.appLabels != null && users.appLabels.ADMIN_USER_TABLE != null) {
    	columns = users.appLabels.ADMIN_USER_TABLE;
    }

    return (
    	<div>
    		<Table
    			containerState={containerState}
    			header={users.appTexts.ADMIN_USER_PAGE.ADMIN_USER_PAGE_HEADER}
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
    						<div className="row">
    							<div className="col-sm-4">
    								<Input name="USER_FIRSTNAME_input" label="First name" required="true" errors={containerState.errors} onChange={inputChange('firstName')} value={(users.selectedUser != null && users.selectedUser.firstName != null)?users.selectedUser.firstName:""}/>
    							</div>	
    							<div className="col-sm-4">
    								<Input name="USER_MIDDLENAME_input" label="Middle name" onChange={inputChange('middleName')} value={(users.selectedUser != null && users.selectedUser.middleName != null)?users.selectedUser.middleName:""}/>
    							</div>
    							<div className="col-sm-4">
    								<Input name="USER_LASTNAME_input" label="Last name" required="true" errors={containerState.errors} onChange={inputChange('lastName')} value={(users.selectedUser != null &&  users.selectedUser.lastName != null)?users.selectedUser.lastName:""}/>
    							</div>
    						</div>
    						<Input name="USER_USERNAME_input" label="Username" required="true" errors={containerState.errors} onChange={inputChange('userName')} value={(users.selectedUser != null && users.selectedUser.userName != null)?users.selectedUser.userName:""}/>
    						<Input name="USER_TITLE_input" label="Title" onChange={inputChange('title')} value={(users.selectedUser != null && users.selectedUser.title != null)?users.selectedUser.title:""}/>
    						
    						<Input name="USER_EMAIL_input" inputType="email" label="Email" required="true" errors={containerState.errors} onChange={inputChange('email')} value={(users.selectedUser != null && users.selectedUser.email != null)?users.selectedUser.email:""}/>
    						
            
    						
    						
    					</div>
    					<div className="modal-footer">
    						<button type="button" className="btn ai-btn-primary" onClick={onSaveUser()}>Save</button>
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
    						<h4 className="modal-title">Delete {containerState.selectedUserName}</h4>
    					</div>
    					<div className="modal-body">
    						<h3>Are you sure you want to delete?</h3>
    					</div>
    					<div className="modal-footer">
    						<button type="button" className="btn ai-btn-primary" onClick={onDeleteUser(containerState.selectedUserId)}>Delete</button>
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
  openEditModal: PropTypes.func,
  openDeleteModal: PropTypes.func,
  closeModal: PropTypes.func,
  onSaveUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
  inputChange: PropTypes.func
};
