import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function UsersModifyView({containerState, user, inputFields, appPrefs, userAppForms, onSave, onCancel, inputChange}) {

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
    
    let adminUserFormFirstName = {};
    let firstNameDefault = "";
    let adminUserFormMiddleName = {};
    let middleNameDefault = "";
    let adminUserFormLastName = {};
    let lastNameDefault = "";
    let adminUserFormUserName = {};
    let userNameDefault = "";
    let adminUserFormEmail = {};
    let emailDefault = "";
    let adminUserFormAlternateEmail = {};
    let alternateEmailDefault = "";
    let adminUserFormZipcode = {};
    let zipcodeDefault = "";
    let adminUserFormPassword = {};
    let passwordDefault = "";
    let adminUserFormVerifyPassword = {};
    let verifyPasswordDefault = "";
    let adminUserFormForceReset = {};
    let forceResetDefault = false;
    let forceResetOptions = [];
    let adminUserFormActive = {};
    let activeDefault = true;
    let activeOptions = [];
    let adminUserFormLanguage = {};
    let languageDefault = "en";
    let adminUserFormLogLevel = {};
    let logLevelDefault = "OFF";
    let logLevelOptions = [];
    
    if (userAppForms != null && userAppForms.ADMIN_USER_FORM != null) {
    	for (let i = 0; i < userAppForms.ADMIN_USER_FORM.length; i++) {
    		switch (userAppForms.ADMIN_USER_FORM[i].name) {
    		case "ADMIN_USER_FORM_FIRSTNAME":
    			adminUserFormFirstName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormFirstName.classModel != "") {
    				let firstNameModel = JSON.parse(adminUserFormFirstName.classModel);
    				if (user != null && user[firstNameModel.field] != null) {
    					firstNameDefault = user[firstNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_MIDDLENAME":
    			adminUserFormMiddleName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormMiddleName.classModel != "") {
    				let middleNameModel = JSON.parse(adminUserFormMiddleName.classModel);
    				if (user != null && user[middleNameModel.field] != null) {
    					middleNameDefault = user[middleNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_LASTNAME":
    			adminUserFormLastName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormLastName.classModel != "") {
    				let lastNameModel = JSON.parse(adminUserFormLastName.classModel);
    				if (user != null && user[lastNameModel.field] != null) {
    					lastNameDefault = user[lastNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_USERNAME":
    			adminUserFormUserName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormUserName.classModel != "") {
    				let userNameModel = JSON.parse(adminUserFormUserName.classModel);
    				if (user != null && user[userNameModel.field] != null) {
    					userNameDefault = user[userNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_EMAIL":
    			adminUserFormEmail = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormEmail.classModel != "") {
    				let emailModel = JSON.parse(adminUserFormEmail.classModel);
    				if (user != null && user[emailModel.field] != null) {
    					emailDefault = user[emailModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_ALTERNATE_EMAIL":
    			adminUserFormAlternateEmail = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormAlternateEmail.classModel != "") {
    				let alternateEmailModel = JSON.parse(adminUserFormAlternateEmail.classModel);
    				if (user != null && user[alternateEmailModel.field] != null) {
    					alternateEmailDefault = user[alternateEmailModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_ZIPCODE":
    			adminUserFormZipcode = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormZipcode.classModel != "") {
    				let zipcodeModel = JSON.parse(adminUserFormZipcode.classModel);
    				if (user != null && user[zipcodeModel.field] != null) {
    					zipcodeDefault = user[zipcodeModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_PASSWORD":
    			adminUserFormPassword = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormPassword.classModel != "") {
    				let passwordModel = JSON.parse(adminUserFormPassword.classModel);
    				if (user != null && user[passwordModel.field] != null) {
    					passwordDefault = user[passwordModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_VERIFY_PASSWORD":
    			adminUserFormVerifyPassword = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormVerifyPassword.classModel != "") {
    				let verifyPasswordModel = JSON.parse(adminUserFormVerifyPassword.classModel);
    				if (user != null && user[verifyPasswordModel.field] != null) {
    					verifyPasswordDefault = user[verifyPasswordModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_FORCERESET":
    			adminUserFormForceReset = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormForceReset.classModel != "") {
    				let forceResetModel = JSON.parse(adminUserFormForceReset.classModel);
    				if (user != null && user[forceResetModel.field] != null) {
    					forceResetDefault = user[forceResetModel.field];
    				}
    				forceResetOptions = JSON.parse(adminUserFormForceReset.value);
    			}
    			break;
    		case "ADMIN_USER_FORM_ACTIVE":
    			adminUserFormActive = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminUserFormActive.classModel);
    				if (user != null && user[activeModel.field] != null) {
    					activeDefault = user[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminUserFormActive.value);
    			}
    			break;
    		case "ADMIN_USER_FORM_LANGUAGE":
    			adminUserFormLanguage = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormLanguage.classModel != "") {
    				let languageModel = JSON.parse(adminUserFormLanguage.classModel);
    				if (user != null && user.lang != null) {
    					languageDefault = user.lang;
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_LOGLEVEL":
    			adminUserFormLogLevel = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormLogLevel.classModel != "") {
    				let logLevelModel = JSON.parse(adminUserFormLogLevel.classModel);
    				if (user != null && user[logLevelModel.field] != null) {
    					logLevelDefault = user[logLevelModel.field];
    				}
    				logLevelOptions = JSON.parse(adminUserFormLogLevel.value);
    			}
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">User</h4>

			<div className="row">
				{adminUserFormFirstName.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormFirstName.name} inputType={adminUserFormFirstName.htmlType} label={adminUserFormFirstName.label} required={adminUserFormFirstName.required} errors={containerState.errors} onChange={inputChange(adminUserFormFirstName.name)} value={(inputFields != null && inputFields[adminUserFormFirstName.name] != null)?inputFields[adminUserFormFirstName.name]:firstNameDefault}/>
					</div>	
				}
				{adminUserFormMiddleName.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormMiddleName.name} inputType={adminUserFormMiddleName.htmlType} label={adminUserFormMiddleName.label} required={adminUserFormMiddleName.required} errors={containerState.errors} onChange={inputChange(adminUserFormMiddleName.name)} value={(inputFields != null && inputFields[adminUserFormMiddleName.name] != null)?inputFields[adminUserFormMiddleName.name]:middleNameDefault}/>
					</div>
				}
				{adminUserFormLastName.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormLastName.name} inputType={adminUserFormLastName.htmlType} label={adminUserFormLastName.label} required={adminUserFormLastName.required} errors={containerState.errors} onChange={inputChange(adminUserFormLastName.name)} value={(inputFields != null && inputFields[adminUserFormLastName.name] != null)?inputFields[adminUserFormLastName.name]:lastNameDefault}/>
					</div>
				}
			</div>
			{adminUserFormLastName.rendered && 
				<Input name={adminUserFormUserName.name} inputType={adminUserFormUserName.htmlType} label={adminUserFormUserName.label} required={adminUserFormUserName.required} errors={containerState.errors} onChange={inputChange(adminUserFormUserName.name)} value={(inputFields != null && inputFields[adminUserFormUserName.name] != null)?inputFields[adminUserFormUserName.name]:userNameDefault}/>
			}
			{adminUserFormEmail.rendered && 
				<Input name={adminUserFormEmail.name} inputType={adminUserFormEmail.htmlType} label={adminUserFormEmail.label} required={adminUserFormEmail.required} errors={containerState.errors} onChange={inputChange(adminUserFormEmail.name)} value={(inputFields != null && inputFields[adminUserFormEmail.name] != null)?inputFields[adminUserFormEmail.name]:emailDefault}/>
			}
			{adminUserFormAlternateEmail.rendered && 
				<Input name={adminUserFormAlternateEmail.name} inputType={adminUserFormAlternateEmail.htmlType} label={adminUserFormAlternateEmail.label} required={adminUserFormAlternateEmail.required} errors={containerState.errors} onChange={inputChange(adminUserFormAlternateEmail.name)} value={(inputFields != null && inputFields[adminUserFormAlternateEmail.name] != null)?inputFields[adminUserFormAlternateEmail.name]:alternateEmailDefault}/>
			}
			{adminUserFormZipcode.rendered && 
				<Input name={adminUserFormZipcode.name} inputType={adminUserFormZipcode.htmlType} label={adminUserFormZipcode.label} required={adminUserFormZipcode.required} errors={containerState.errors} onChange={inputChange(adminUserFormZipcode.name)} value={(inputFields != null && inputFields[adminUserFormZipcode.name] != null)?inputFields[adminUserFormZipcode.name]:zipcodeDefault}/>
			}
			<div className="row">
				{adminUserFormPassword.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormPassword.name} inputType={adminUserFormPassword.htmlType} label={adminUserFormPassword.label} required={adminUserFormPassword.required} errors={containerState.errors} onChange={inputChange(adminUserFormPassword.name)} value={(inputFields != null && inputFields[adminUserFormPassword.name] != null)?inputFields[adminUserFormPassword.name]:passwordDefault}/>
					</div>
				}
				{adminUserFormVerifyPassword.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormVerifyPassword.name} inputType={adminUserFormPassword.htmlType} label={adminUserFormVerifyPassword.label} required={adminUserFormVerifyPassword.required} errors={containerState.errors} onChange={inputChange(adminUserFormVerifyPassword.name)} value={(inputFields != null && inputFields[adminUserFormVerifyPassword.name] != null)?inputFields[adminUserFormVerifyPassword.name]:verifyPasswordDefault}/>
					</div>
				}
				{adminUserFormForceReset.rendered && 
					<div className="col-sm-4">
						<Switch name={adminUserFormForceReset.name} label={adminUserFormForceReset.label} required={adminUserFormForceReset.required} fieldName={adminUserFormForceReset.name} options={forceResetOptions.options} value={(inputFields != null && inputFields[adminUserFormForceReset.name] != null)?inputFields[adminUserFormForceReset.name]:forceResetDefault} onClick={inputChange} />
					</div>
				}
			</div>
			<div className="row">
				{adminUserFormActive.rendered && 
					<div className="col-md-4">
						<Switch name={adminUserFormActive.name} label={adminUserFormActive.label} required={adminUserFormActive.required} fieldName={adminUserFormActive.name} options={activeOptions.options} value={(inputFields != null && inputFields[adminUserFormActive.name] != null)?inputFields[adminUserFormActive.name]:activeDefault}  onClick={inputChange} />
					</div>
				}
				{adminUserFormLanguage.rendered && 
					<div className="col-md-4">
						<Select name={adminUserFormLanguage.name} label={adminUserFormLanguage.label} required={adminUserFormLanguage.required} errors={containerState.errors} options={options} onChange={inputChange(adminUserFormLanguage.name)} value={(inputFields != null && inputFields[adminUserFormLanguage.name] != null)?inputFields[adminUserFormLanguage.name]:languageDefault}/>
					</div>
				}
				{adminUserFormLogLevel.rendered && 
					<div className="col-md-4">
						<Select name={adminUserFormLogLevel.name} label={adminUserFormLogLevel.label} required={adminUserFormLogLevel.required} errors={containerState.errors} options={logLevelOptions.options} onChange={inputChange(adminUserFormLogLevel.name)} value={(inputFields != null && inputFields[adminUserFormLogLevel.name] != null)?inputFields[adminUserFormLogLevel.name]:logLevelDefault}/>
					</div>
				}
			</div>
			
			<button type="button" className="btn ai-btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


UsersModifyView.propTypes = {
  containerState: PropTypes.object,
  user: PropTypes.object,
  appPrefs: PropTypes.object,
  userAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
