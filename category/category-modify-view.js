import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function CategoryModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange}) {

	let formName = "ADMIN_CATEGORY_FORM";
	let formTitle = "Category";
	let formGroup = "FORM1";
    		
	return (
			<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange}/>
  );
}


CategoryModifyView.propTypes = {
	itemState: PropTypes.object.isRequired,
	appPrefs: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	inputChange: PropTypes.func.isRequired
};
