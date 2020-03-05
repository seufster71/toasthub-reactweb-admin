import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';

export default function CategoryModifyView({containerState, item, inputFields, appPrefs, appForms,
	onSave, onCancel, inputChange}) {

	let adminCategoryFormName = {};

    let adminCategoryFormCode = {};
  
    if (appForms != null && appForms.ADMIN_CATEGORY_FORM != null) {
    	for (let i = 0; i < appForms.ADMIN_CATEGORY_FORM.length; i++) {
    		switch (appForms.ADMIN_CATEGORY_FORM[i].name) {
    		case "ADMIN_CATEGORY_FORM_NAME":
    			adminCategoryFormName = appForms.ADMIN_CATEGORY_FORM[i];
    			break;
    		case "ADMIN_CATEGORY_FORM_MIDDLENAME":
    			adminUserFormMiddleName = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		}
    	}
    }
    		
	return (
		<div className="col-lg-12">
			<h4 className="modal-title">Category</h4>
			<div className="row">
				<TextBuilder item={item} field={adminCategoryFormName} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				<TextBuilder item={item} field={adminCategoryFormCode} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
	
		  		<button type="button" className="btn ai-btn-primary" onClick={onSaveCategory()}>Save</button>
		  		<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
	  		</div>
	  	</div>
  );
}


CategoryModifyView.propTypes = {
	containerState: PropTypes.object,
	item: PropTypes.object,
	inputFields: PropTypes.object,
	appPrefs: PropTypes.object,
	appForms: PropTypes.object,
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
	inputChange: PropTypes.func
};
