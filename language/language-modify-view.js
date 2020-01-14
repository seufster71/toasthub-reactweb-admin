import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function LanguageModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange}) {
    
	let adminLanguageFormTitle = {};

    let adminLanguageFormCode = {};
    let codeDefault = "";
    
    let adminLanguageFormActive = {};
    let activeDefault = true;
    let activeOptions = [];
    
    let adminLanguageFormDefault = {};
    let defaultDefault = true;
    let defaultOptions = [];
    
    let adminLanguageFormDirection = {};
    let directionDefault = "ltr";
    let directionOptions = [];
    
    
    if (itemAppForms != null && itemAppForms.ADMIN_LANGUAGE_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_LANGUAGE_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_LANGUAGE_FORM[i].name) {
    		case "ADMIN_LANGUAGE_FORM_TITLE":
    			adminLanguageFormTitle = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			break;
    		case "ADMIN_LANGUAGE_FORM_CODE":
    			adminLanguageFormCode = itemAppForms.ADMIN_LANGUAGE_FORM[i];
    			if (adminLanguageFormCode.classModel != "") {
    				let codeModel = JSON.parse(adminLanguageFormCode.classModel);
    				if (item != null && item[codeModel.field] != null) {
    					codeDefault = item[codeModel.field];
    				}
    			}
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
    			if (adminLanguageFormDirection.classModel != "") {
    				let directionModel = JSON.parse(adminLanguageFormDirection.classModel);
    				if (item != null && item[directionModel.field] != null) {
    					directionDefault = item[directionModel.field];
    				}
    				directionOptions = JSON.parse(adminLanguageFormDirection.value);
    			}
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">Language</h4>

			<div className="row">
				<div className="col-sm-4">
					<MultiLangTextInput formField={adminLanguageFormTitle} item={item} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} appPrefs={appPrefs}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<Input name={adminLanguageFormCode.name} inputType={adminLanguageFormCode.htmlType} label={adminLanguageFormCode.label} rendered={adminLanguageFormCode.rendered} required={adminLanguageFormCode.required} errors={containerState.errors} onChange={inputChange(adminLanguageFormCode.name)} value={(inputFields != null && inputFields[adminLanguageFormCode.name] != null)?inputFields[adminLanguageFormCode.name]:codeDefault}/>
				</div>
			</div>
			<div className="row">
				{adminLanguageFormDirection.rendered && 
					<div className="col-md-4">
						<Select name={adminLanguageFormDirection.name} label={adminLanguageFormDirection.label} required={adminLanguageFormDirection.required} errors={containerState.errors} options={directionOptions.options} onChange={inputChange(adminLanguageFormDirection.name)} value={(inputFields != null && inputFields[adminLanguageFormDirection.name] != null)?inputFields[adminLanguageFormDirection.name]:directionDefault}/>
					</div>
				}
				{adminLanguageFormActive.rendered && 
					<div className="col-md-4">
						<Switch name={adminLanguageFormActive.name} label={adminLanguageFormActive.label} rendered={adminLanguageFormActive.rendered} required={adminLanguageFormActive.required} fieldName={adminLanguageFormActive.name} options={activeOptions.options} value={(inputFields != null && inputFields[adminLanguageFormActive.name] != null)?inputFields[adminLanguageFormActive.name]:activeDefault}  onClick={inputChange} />
					</div>
				}
				{adminLanguageFormDefault.rendered && 
					<div className="col-md-4">
						<Switch name={adminLanguageFormDefault.name} label={adminLanguageFormDefault.label} rendered={adminLanguageFormDefault.rendered} required={adminLanguageFormDefault.required} fieldName={adminLanguageFormDefault.name} options={defaultOptions.options} value={(inputFields != null && inputFields[adminLanguageFormDefault.name] != null)?inputFields[adminLanguageFormDefault.name]:defaultDefault}  onClick={inputChange} />
					</div>
				}
			</div>
			
			<button type="button" className="btn ai-btn-primary" onClick={onSave()}>Save</button>
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
