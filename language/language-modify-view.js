import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function LanguageModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange}) {

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
    
    let adminitemFormFirstName = {};
    let firstNameDefault = "";
    let adminitemFormMiddleName = {};
    let middleNameDefault = "";
    let adminitemFormLastName = {};
    let lastNameDefault = "";
    let adminitemFormitemName = {};
    let itemNameDefault = "";
    let adminitemFormEmail = {};
    let emailDefault = "";
    let adminitemFormAlternateEmail = {};
    let alternateEmailDefault = "";
    let adminitemFormZipcode = {};
    let zipcodeDefault = "";
    let adminitemFormPassword = {};
    let passwordDefault = "";
    let adminitemFormVerifyPassword = {};
    let verifyPasswordDefault = "";
    let adminitemFormForceReset = {};
    let forceResetDefault = false;
    let forceResetOptions = [];
    let adminitemFormActive = {};
    let activeDefault = true;
    let activeOptions = [];
    let adminitemFormLanguage = {};
    let languageDefault = "en";
    let adminitemFormLogLevel = {};
    let logLevelDefault = "OFF";
    let logLevelOptions = [];
    
    if (itemAppForms != null && itemAppForms.ADMIN_item_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_item_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_item_FORM[i].name) {
    		case "ADMIN_item_FORM_FIRSTNAME":
    			adminitemFormFirstName = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormFirstName.classModel != "") {
    				let firstNameModel = JSON.parse(adminitemFormFirstName.classModel);
    				if (item != null && item[firstNameModel.field] != null) {
    					firstNameDefault = item[firstNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_MIDDLENAME":
    			adminitemFormMiddleName = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormMiddleName.classModel != "") {
    				let middleNameModel = JSON.parse(adminitemFormMiddleName.classModel);
    				if (item != null && item[middleNameModel.field] != null) {
    					middleNameDefault = item[middleNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_LASTNAME":
    			adminitemFormLastName = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormLastName.classModel != "") {
    				let lastNameModel = JSON.parse(adminitemFormLastName.classModel);
    				if (item != null && item[lastNameModel.field] != null) {
    					lastNameDefault = item[lastNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_itemNAME":
    			adminitemFormitemName = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormitemName.classModel != "") {
    				let itemNameModel = JSON.parse(adminitemFormitemName.classModel);
    				if (item != null && item[itemNameModel.field] != null) {
    					itemNameDefault = item[itemNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_EMAIL":
    			adminitemFormEmail = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormEmail.classModel != "") {
    				let emailModel = JSON.parse(adminitemFormEmail.classModel);
    				if (item != null && item[emailModel.field] != null) {
    					emailDefault = item[emailModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_ALTERNATE_EMAIL":
    			adminitemFormAlternateEmail = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormAlternateEmail.classModel != "") {
    				let alternateEmailModel = JSON.parse(adminitemFormAlternateEmail.classModel);
    				if (item != null && item[alternateEmailModel.field] != null) {
    					alternateEmailDefault = item[alternateEmailModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_ZIPCODE":
    			adminitemFormZipcode = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormZipcode.classModel != "") {
    				let zipcodeModel = JSON.parse(adminitemFormZipcode.classModel);
    				if (item != null && item[zipcodeModel.field] != null) {
    					zipcodeDefault = item[zipcodeModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_PASSWORD":
    			adminitemFormPassword = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormPassword.classModel != "") {
    				let passwordModel = JSON.parse(adminitemFormPassword.classModel);
    				if (item != null && item[passwordModel.field] != null) {
    					passwordDefault = item[passwordModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_VERIFY_PASSWORD":
    			adminitemFormVerifyPassword = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormVerifyPassword.classModel != "") {
    				let verifyPasswordModel = JSON.parse(adminitemFormVerifyPassword.classModel);
    				if (item != null && item[verifyPasswordModel.field] != null) {
    					verifyPasswordDefault = item[verifyPasswordModel.field];
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_FORCERESET":
    			adminitemFormForceReset = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormForceReset.classModel != "") {
    				let forceResetModel = JSON.parse(adminitemFormForceReset.classModel);
    				if (item != null && item[forceResetModel.field] != null) {
    					forceResetDefault = item[forceResetModel.field];
    				}
    				forceResetOptions = JSON.parse(adminitemFormForceReset.value);
    			}
    			break;
    		case "ADMIN_item_FORM_ACTIVE":
    			adminitemFormActive = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminitemFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminitemFormActive.value);
    			}
    			break;
    		case "ADMIN_item_FORM_LANGUAGE":
    			adminitemFormLanguage = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormLanguage.classModel != "") {
    				let languageModel = JSON.parse(adminitemFormLanguage.classModel);
    				if (item != null && item.lang != null) {
    					languageDefault = item.lang;
    				}
    			}
    			break;
    		case "ADMIN_item_FORM_LOGLEVEL":
    			adminitemFormLogLevel = itemAppForms.ADMIN_item_FORM[i];
    			if (adminitemFormLogLevel.classModel != "") {
    				let logLevelModel = JSON.parse(adminitemFormLogLevel.classModel);
    				if (item != null && item[logLevelModel.field] != null) {
    					logLevelDefault = item[logLevelModel.field];
    				}
    				logLevelOptions = JSON.parse(adminitemFormLogLevel.value);
    			}
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">item</h4>

			<div className="row">
				{adminitemFormFirstName.rendered && 
					<div className="col-sm-4">
						<Input name={adminitemFormFirstName.name} inputType={adminitemFormFirstName.htmlType} label={adminitemFormFirstName.label} required={adminitemFormFirstName.required} errors={containerState.errors} onChange={inputChange(adminitemFormFirstName.name)} value={(inputFields != null && inputFields[adminitemFormFirstName.name] != null)?inputFields[adminitemFormFirstName.name]:firstNameDefault}/>
					</div>	
				}
				{adminitemFormMiddleName.rendered && 
					<div className="col-sm-4">
						<Input name={adminitemFormMiddleName.name} inputType={adminitemFormMiddleName.htmlType} label={adminitemFormMiddleName.label} required={adminitemFormMiddleName.required} errors={containerState.errors} onChange={inputChange(adminitemFormMiddleName.name)} value={(inputFields != null && inputFields[adminitemFormMiddleName.name] != null)?inputFields[adminitemFormMiddleName.name]:middleNameDefault}/>
					</div>
				}
				{adminitemFormLastName.rendered && 
					<div className="col-sm-4">
						<Input name={adminitemFormLastName.name} inputType={adminitemFormLastName.htmlType} label={adminitemFormLastName.label} required={adminitemFormLastName.required} errors={containerState.errors} onChange={inputChange(adminitemFormLastName.name)} value={(inputFields != null && inputFields[adminitemFormLastName.name] != null)?inputFields[adminitemFormLastName.name]:lastNameDefault}/>
					</div>
				}
			</div>
			{adminitemFormLastName.rendered && 
				<Input name={adminitemFormitemName.name} inputType={adminitemFormitemName.htmlType} label={adminitemFormitemName.label} required={adminitemFormitemName.required} errors={containerState.errors} onChange={inputChange(adminitemFormitemName.name)} value={(inputFields != null && inputFields[adminitemFormitemName.name] != null)?inputFields[adminitemFormitemName.name]:itemNameDefault}/>
			}
			{adminitemFormEmail.rendered && 
				<Input name={adminitemFormEmail.name} inputType={adminitemFormEmail.htmlType} label={adminitemFormEmail.label} required={adminitemFormEmail.required} errors={containerState.errors} onChange={inputChange(adminitemFormEmail.name)} value={(inputFields != null && inputFields[adminitemFormEmail.name] != null)?inputFields[adminitemFormEmail.name]:emailDefault}/>
			}
			{adminitemFormAlternateEmail.rendered && 
				<Input name={adminitemFormAlternateEmail.name} inputType={adminitemFormAlternateEmail.htmlType} label={adminitemFormAlternateEmail.label} required={adminitemFormAlternateEmail.required} errors={containerState.errors} onChange={inputChange(adminitemFormAlternateEmail.name)} value={(inputFields != null && inputFields[adminitemFormAlternateEmail.name] != null)?inputFields[adminitemFormAlternateEmail.name]:alternateEmailDefault}/>
			}
			{adminitemFormZipcode.rendered && 
				<Input name={adminitemFormZipcode.name} inputType={adminitemFormZipcode.htmlType} label={adminitemFormZipcode.label} required={adminitemFormZipcode.required} errors={containerState.errors} onChange={inputChange(adminitemFormZipcode.name)} value={(inputFields != null && inputFields[adminitemFormZipcode.name] != null)?inputFields[adminitemFormZipcode.name]:zipcodeDefault}/>
			}
			<div className="row">
				{adminitemFormPassword.rendered && 
					<div className="col-sm-4">
						<Input name={adminitemFormPassword.name} inputType={adminitemFormPassword.htmlType} label={adminitemFormPassword.label} required={adminitemFormPassword.required} errors={containerState.errors} onChange={inputChange(adminitemFormPassword.name)} value={(inputFields != null && inputFields[adminitemFormPassword.name] != null)?inputFields[adminitemFormPassword.name]:passwordDefault}/>
					</div>
				}
				{adminitemFormVerifyPassword.rendered && 
					<div className="col-sm-4">
						<Input name={adminitemFormVerifyPassword.name} inputType={adminitemFormPassword.htmlType} label={adminitemFormVerifyPassword.label} required={adminitemFormVerifyPassword.required} errors={containerState.errors} onChange={inputChange(adminitemFormVerifyPassword.name)} value={(inputFields != null && inputFields[adminitemFormVerifyPassword.name] != null)?inputFields[adminitemFormVerifyPassword.name]:verifyPasswordDefault}/>
					</div>
				}
				{adminitemFormForceReset.rendered && 
					<div className="col-sm-4">
						<Switch name={adminitemFormForceReset.name} label={adminitemFormForceReset.label} required={adminitemFormForceReset.required} fieldName={adminitemFormForceReset.name} options={forceResetOptions.options} value={(inputFields != null && inputFields[adminitemFormForceReset.name] != null)?inputFields[adminitemFormForceReset.name]:forceResetDefault} onClick={inputChange} />
					</div>
				}
			</div>
			<div className="row">
				{adminitemFormActive.rendered && 
					<div className="col-md-4">
						<Switch name={adminitemFormActive.name} label={adminitemFormActive.label} required={adminitemFormActive.required} fieldName={adminitemFormActive.name} options={activeOptions.options} value={(inputFields != null && inputFields[adminitemFormActive.name] != null)?inputFields[adminitemFormActive.name]:activeDefault}  onClick={inputChange} />
					</div>
				}
				{adminitemFormLanguage.rendered && 
					<div className="col-md-4">
						<Select name={adminitemFormLanguage.name} label={adminitemFormLanguage.label} required={adminitemFormLanguage.required} errors={containerState.errors} options={options} onChange={inputChange(adminitemFormLanguage.name)} value={(inputFields != null && inputFields[adminitemFormLanguage.name] != null)?inputFields[adminitemFormLanguage.name]:languageDefault}/>
					</div>
				}
				{adminitemFormLogLevel.rendered && 
					<div className="col-md-4">
						<Select name={adminitemFormLogLevel.name} label={adminitemFormLogLevel.label} required={adminitemFormLogLevel.required} errors={containerState.errors} options={logLevelOptions.options} onChange={inputChange(adminitemFormLogLevel.name)} value={(inputFields != null && inputFields[adminitemFormLogLevel.name] != null)?inputFields[adminitemFormLogLevel.name]:logLevelDefault}/>
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
