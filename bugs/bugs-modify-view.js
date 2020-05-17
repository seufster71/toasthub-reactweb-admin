import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import TextBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function BugsModifyView({containerState, item, inputFields, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange}) {
    
	let adminBugsFormTitle = {};

    let adminBugsFormCode = {};
    
    let adminBugsFormActive = {};
    let activeDefault = true;
    let activeOptions = [];
    
    let adminBugsFormDefault = {};
    let defaultDefault = true;
    let defaultOptions = [];
    
    let adminBugFormDirection = {};
    
    
    if (itemPrefForms != null && itemPrefForms.ADMIN_BUG_PAGE != null) {
    	for (let i = 0; i < itemPrefForms.ADMIN_BUG_PAGE.length; i++) {
    		switch (itemPrefForms.ADMIN_BUG_PAGE[i].name) {
    		case "ADMIN_BUG_FORM_TITLE":
    			adminBugFormTitle = itemPrefForms.ADMIN_BUG_PAGE[i];
    			break;
    		case "ADMIN_BUG_FORM_CODE":
    			adminBugFormCode = itemPrefForms.ADMIN_BUG_PAGE[i];
    			break;
    		case "ADMIN_BUG_FORM_ACTIVE":
    			adminBugFormActive = itemPrefForms.ADMIN_BUG_PAGE[i];
    			if (adminBugFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminBugFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminBugFormActive.value);
    			}
    			break;
    		case "ADMIN_BUG_FORM_DEFAULT":
    			adminBugFormDefault = itemPrefForms.ADMIN_BUG_PAGE[i];
    			if (adminBugFormDefault.classModel != "") {
    				let defaultModel = JSON.parse(adminBugFormDefault.classModel);
    				if (item != null && item[defaultModel.field] != null) {
    					defaultDefault = item[defaultModel.field];
    				}
    				defaultOptions = JSON.parse(adminBugFormDefault.value);
    			}
    			break;
    		case "ADMIN_BUG_FORM_DIRECTION":
    			adminBugFormDirection = itemPrefForms.ADMIN_BUG_PAGE[i];
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">Bug</h4>

			<div className="row">
				<div className="col-sm-4">
					<MultiLangTextInput field={adminBugFormTitle} item={item} inputFields={inputFields} onChange={inputChange} appPrefs={appPrefs}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminBugFormCode} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<SelectBuilder item={item} field={adminBugFormDirection} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
				<div className="col-md-4">
					<Switch item={item} field={adminBugFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={activeOptions.options}/>
				</div>
				<div className="col-md-4">
					<Switch item={item} field={adminBugFormDefault} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={defaultOptions.options}/>
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


BugsModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
