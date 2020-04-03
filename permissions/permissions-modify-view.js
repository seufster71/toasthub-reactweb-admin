import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import TextBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';
import moment from 'moment';

export default function PermissionsModifyView({containerState, item, inputFields, appPrefs, itemPrefForms, onSave, onCancel, inputChange, applicationSelectList}) {
    
    let adminPermissionFormTitle = {};

    let adminPermissionFormCode = {};

    let adminPermissionFormApplication = {};
    
    let adminPermissionFormRights = {};
    
    let adminPermissionFormStartDate = {};
    let startDateDefault = "";
    
    let adminPermissionFormEndDate = {};
    let endDateDefault = "";
    
    let adminPermissionFormActive = {};

    
    if (itemPrefForms != null && itemPrefForms.ADMIN_PERMISSION_FORM != null) {
    	for (let i = 0; i < itemPrefForms.ADMIN_PERMISSION_FORM.length; i++) {
    		switch (itemPrefForms.ADMIN_PERMISSION_FORM[i].name) {
    		case "ADMIN_PERMISSION_FORM_TITLE":
    			adminPermissionFormTitle = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			break;
    		case "ADMIN_PERMISSION_FORM_CODE":
    			adminPermissionFormCode = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			break;
    		case "ADMIN_PERMISSION_FORM_APPLICATION":
    			adminPermissionFormApplication = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			break;
    		case "ADMIN_PERMISSION_FORM_RIGHTS":
    			adminPermissionFormRights = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			break;
    		case "ADMIN_PERMISSION_FORM_STARTDATE":
    			adminPermissionFormStartDate = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormStartDate.classModel != "") {
    				let startDateModel = JSON.parse(adminPermissionFormStartDate.classModel);
    				if (item != null && item[startDateModel.field] != null) {
    					startDateDefault = item[startDateModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_ENDDATE":
    			adminPermissionFormEndDate = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			if (adminPermissionFormEndDate.classModel != "") {
    				let endDateModel = JSON.parse(adminPermissionFormEndDate.classModel);
    				if (item != null && item[endDateModel.field] != null) {
    					endDateDefault = item[endDateModel.field];
    				}
    			}
    			break;
    		case "ADMIN_PERMISSION_FORM_ACTIVE":
    			adminPermissionFormActive = itemPrefForms.ADMIN_PERMISSION_FORM[i];
    			break;
    		}
    	}
    }
    
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
			<h4 className="modal-title">Permission</h4>
			{created}
			{modified}
			<div className="row">
				<div className="col-sm-4">
					<MultiLangTextInput item={item} field={adminPermissionFormTitle} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} appPrefs={appPrefs}/>		
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<TextBuilder item={item} field={adminPermissionFormCode} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<SelectBuilder item={item} field={adminPermissionFormApplication} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} options={applicationSelectList}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<SelectBuilder item={item} field={adminPermissionFormRights} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<Switch item={item} field={adminPermissionFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} />
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


PermissionsModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
