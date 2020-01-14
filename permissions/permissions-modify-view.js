import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function PermissionsModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange}) {

	let options=[];
    if (appPrefs != null && appPrefs.appGlobal != null && appPrefs.appGlobal.LANGUAGES != null && appPrefs.appGlobal.LANGUAGES.length > 0){
    	for (let i = 0; i < appPrefs.appGlobal.LANGUAGES.length; i++) {
    		let name = appPrefs.appGlobal.LANGUAGES[i].title.defaultText;
    		if (appPrefs.appGlobal.LANGUAGES[i].title.langTexts != null) {
    			for (let j = 0; j < appPrefs.appGlobal.LANGUAGES[i].title.langTexts.length; j++) {
    				if (appPrefs.appGlobal.LANGUAGES[i].title.langTexts[j].lang == appPrefs.lang) {
    					name = appPrefs.appGlobal.LANGUAGES[i].title.langTexts[j].text;
    				}
    			}
    		}
    		options.push({"value":appPrefs.appGlobal.LANGUAGES[i].code, "text":name});
    	}
    }
    
    let adminPermissionFormTitle = {};
    let titleDefault = "";
    let adminPermissionFormTitleDefault = {};
    let titleDefaultDefault = "";
    let adminPermissionFormTitleText = {};
    let titleTextDefault = "";
    let adminPermissionFormCode = {};
    let codeDefault = "";
    let adminPermissionFormCanRead = {};
    let canReadDefault = "";
    let adminPermissionFormCanWrite = {};
    let canWriteDefault = "";
    let adminPermissionFormActive = {};
    let activeDefault = true;
    let activeOptions = [];

    
    if (itemAppForms != null && itemAppForms.ADMIN_PERMISSION_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_PERMISSION_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_PERMISSION_FORM[i].name) {
    		case "ADMIN_PERMISSION_FORM_TITLE":
    			adminPermissionFormTitle = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormTitle.classModel != "") {
    				let titleModel = JSON.parse(adminPermissionFormTitle.classModel);
    				if (item != null && item[titleModel.field] != null) {
    					titleDefault = item[titleModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_TITLE_DEFAULT":
    			adminPermissionFormTitleDefault = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormTitleDefault.classModel != "") {
    				let titleDefaultModel = JSON.parse(adminPermissionFormTitleDefault.classModel);
    				if (item != null && item[titleDefaultModel.field] != null) {
    					titleDefaultDefault = item[titleDefaultModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_TITLE_TEXT":
    			adminPermissionFormTitleText = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormTitleText.classModel != "") {
    				let titleTextModel = JSON.parse(adminPermissionFormTitleText.classModel);
    				if (item != null && item[titleTextModel.field] != null) {
    					titleTextDefault = item[titleTextModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_CODE":
    			adminPermissionFormCode = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormCode.classModel != "") {
    				let codeModel = JSON.parse(adminPermissionFormCode.classModel);
    				if (item != null && item[codeModel.field] != null) {
    					codeDefault = item[codeModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_CAN_READ":
    			adminPermissionFormCanRead = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormCanRead.classModel != "") {
    				let canReadModel = JSON.parse(adminPermissionFormCanRead.classModel);
    				if (item != null && item[canReadModel.field] != null) {
    					canReadDefault = item[canReadModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_CAN_WRITE":
    			adminPermissionFormCanWrite = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormCanWrite.classModel != "") {
    				let canWriteModel = JSON.parse(adminPermissionFormCanWrite.classModel);
    				if (item != null && item[canWriteModel.field] != null) {
    					canWriteDefault = item[canWriteModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_ACTIVE":
    			adminPermissionFormActive = itemAppForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminPermissionFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminPermissionFormActive.value);
    			}
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">Permission</h4>

			<div className="row">
				{adminPermissionFormTitle.rendered && 
					<div className="col-sm-4">
						<Input name={adminPermissionFormTitle.name} inputType={adminPermissionFormTitle.htmlType} label={adminPermissionFormTitle.label} required={adminPermissionFormTitle.required} errors={containerState.errors} onChange={inputChange(adminPermissionFormTitle.name)} value={(inputFields != null && inputFields[adminPermissionFormTitle.name] != null)?inputFields[adminPermissionFormTitle.name]:titleDefault}/>
					</div>	
				}
				{adminPermissionFormTitleDefault.rendered && 
					<div className="col-sm-4">
						<Input name={adminPermissionFormTitleDefault.name} inputType={adminPermissionFormTitleDefault.htmlType} label={adminPermissionFormTitleDefault.label} required={adminPermissionFormTitleDefault.required} errors={containerState.errors} onChange={inputChange(adminPermissionFormTitleDefault.name)} value={(inputFields != null && inputFields[adminPermissionFormTitleDefault.name] != null)?inputFields[adminPermissionFormTitleDefault.name]:titleDefaultDefault}/>
					</div>
				}
				{adminPermissionFormTitleText.rendered && 
					<div className="col-sm-4">
						<Input name={adminPermissionFormTitleText.name} inputType={adminPermissionFormTitleText.htmlType} label={adminPermissionFormTitleText.label} required={adminPermissionFormTitleText.required} errors={containerState.errors} onChange={inputChange(adminPermissionFormTitleText.name)} value={(inputFields != null && inputFields[adminPermissionFormTitleText.name] != null)?inputFields[adminPermissionFormTitleText.name]:codeDefault}/>
					</div>
				}
			</div>
			{adminPermissionFormCode.rendered && 
				<Input name={adminPermissionFormCode.name} inputType={adminPermissionFormCode.htmlType} label={adminPermissionFormCode.label} required={adminPermissionFormCode.required} errors={containerState.errors} onChange={inputChange(adminPermissionFormCode.name)} value={(inputFields != null && inputFields[adminPermissionFormCode.name] != null)?inputFields[adminPermissionFormCode.name]:codeDefault}/>
			}
			
			
			<div className="row">
				{adminPermissionFormActive.rendered && 
					<div className="col-md-4">
						<Switch name={adminPermissionFormActive.name} label={adminPermissionFormActive.label} required={adminPermissionFormActive.required} fieldName={adminPermissionFormActive.name} options={activeOptions.options} value={(inputFields != null && inputFields[adminPermissionFormActive.name] != null)?inputFields[adminPermissionFormActive.name]:activeDefault}  onClick={inputChange} />
					</div>
				}
			</div>
			
			<button type="button" className="btn ai-btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


PermissionsModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
