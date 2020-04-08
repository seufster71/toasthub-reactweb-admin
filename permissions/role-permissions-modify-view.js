import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import InputBuilder from '../../coreView/common/text-input-builder';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import SelectBuilder from '../../coreView/common/select-input-builder';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';
import Date from '../../coreView/common/date-input';
import moment from 'moment';

export default function RolePermissionsModifyView({containerState, item, inputFields, appPrefs, itemPrefForms, onSave, onCancel, inputChange, applicationSelectList}) {
    
    let adminRolePermissionFormRights = {};
    
    let adminRolePermissionFormStartDate = {};
    let startDateDefault = "";
    
    let adminRolePermissionFormEndDate = {};
    let endDateDefault = "";
    
    let adminRolePermissionFormActive = {};

    
    if (itemPrefForms != null && itemPrefForms.ADMIN_ROLE_PERMISSION_PAGE != null) {
    	for (let i = 0; i < itemPrefForms.ADMIN_ROLE_PERMISSION_PAGE.length; i++) {
    		let formItems = itemPrefForms.ADMIN_ROLE_PERMISSION_PAGE;
    		switch (formItems[i].name) {
    		case "ADMIN_ROLE_PERMISSION_FORM_RIGHTS":
    			adminRolePermissionFormRights = formItems[i];
    			break;
    		case "ADMIN_ROLE_PERMISSION_FORM_STARTDATE":
    			adminRolePermissionFormStartDate = formItems[i];
    			if (adminRolePermissionFormStartDate.classModel != "") {
    				let startDateModel = JSON.parse(adminRolePermissionFormStartDate.classModel);
    				if (item != null && item[startDateModel.field] != null) {
    					startDateDefault = item[startDateModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_PERMISSION_FORM_ENDDATE":
    			adminRolePermissionFormEndDate = formItems[i];
    			if (adminRolePermissionFormEndDate.classModel != "") {
    				let endDateModel = JSON.parse(adminRolePermissionFormEndDate.classModel);
    				if (item != null && item[endDateModel.field] != null) {
    					endDateDefault = item[endDateModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_PERMISSION_FORM_ACTIVE":
    			adminRolePermissionFormActive = formItems[i];
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
			<h4 className="modal-title">Role to Permission</h4>
			{created}
			{modified}
			<div className="row">
				<div className="col-sm-4">
					<SelectBuilder item={item} field={adminRolePermissionFormRights} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<Date item={item} field={adminRolePermissionFormStartDate} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<Date item={item} field={adminRolePermissionFormEndDate} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<Switch item={item} field={adminRolePermissionFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} />
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


RolePermissionsModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
