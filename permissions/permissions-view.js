import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import ListBuilder from '../../coreView/common/list-builder';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function PermissionsView({containerState, permissions, appPrefs, onListLimitChange, onSearchChange, onSearchClick, onPaginationClick, 
	onOrderBy, onOption, closeModal, inputChange, goBack, session }) {

	let columns = [];
	if (permissions.prefLabels != null && permissions.prefLabels.ADMIN_PERMISSION_PAGE != null) {
		columns = permissions.prefLabels.ADMIN_PERMISSION_PAGE;
	}
	let group = "TABLE1";

	let header = "";
	let parent = null;
	if (permissions.parent != null) {
		if (permissions.prefTexts.ADMIN_PERMISSION_PAGE != null && permissions.prefTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER_PARENT != null) {
			header = permissions.prefTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER_PARENT.value;
		}
		parent = permissions.parent.title.langTexts[0].text;
	} else {
		if (permissions.prefTexts.ADMIN_PERMISSION_PAGE != null && permissions.prefTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER != null) {
			header = permissions.prefTexts.ADMIN_PERMISSION_PAGE.ADMIN_PERMISSION_PAGE_HEADER.value;
		}
	}
	
	let deleteModalHeader = "Delete ";
	if (containerState.selected != null && containerState.selected.title != null) {
		deleteModalHeader += containerState.selected.title.defaultText;
	}
	
	let viewPortSmall = false;
	if (session.viewPort === 'small') { viewPortSmall = true }
	
	return (
		<div>
		  	{viewPortSmall ? (
		  		<ListBuilder
		  	      	containerState={containerState}
		  	      	header={header}
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
		  			onOrderBy={onOrderBy}
	  				onOption={onOption}
	  				goBack={goBack}
		  			orderCriteria={permissions.orderCriteria}
	  				searchCriteria={permissions.searchCriteria}
		  	      />
		  	) : (
		  		<Table
		  			containerState={containerState}
		  			header={header}
		  			items={permissions.items}
		  			itemCount={permissions.itemCount}
		  			listStart={permissions.listStart}
		  			listLimit={permissions.listLimit}
		  			columns={columns}
		  		    labelGroup={group}
		  			appPrefs={appPrefs}
		  			parent={parent}
		  			onListLimitChange={onListLimitChange}
		  			onSearchChange={onSearchChange}
		  			onSearchClick={onSearchClick}
		  			onPaginationClick={onPaginationClick}
		  			onOrderBy={onOrderBy}
		  			onOption={onOption}
		  			goBack={goBack}
		  			orderCriteria={permissions.orderCriteria}
		  			searchCriteria={permissions.searchCriteria}
		  		/>
	  		)}
	  		<Modal isOpen={containerState.isDeleteModalOpen} onClose={() => closeModal()} >
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
	  						<button type="button" className="btn btn-primary" onClick={() => onOption("DELETEFINAL",containerState.selected)}>Delete</button>
	  						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModal()}>Close</button>
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
	onOrderBy: PropTypes.func,
	openDeleteModal: PropTypes.func,
	closeModal: PropTypes.func,
	onOption: PropTypes.func,
	inputChange: PropTypes.func,
	goBack: PropTypes.func,
	session: PropTypes.object
};
