import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PreferenceModifyView({containerState, item, inputFields, appPrefs, itemPrefForms, onSave, onCancel, inputChange, viewType}) {
	let formName = "ADMIN_PREFERENCE_FORM";
	let formTitle = "Preferences";
	let formGroup = "FORM1";
	
    if (viewType === "FORM") {
    	formName = "ADMIN_FORMFIELD_FORM";
    	formTitle = "Formfields";
    	formGroup = "FORM1";
    } else if (viewType === "LABEL") {
    	formName = "ADMIN_LABEL_FORM";
    	formTitle = "Labels";
    	formGroup = "FORM1";
    } else if (viewType === "TEXT") {
    	formName = "ADMIN_TEXT_FORM";
    	formTitle = "Texts";
    	formGroup = "FORM1";
    } else if (viewType === "OPTION") {
    	formName = "ADMIN_OPTION_FORM";
    	formTitle = "Options";
    	formGroup = "FORM1";
    }
    
    return (
	    <FormBuilder containerState={containerState} item={item} formName={formName} formTitle={formTitle} formGroup={formGroup} inputFields={inputFields} appPrefs={appPrefs} prefForms={itemPrefForms} onSave={onSave} onCancel={onCancel} onChange={inputChange}/>
	);
}


PreferenceModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  viewType: PropTypes.string
};
