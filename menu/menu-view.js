import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function MenuView({containerState, menus, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openEditModal, openDeleteModal, closeModal, onSaveMenu, onDeleteMenu, inputChange}) {

	let columns = [];
	if (menus.appLabels != null && menus.appLabels.ADMIN_MENU_TABLE != null) {
		columns = menus.appLabels.ADMIN_MENU_TABLE;
	}
	
	let header = "";
	if (menus.appTexts.ADMIN_MENU_PAGE != null && menus.appTexts.ADMIN_MENU_PAGE.ADMIN_MENU_PAGE_HEADER != null) {
		header = menus.appTexts.ADMIN_MENU_PAGE.ADMIN_MENU_PAGE_HEADER;
	}
	
	return (
		<div>
	  		<Table
	  			containerState={containerState}
	  			header={header}
	  			items={menus.items}
	  			itemCount={menus.itemCount}
	  			listStart={menus.listStart}
	  			listLimit={menus.listLimit}
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
	  						<Input name="MENU_NAME_input" label="Name" required="true" errors={containerState.errors} onChange={inputChange('name')} value={(menus.selected != null && menus.selected.name != null)?menus.selected.name:""}/>
	  						<Input name="MENU_CODE_input" label="Code" required="true" errors={containerState.errors} onChange={inputChange('code')} value={(menus.selected != null && menus.selected.code != null)?menus.selected.code:""}/>
	  						
	          
	  						
	  						
	  					</div>
	  					<div className="modal-footer">
	  						<button type="button" className="btn btn-primary" onClick={onSaveMenu()}>Save</button>
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
	  						<button type="button" className="btn btn-primary" onClick={onDeleteMenu(containerState.selectedId)}>Delete</button>
	  						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
	  					</div>
	  				</div>
	  			</div>
	  		</Modal>
	  	</div>
	);
}

MenuView.propTypes = {
	containerState: PropTypes.object,
	menus: PropTypes.object,
	appPrefs: PropTypes.object,
	onListLimitChange: PropTypes.func,
	onSearchChange: PropTypes.func,
	onSearchClick: PropTypes.func,
	onPaginationClick: PropTypes.func,
	onColumnSort: PropTypes.func,
	openEditModal: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onSaveLanguage: PropTypes.func,
	onDeleteLanguage: PropTypes.func,
	inputChange: PropTypes.func
};
