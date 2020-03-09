import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import TextBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';
import moment from 'moment';

export default function PreferenceModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange, applicationSelectList}) {
    
    let preferenceFormTitle = {};

    let preferenceFormCode = {};
    
    let preferenceFormApplication = {};
    let applicationOptions = [];
    if (applicationSelectList != null) {
    	applicationOptions = applicationSelectList;
    }
    
    let preferenceFormActive = {};
    let activeDefault = true;
    let activeOptions = [];

    if (itemAppForms != null && itemAppForms.ADMIN_PREFERENCE_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_ROLE_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_PREFERENCE_FORM[i].name) {
    		case "ADMIN_PREFERENCE_FORM_TITLE":
    			preferenceFormTitle = itemAppForms.ADMIN_PREFERENCE_FORM[i];
    			break;
    		case "ADMIN_PREFERENCE_FORM_CODE":
    			preferenceFormCode = itemAppForms.ADMIN_PREFERENCE_FORM[i];
    			break;
    		case "ADMIN_PREFERENCE_FORM_APPLICATION":
    			preferenceFormApplication = itemAppForms.ADMIN_PREFERENCE_FORM[i];
    			break;
    		case "ADMIN_PREFERENCE_FORM_ACTIVE":
    			preferenceFormActive = itemAppForms.ADMIN_PREFERENCE_FORM[i];
    			if (preferenceFormActive.classModel != "") {
    				let activeModel = JSON.parse(preferenceFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(preferenceFormActive.value);
    			}
    			break;
    		}
    	}
    }
    
    let applicationDefault = 0;
    
    let created = "";
    if (item != null && item.created != null) {
    	created = new Intl.DateTimeFormat('en-US',{
    		year: 'numeric', month: 'numeric', day: 'numeric',
    		hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'America/New_York'
    	}).format(moment(item.created).toDate());
    	created = <div>Created: {created}</div>;
    }
    
    let modified = "";
    if (item != null && item.modified != null) {
    	modified = new Intl.DateTimeFormat('en-US',{
    		year: 'numeric', month: 'numeric', day: 'numeric',
    		hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'America/New_York'
    	}).format(moment(item.modified).toDate());
    	modified = <div>Last Modified: {modified}</div>
    }
    
    return (
    	<div className="col-lg-12">
			<h4 className="modal-title">Role</h4>
			{created}
			{modified}
			<div className="row">
				<div className="col-sm-4">
					<MultiLangTextInput field={preferenceFormTitle} item={item} inputFields={inputFields} containerState={containerState} onChange={inputChange} appPrefs={appPrefs}/>		
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<TextBuilder item={item} field={preferenceFormCode} inputFields={inputFields} containerState={containerState} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<SelectBuilder item={item} field={preferenceFormApplication}  inputFields={inputFields} containerState={containerState} onChange={inputChange} options={applicationOptions}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<Switch item={item} field={preferenceFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


PreferenceModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  applicationSelectList: PropTypes.object
};
