import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import TextBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function LanguageModifyView({containerState, item, inputFields, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange}) {
    
	let adminLanguageFormTitle = {};

    let adminLanguageFormCode = {};
    
    let adminLanguageFormActive = {};
    let activeDefault = true;
    let activeOptions = [];
    
    let adminLanguageFormDefault = {};
    let defaultDefault = true;
    let defaultOptions = [];
    
    let adminLanguageFormDirection = {};
    
    if (itemPrefForms != null && itemPrefForms.ADMIN_LANGUAGE_FORM != null) {
    	let formItems = itemPrefForms.ADMIN_LANGUAGE_FORM;
    	for (let i = 0; i < formItems.length; i++) {
    		switch (formItems[i].name) {
    		case "ADMIN_LANGUAGE_FORM_TITLE":
    			adminLanguageFormTitle = formItems[i];
    			break;
    		case "ADMIN_LANGUAGE_FORM_CODE":
    			adminLanguageFormCode = formItems[i];
    			break;
    		case "ADMIN_LANGUAGE_FORM_ACTIVE":
    			adminLanguageFormActive = formItems[i];
    			if (adminLanguageFormActive.value != "") {
    				let valueObj = JSON.parse(adminLanguageFormActive.value);
    				if (valueObj.options != null) {
    					activeOptions = valueObj.options;
    				} else if (valueObj.referPref != null) {
    					let pref = appPrefs.prefTexts[valueObj.referPref.prefName][valueObj.referPref.prefItem];
    					if (pref != null && pref.value != null && pref.value != "") {
    						let value = JSON.parse(pref.value);
    						if (value.options != null) {
    							activeOptions = value.options;
    						}
    					}
    				}
    			}
    			break;
    		case "ADMIN_LANGUAGE_FORM_DEFAULT":
    			adminLanguageFormDefault = formItems[i];
    			if (adminLanguageFormDefault.value != "") {
    				let valueObj = JSON.parse(adminLanguageFormDefault.value);
    				if (valueObj.options != null) {
    					defaultOptions = valueObj.options;
    				} else if (valueObj.referPref != null) {
    					let pref = appPrefs.prefTexts[valueObj.referPref.prefName][valueObj.referPref.prefItem];
    					if (pref != null && pref.value != null && pref.value != "") {
    						let value = JSON.parse(pref.value);
    						if (value.options != null) {
    							defaultOptions = value.options;
    						}
    					}
    				}
    			}
    			break;
    		case "ADMIN_LANGUAGE_FORM_DIRECTION":
    			adminLanguageFormDirection = formItems[i];
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
					<Switch item={item} field={adminLanguageFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={activeOptions}/>
				</div>
				<div className="col-md-4">
					<Switch item={item} field={adminLanguageFormDefault} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={defaultOptions}/>
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={() => onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => onCancel()}>Cancel</button>
    	</div>
    );
}


LanguageModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
