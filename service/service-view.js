import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function ServiceView({containerState, services, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openEditModal, openDeleteModal, closeModal, onSaveService, onDeleteService, inputChange}) {

	let columns = [];
	if (services.appLabels != null && services.appLabels.ADMIN_SERVICE_CRAWLER_TABLE != null) {
		columns = services.appLabels.ADMIN_SERVICE_CRAWLER_TABLE;
	}
	let header = "Services";
	if (services.appTexts.ADMIN_SERVICE_CRAWLER_PAGE != null && services.appTexts.ADMIN_SERVICE_CRAWLER_PAGE.ADMIN_SERVICE_CRAWLER_PAGE_HEADER != null) {
		header = services.appTexts.ADMIN_SERVICE_CRAWLER_PAGE.ADMIN_SERVICE_CRAWLER_PAGE_HEADER;
	}
	
	return (
		<div>
	  		<Table
	  			containerState={containerState}
	  			header={header}
	  			items={services.items}
	  			itemCount={services.itemCount}
	  			listStart={services.listStart}
	  			listLimit={services.listLimit}
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
	  						<Input name="SERVICE_NAME_input" label="Name" required="true" errors={containerState.errors} onChange={inputChange('name')} value={(services.selected != null && services.selected.name != null)?services.selected.name:""}/>
	  						<Input name="SERVICE_CODE_input" label="Code" required="true" errors={containerState.errors} onChange={inputChange('code')} value={(services.selected != null && services.selected.code != null)?services.selected.code:""}/>
	  						
	          
	  						
	  						
	  					</div>
	  					<div className="modal-footer">
	  						<button type="button" className="btn btn-primary" onClick={onSaveService()}>Save</button>
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
	  						<button type="button" className="btn btn-primary" onClick={onDeleteService(containerState.selectedId)}>Delete</button>
	  						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
	  					</div>
	  				</div>
	  			</div>
	  		</Modal>
	  	</div>
	);
}


ServiceView.propTypes = {
	containerState: PropTypes.object,
	services: PropTypes.object,
	appPrefs: PropTypes.object,
	onListLimitChange: PropTypes.func,
	onSearchChange: PropTypes.func,
	onSearchClick: PropTypes.func,
	onPaginationClick: PropTypes.func,
	onColumnSort: PropTypes.func,
	openEditModal: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onSaveService: PropTypes.func,
	onDeleteService: PropTypes.func,
	inputChange: PropTypes.func
};
