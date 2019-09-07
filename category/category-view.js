import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function CategoryView({containerState, category, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openEditModal, openDeleteModal, closeModal, onSaveCategory, onDeleteCategory, inputChange}) {

  let columns = [];
  
  if (category.appLabels != null && category.appLabels.ADMIN_CATEGORY_TABLE != null) {
    columns = category.appLabels.ADMIN_CATEGORY_TABLE;
  }

  return (
		 <div>
	  		<Table
	  			containerState={containerState}
	  			header={category.appTexts.ADMIN_CATEGORY_PAGE.ADMIN_CATEGORY_PAGE_HEADER}
	  			items={category.items}
	  			itemCount={category.itemCount}
	  			listStart={category.listStart}
	  			listLimit={category.listLimit}
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
	  						<Input name="CATEGORY_NAME_input" label="Name" required="true" errors={containerState.errors} onChange={inputChange('name')} value={(category.selected != null && category.selected.name != null)?category.selected.name:""}/>
	  						<Input name="CATEGORY_CODE_input" label="Code" required="true" errors={containerState.errors} onChange={inputChange('code')} value={(category.selected != null && category.selected.code != null)?category.selected.code:""}/>
	  						
	          
	  						
	  						
	  					</div>
	  					<div className="modal-footer">
	  						<button type="button" className="btn ai-btn-primary" onClick={onSaveCategory()}>Save</button>
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
	  						<button type="button" className="btn ai-btn-primary" onClick={onDeleteCategory(containerState.selectedId)}>Delete</button>
	  						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal()}>Close</button>
	  					</div>
	  				</div>
	  			</div>
	  		</Modal>
	  	</div>
  );
}


CategoryView.propTypes = {
	containerState: PropTypes.object,
	category: PropTypes.object,
	appPrefs: PropTypes.object,
	onListLimitChange: PropTypes.func,
	onSearchChange: PropTypes.func,
	onSearchClick: PropTypes.func,
	onPaginationClick: PropTypes.func,
	onColumnSort: PropTypes.func,
	openEditModal: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onSaveCategory: PropTypes.func,
	onDeleteCategory: PropTypes.func,
	inputChange: PropTypes.func
};
