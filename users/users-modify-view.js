import React from 'react';
import PropTypes from 'prop-types';
import TextBuilder from '../../coreView/common/text-input-builder';
import SelectBuilder from '../../coreView/common/select-input-builder';
import Switch from '../../coreView/common/switch';

export default function UsersModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, onBlur}) {

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
    		options.push({"value":appPrefs.prefGlobal.LANGUAGES[i].code, "label":name});
    	}
    }
    let adminUserFormFirstName = {};
    
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
    
    if (itemState.prefForms != null && itemState.prefForms.ADMIN_USER_FORM != null) {
    	let formItems = itemState.prefForms.ADMIN_USER_FORM;
    	for (let i = 0; i < formItems.length; i++) {
    		switch (formItems[i].name) {
    		case "ADMIN_USER_FORM_FIRSTNAME":
    			adminUserFormFirstName = formItems[i];
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
    	<div className="container">
    		
			<h4 className="modal-title">User</h4>

			<div className="row">
				<div className="col-sm-4">
					<TextBuilder field={adminUserFormFirstName} itemState={itemState} inputChange={inputChange}/>
				</div>
				<div className="col-sm-4">
					<TextBuilder field={adminUserFormMiddleName} itemState={itemState} inputChange={inputChange}/>
				</div>
				<div className="col-sm-4">
					<TextBuilder field={adminUserFormLastName} itemState={itemState} inputChange={inputChange}/>
				</div>
			</div>
			<TextBuilder field={adminUserFormUserName} itemState={itemState} inputChange={inputChange}/>
			<TextBuilder field={adminUserFormEmail} itemState={itemState} inputChange={inputChange}/>
			<TextBuilder field={adminUserFormAlternateEmail} itemState={itemState} inputChange={inputChange}/>
			<TextBuilder field={adminUserFormZipcode} itemState={itemState} inputChange={inputChange}/>
			<div className="row">
				<div className="col-sm-4">
					<TextBuilder field={adminUserFormPassword} itemState={itemState} inputChange={inputChange} onBlur={onBlur}/>
				</div>
				<div className="col-sm-4">
					<TextBuilder field={adminUserFormVerifyPassword} itemState={itemState} inputChange={inputChange} onBlur={onBlur}/>
				</div>
				<div className="col-sm-4">
					<Switch field={adminUserFormForceReset} itemState={itemState} inputChange={inputChange} />
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<Switch field={adminUserFormActive} itemState={itemState} inputChange={inputChange} />
				</div>
				<div className="col-md-4">		
					<SelectBuilder field={adminUserFormLanguage} options={options} itemState={itemState} inputChange={inputChange}/>
				</div>
				<div className="col-md-4">
					<SelectBuilder field={adminUserFormLogLevel} itemState={itemState} inputChange={inputChange}/>
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={() => onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => onCancel()}>Cancel</button>
    	</div>
    );
}


UsersModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};
