import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function RolesModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange}) {

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
    
    let adminRoleFormTitle = {};
    let titleDefault = "";
    let adminRoleFormTitleDefault = {};
    let titleDefaultDefault = "";
    let adminRoleFormTitleText = {};
    let titleTextDefault = "";
    let adminRoleFormCode = {};
    let codeDefault = "";
    let adminRoleFormActive = {};
    let activeDefault = true;
    let activeOptions = [];

    
    if (itemAppForms != null && itemAppForms.ADMIN_ROLE_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_ROLE_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_ROLE_FORM[i].name) {
    		case "ADMIN_ROLE_FORM_TITLE":
    			adminRoleFormTitle = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormTitle.classModel != "") {
    				let titleModel = JSON.parse(adminRoleFormTitle.classModel);
    				if (item != null && item[titleModel.field] != null) {
    					titleDefault = item[titleModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_FORM_TITLE_DEFAULT":
    			adminRoleFormTitleDefault = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormTitleDefault.classModel != "") {
    				let titleDefaultModel = JSON.parse(adminRoleFormTitleDefault.classModel);
    				if (item != null && item[titleDefaultModel.field] != null) {
    					titleDefaultDefault = item[titleDefaultModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_FORM_TITLE_TEXT":
    			adminRoleFormTitleText = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormTitleText.classModel != "") {
    				let titleTextModel = JSON.parse(adminRoleFormTitleText.classModel);
    				if (item != null && item[titleTextModel.field] != null) {
    					titleTextDefault = item[titleTextModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_FORM_CODE":
    			adminRoleFormCode = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormCode.classModel != "") {
    				let codeModel = JSON.parse(adminRoleFormCode.classModel);
    				if (item != null && item[codeModel.field] != null) {
    					codeDefault = item[codeModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_FORM_ACTIVE":
    			adminRoleFormActive = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminRoleFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminRoleFormActive.value);
    			}
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">Role</h4>

			<div className="row">
				{adminRoleFormTitle.rendered && 
					<div className="col-sm-4">
						<Input name={adminRoleFormTitle.name} inputType={adminRoleFormTitle.htmlType} label={adminRoleFormTitle.label} required={adminRoleFormTitle.required} errors={containerState.errors} onChange={inputChange(adminRoleFormTitle.name)} value={(inputFields != null && inputFields[adminRoleFormTitle.name] != null)?inputFields[adminRoleFormTitle.name]:titleDefault}/>
					</div>	
				}
				{adminRoleFormTitleDefault.rendered && 
					<div className="col-sm-4">
						<Input name={adminRoleFormTitleDefault.name} inputType={adminRoleFormTitleDefault.htmlType} label={adminRoleFormTitleDefault.label} required={adminRoleFormTitleDefault.required} errors={containerState.errors} onChange={inputChange(adminRoleFormTitleDefault.name)} value={(inputFields != null && inputFields[adminRoleFormTitleDefault.name] != null)?inputFields[adminRoleFormTitleDefault.name]:titleDefaultDefault}/>
					</div>
				}
				{adminRoleFormTitleText.rendered && 
					<div className="col-sm-4">
						<Input name={adminRoleFormTitleText.name} inputType={adminRoleFormTitleText.htmlType} label={adminRoleFormTitleText.label} required={adminRoleFormTitleText.required} errors={containerState.errors} onChange={inputChange(adminRoleFormTitleText.name)} value={(inputFields != null && inputFields[adminRoleFormTitleText.name] != null)?inputFields[adminRoleFormTitleText.name]:codeDefault}/>
					</div>
				}
			</div>
			{adminRoleFormCode.rendered && 
				<Input name={adminRoleFormCode.name} inputType={adminRoleFormCode.htmlType} label={adminRoleFormCode.label} required={adminRoleFormCode.required} errors={containerState.errors} onChange={inputChange(adminRoleFormCode.name)} value={(inputFields != null && inputFields[adminRoleFormCode.name] != null)?inputFields[adminRoleFormCode.name]:codeDefault}/>
			}
			
			
			<div className="row">
				{adminRoleFormActive.rendered && 
					<div className="col-md-4">
						<Switch name={adminRoleFormActive.name} label={adminRoleFormActive.label} required={adminRoleFormActive.required} fieldName={adminRoleFormActive.name} options={activeOptions.options} value={(inputFields != null && inputFields[adminRoleFormActive.name] != null)?inputFields[adminRoleFormActive.name]:activeDefault}  onClick={inputChange} />
					</div>
				}
			</div>
			
			<button type="button" className="btn ai-btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


RolesModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
