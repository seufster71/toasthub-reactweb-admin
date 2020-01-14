import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function LanguageView({containerState, languages, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onColumnSort, openDeleteModal, closeModal, onModify, onDelete, inputChange }) {

  let columns = [];
  
  if (languages.appLabels != null && languages.appLabels.ADMIN_LANGUAGE_TABLE != null) {
	  columns = languages.appLabels.ADMIN_LANGUAGE_TABLE;
  }
  
  let header = "";
	if (languages.appTexts.ADMIN_LANGUAGE_PAGE != null && languages.appTexts.ADMIN_LANGUAGE_PAGE.ADMIN_LANGUAGE_PAGE_HEADER != null) {
		header = languages.appTexts.ADMIN_LANGUAGE_PAGE.ADMIN_LANGUAGE_PAGE_HEADER;
	}
  return (
	<div>
  		<Table
  			containerState={containerState}
  			header={header}
  			items={languages.items}
  			itemCount={languages.itemCount}
  			listStart={languages.listStart}
  			listLimit={languages.listLimit}
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
  			openDeleteModal={openDeleteModal}
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


LanguageView.propTypes = {
	containerState: PropTypes.object,
	languages: PropTypes.object,
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
	inputChange: PropTypes.func
};
