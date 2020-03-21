import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import TextBuilder from '../../coreView/common/text-input-builder';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function UsersModifyView({containerState, item, inputFields, appPrefs, 
	userAppForms, onSave, onCancel, inputChange, onBlur}) {

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

    let adminUserFormLastName = {};

    let adminUserFormUserName = {};

    let adminUserFormEmail = {};

    let adminUserFormAlternateEmail = {};

    let adminUserFormZipcode = {};

    let adminUserFormPassword = {};

    let adminUserFormVerifyPassword = {};
    
    let adminUserFormForceReset = {};
    
    let adminUserFormActive = {};
    
    let adminUserFormLanguage = {};
    
    let adminUserFormLogLevel = {};
    
    if (userAppForms != null && userAppForms.ADMIN_USER_FORM != null) {
    	for (let i = 0; i < userAppForms.ADMIN_USER_FORM.length; i++) {
    		switch (userAppForms.ADMIN_USER_FORM[i].name) {
    		case "ADMIN_USER_FORM_FIRSTNAME":
    			adminUserFormFirstName = userAppForms.ADMIN_USER_FORM[i];
    			if (adminUserFormFirstName.classModel != "") {
    				let firstNameModel = JSON.parse(adminUserFormFirstName.classModel);
    				if (item != null && item[firstNameModel.field] != null) {
    					firstNameDefault = item[firstNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_MIDDLENAME":
    			adminUserFormMiddleName = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_LASTNAME":
    			adminUserFormLastName = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_USERNAME":
    			adminUserFormUserName = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_EMAIL":
    			adminUserFormEmail = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_ALTERNATE_EMAIL":
    			adminUserFormAlternateEmail = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_ZIPCODE":
    			adminUserFormZipcode = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_PASSWORD":
    			adminUserFormPassword = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_VERIFY_PASSWORD":
    			adminUserFormVerifyPassword = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_FORCERESET":
    			adminUserFormForceReset = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_ACTIVE":
    			adminUserFormActive = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_LANGUAGE":
    			adminUserFormLanguage = userAppForms.ADMIN_USER_FORM[i];
    			break;
    		case "ADMIN_USER_FORM_LOGLEVEL":
    			adminUserFormLogLevel = userAppForms.ADMIN_USER_FORM[i];
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
						<Input name={adminUserFormFirstName.name} inputType={adminUserFormFirstName.htmlType} label={adminUserFormFirstName.label} required={adminUserFormFirstName.required} errors={containerState.errors} successes={containerState.successes} onChange={inputChange(adminUserFormFirstName.name)} value={(inputFields != null && inputFields[adminUserFormFirstName.name] != null)?inputFields[adminUserFormFirstName.name]:firstNameDefault}/>
					</div>	
				}
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminUserFormMiddleName} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminUserFormLastName} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
			</div>
			<TextBuilder item={item} field={adminUserFormUserName} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
			<TextBuilder item={item} field={adminUserFormEmail} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
			<TextBuilder item={item} field={adminUserFormAlternateEmail} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
			<TextBuilder item={item} field={adminUserFormZipcode} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
			<div className="row">
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminUserFormPassword} inputFields={inputFields} containerState={containerState} onChange={inputChange} onBlur={onBlur}/>
				</div>
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminUserFormVerifyPassword} inputFields={inputFields} containerState={containerState} onChange={inputChange} onBlur={onBlur}/>
				</div>
				<div className="col-sm-4">
					<Switch item={item} field={adminUserFormForceReset} inputFields={inputFields} containerState={containerState} onChange={inputChange} />
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<Switch item={item} field={adminUserFormActive} inputFields={inputFields} containerState={containerState} onChange={inputChange} />
				</div>
				<div className="col-md-4">		
					<SelectBuilder item={item} field={adminUserFormLanguage} inputFields={inputFields} options={options} containerState={containerState} onChange={inputChange}/>
				</div>
				<div className="col-md-4">
					<SelectBuilder item={item} field={adminUserFormLogLevel} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


UsersModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object.isRequired,
  userAppForms: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  onBlur: PropTypes.func
};
