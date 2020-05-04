import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import TextBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';
import FormBuilder from '../../coreView/common/form-builder';
import moment from 'moment';

export default function PreferenceModifyView({containerState, item, inputFields, appPrefs, itemPrefForms, onSave, onCancel, inputChange, viewType}) {
	let formName = "ADMIN_PREFERENCE_PAGE";
	let formTitle = "Preferences";
	let formGroup = "FORM1";
	
    if (viewType === "FORM") {
    	formName = "ADMIN_FORMFIELD_PAGE";
    	formTitle = "Formfields";
    	formGroup = "FORM-NAME";
    } else if (viewType === "LABEL") {
    	formName = "ADMIN_LABEL_PAGE";
    	formTitle = "Labels";
    	formGroup = "FORM-NAME";
    } else if (viewType === "TEXT") {
    	formName = "ADMIN_TEXT_PAGE";
    	formTitle = "Texts";
    	formGroup = "FORM-NAME";
    } else if (viewType === "OPTION") {
    	formName = "ADMIN_OPTION_PAGE";
    	formTitle = "Options";
    	formGroup = "FORM-NAME";
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
