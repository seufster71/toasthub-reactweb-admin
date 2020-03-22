import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import TextBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function LanguageModifyView({containerState, item, inputFields, appPrefs, 
	itemAppForms, onSave, onCancel, inputChange}) {
    
	let adminLanguageFormTitle = {};

    let adminLanguageFormCode = {};
    
    let adminLanguageFormActive = {};
    let activeDefault = true;
    let activeOptions = [];
    
    let adminLanguageFormDefault = {};
    let defaultDefault = true;
    let defaultOptions = [];
    
    let adminLanguageFormDirection = {};
    
    
    if (itemAppForms != null && itemAppForms.ADMIN_LANGUAGE_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_LANGUAGE_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_LANGUAGE_FORM[i].name) {
    		case "ADMIN_LANGUAGE_FORM_TITLE":
    			adminLanguageFormTitle = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			break;
    		case "ADMIN_LANGUAGE_FORM_CODE":
    			adminLanguageFormCode = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			break;
    		case "ADMIN_LANGUAGE_FORM_ACTIVE":
    			adminLanguageFormActive = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			if (adminLanguageFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminLanguageFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminLanguageFormActive.value);
    			}
    			break;
    		case "ADMIN_LANGUAGE_FORM_DEFAULT":
    			adminLanguageFormDefault = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			if (adminLanguageFormDefault.classModel != "") {
    				let defaultModel = JSON.parse(adminLanguageFormDefault.classModel);
    				if (item != null && item[defaultModel.field] != null) {
    					defaultDefault = item[defaultModel.field];
    				}
    				defaultOptions = JSON.parse(adminLanguageFormDefault.value);
    			}
    			break;
    		case "ADMIN_LANGUAGE_FORM_DIRECTION":
    			adminLanguageFormDirection = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">Language</h4>

			<div className="row">
				<div className="col-sm-4">
					<MultiLangTextInput field={adminLanguageFormTitle} item={item} inputFields={inputFields} onChange={inputChange} appPrefs={appPrefs}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminLanguageFormCode} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<SelectBuilder item={item} field={adminLanguageFormDirection} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
				<div className="col-md-4">
					<Switch item={item} field={adminLanguageFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={activeOptions.options}/>
				</div>
				<div className="col-md-4">
					<Switch item={item} field={adminLanguageFormDefault} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={defaultOptions.options}/>
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


LanguageModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
