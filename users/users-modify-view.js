import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import SwitchYesNo from '../../coreView/common/switch-yes-no';


export default function UsersModifyView({containerState, user, appPrefs, userAppForms, onSave, onCancel, inputChange}) {

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
    let firstNameModel = {};
    let adminUserFormMiddleName = {};
    let middleNameModel = {};
    let adminUserFormLastName = {};
    let lastNameModel = {};
    let adminUserFormUserName = {};
    let userNameModel = {};
    let adminUserFormEmail = {};
    let emailModel = {};
    let adminUserFormAlternateEmail = {};
    let alternateEmailModel = {};
    let adminUserFormZipcode = {};
    let zipcodeModel = {};
    let adminUserFormPassword = {};
    let passwordModel = {};
    let adminUserFormVerifyPassword = {};
    let verifyPasswordModel = {};
    let adminUserFormActive = {};
    let activeModel = {};
    let adminUserFormLanguage = {};
    let languageModel = {};
    if (userAppForms != null && userAppForms.ADMIN_USER_FORM != null) {
    	for (let i = 0; i < userAppForms.ADMIN_USER_FORM.length; i++) {
    		switch (userAppForms.ADMIN_USER_FORM[i].name) {
    		case "ADMIN_USER_FORM_FIRSTNAME":
    			adminUserFormFirstName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormFirstName.classModel != "") {
    				firstNameModel = JSON.parse(adminUserFormFirstName.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_MIDDLENAME":
    			adminUserFormMiddleName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormMiddleName.classModel != "") {
    				middleNameModel = JSON.parse(adminUserFormMiddleName.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_LASTNAME":
    			adminUserFormLastName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormLastName.classModel != "") {
    				lastNameModel = JSON.parse(adminUserFormLastName.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_USERNAME":
    			adminUserFormUserName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormUserName.classModel != "") {
    				userNameModel = JSON.parse(adminUserFormUserName.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_EMAIL":
    			adminUserFormEmail = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormEmail.classModel != "") {
    				emailModel = JSON.parse(adminUserFormEmail.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_ALTERNATE_EMAIL":
    			adminUserFormAlternateEmail = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormAlternateEmail.classModel != "") {
    				alternateEmailModel = JSON.parse(adminUserFormAlternateEmail.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_ZIPCODE":
    			adminUserFormZipcode = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormZipcode.classModel != "") {
    				zipcodeModel = JSON.parse(adminUserFormZipcode.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_PASSWORD":
    			adminUserFormPassword = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormPassword.classModel != "") {
    				passwordModel = JSON.parse(adminUserFormPassword.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_VERIFY_PASSWORD":
    			adminUserFormVerifyPassword = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormVerifyPassword.classModel != "") {
    				verifyPasswordModel = JSON.parse(adminUserFormVerifyPassword.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_ACTIVE":
    			adminUserFormActive = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormActive.classModel != "") {
    				activeModel = JSON.parse(adminUserFormActive.classModel);
    			}
    			break;
    		case "ADMIN_USER_FORM_LANGUAGE":
    			adminUserFormLanguage = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormLanguage.classModel != "") {
    				languageModel = JSON.parse(adminUserFormLanguage.classModel);
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
						<Input name={adminUserFormFirstName.name} inputType={adminUserFormFirstName.htmlType} label={adminUserFormFirstName.label} required={adminUserFormFirstName.required} errors={containerState.errors} onChange={inputChange(firstNameModel.field)} value={(user != null && user[firstNameModel.field] != null)?user[firstNameModel.field]:""}/>
					</div>	
				}
				{adminUserFormMiddleName.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormMiddleName.name} inputType={adminUserFormMiddleName.htmlType} label={adminUserFormMiddleName.label} required={adminUserFormMiddleName.required} errors={containerState.errors} onChange={inputChange(middleNameModel.field)} value={(user != null && user[middleNameModel.field] != null)?user[middleNameModel.field]:""}/>
						</div>
				}
				{adminUserFormLastName.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormLastName.name} inputType={adminUserFormLastName.htmlType} label={adminUserFormLastName.label} required={adminUserFormLastName.required} errors={containerState.errors} onChange={inputChange(lastNameModel.field)} value={(user != null &&  user[lastNameModel.field] != null)?user[lastNameModel.field]:""}/>
					</div>
				}
			</div>
			{adminUserFormLastName.rendered && 
				<Input name={adminUserFormUserName.name} inputType={adminUserFormUserName.htmlType} label={adminUserFormUserName.label} required={adminUserFormUserName.required} errors={containerState.errors} onChange={inputChange(userNameModel.field)} value={(user != null && user[userNameModel.field] != null)?user[userNameModel.field]:""}/>
			}
			{adminUserFormEmail.rendered && 
				<Input name={adminUserFormEmail.name} inputType={adminUserFormEmail.htmlType} label={adminUserFormEmail.label} required={adminUserFormEmail.required} errors={containerState.errors} onChange={inputChange(emailModel.field)} value={(user != null && user[userNameModel.field] != null)?user[userNameModel.field]:""}/>
			}
			{adminUserFormAlternateEmail.rendered && 
				<Input name={adminUserFormAlternateEmail.name} inputType={adminUserFormAlternateEmail.htmlType} label={adminUserFormAlternateEmail.label} required={adminUserFormAlternateEmail.required} errors={containerState.errors} onChange={inputChange(alternateEmailModel.field)} value={(user != null && user[alternateEmailModel.field] != null)?user[alternateEmailModel.field]:""}/>
			}
			{adminUserFormZipcode.rendered && 
				<Input name={adminUserFormZipcode.name} inputType={adminUserFormZipcode.htmlType} label={adminUserFormZipcode.label} required={adminUserFormZipcode.required} errors={containerState.errors} onChange={inputChange(zipcodeModel.field)} value={(user != null && user[zipcodeModel.field] != null)?user[zipcodeModel.field]:""}/>
			}
			<div className="row">
				{adminUserFormPassword.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormPassword.name} inputType={adminUserFormPassword.htmlType} label={adminUserFormPassword.label} required={adminUserFormPassword.required} errors={containerState.errors} onChange={inputChange(passwordModel.field)} value={(user != null && user[passwordModel.field] != null)?user[passwordModel.field]:""}/>
					</div>
				}
				{adminUserFormVerifyPassword.rendered && 
					<div className="col-sm-4">
						<Input name={adminUserFormVerifyPassword.name} inputType={adminUserFormPassword.htmlType} label={adminUserFormVerifyPassword.label} required={adminUserFormVerifyPassword.required} errors={containerState.errors} onChange={inputChange(verifyPasswordModel.field)} value={(user != null && user[verifyPasswordModel.field] != null)?user[verifyPasswordModel.field]:""}/>
					</div>
				}
			</div>
			<div className="row">
				{adminUserFormActive.rendered && 
					<div className="col-md-4">
						<SwitchYesNo name={adminUserFormActive.name} label={adminUserFormActive.label} required={adminUserFormActive.required} fieldName={activeModel.field} indicatorValue={(user != null && user[activeModel.field] != null)?user[activeModel.field]:true}  onClick={inputChange} />
					</div>
				}
				{adminUserFormLanguage.rendered && 
					<div className="col-md-4">
						<Select name={adminUserFormLanguage.name} label={adminUserFormLanguage.label} required={adminUserFormLanguage.required} errors={containerState.errors} options={options} onChange={inputChange('lang')} value={(user != null && user.lang != null)?user.lang:"en"}/>
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
