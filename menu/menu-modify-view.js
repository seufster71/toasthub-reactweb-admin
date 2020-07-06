import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function MenuModifyView({containerState, item, inputFields, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange}) {

	let formName = "ADMIN_MENU_FORM";
	let formTitle = "Menu";
	let formGroup = "FORM1";
    		
	return (
			<FormBuilder containerState={containerState} item={item} formName={formName} formTitle={formTitle} formGroup={formGroup} inputFields={inputFields} appPrefs={appPrefs} prefForms={itemPrefForms} onSave={onSave} onCancel={onCancel} onChange={inputChange}/>
  );
}


MenuModifyView.propTypes = {
	containerState: PropTypes.object,
	item: PropTypes.object,
	inputFields: PropTypes.object,
	appPrefs: PropTypes.object,
	itemPrefForms: PropTypes.object,
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
	inputChange: PropTypes.func
};
