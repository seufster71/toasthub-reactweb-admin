import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import TextBuilder from '../../coreView/common/text-input-builder';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function UsersModifyView({containerState, item, inputFields, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange, onBlur}) {

	let options=[];
    if (appPrefs != null && appPrefs.prefGlobal != null && appPrefs.prefGlobal.LANGUAGES != null && appPrefs.prefGlobal.LANGUAGES.length > 0){
    	for (let i = 0; i < appPrefs.prefGlobal.LANGUAGES.length; i++) {
    		let name = appPrefs.prefGlobal.LANGUAGES[i].title.defaultText;
    		if (appPrefs.prefGlobal.LANGUAGES[i].title.langTexts != null) {
    			for (let j = 0; j < appPrefs.prefGlobal.LANGUAGES[i].title.langTexts.length; j++) {
    				if (appPrefs.prefGlobal.LANGUAGES[i].title.langTexts[j].lang == appPrefs.lang) {
    					name = appPrefs.prefGlobal.LANGUAGES[i].title.langTexts[j].text;
    				}
    			}
    		}
    		options.push({"value":appPrefs.prefGlobal.LANGUAGES[i].code, "text":name});
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
    
    if (itemPrefForms != null && itemPrefForms.ADMIN_USER_PAGE != null) {
    	let formItems = itemPrefForms.ADMIN_USER_PAGE;
    	for (let i = 0; i < formItems.length; i++) {
    		switch (formItems[i].name) {
    		case "ADMIN_USER_FORM_FIRSTNAME":
    			adminUserFormFirstName = formItems[i];
    			if (adminUserFormFirstName.classModel != "") {
    				let firstNameModel = JSON.parse(adminUserFormFirstName.classModel);
    				if (item != null && item[firstNameModel.field] != null) {
    					firstNameDefault = item[firstNameModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_FORM_MIDDLENAME":
    			adminUserFormMiddleName = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_LASTNAME":
    			adminUserFormLastName = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_USERNAME":
    			adminUserFormUserName = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_EMAIL":
    			adminUserFormEmail = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_ALTERNATE_EMAIL":
    			adminUserFormAlternateEmail = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_ZIPCODE":
    			adminUserFormZipcode = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_PASSWORD":
    			adminUserFormPassword = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_VERIFY_PASSWORD":
    			adminUserFormVerifyPassword = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_FORCERESET":
    			adminUserFormForceReset = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_ACTIVE":
    			adminUserFormActive = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_LANGUAGE":
    			adminUserFormLanguage = formItems[i];
    			break;
    		case "ADMIN_USER_FORM_LOGLEVEL":
    			adminUserFormLogLevel = formItems[i];
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
  itemPrefForms: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  onBlur: PropTypes.func
};
