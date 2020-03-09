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

export default function UserRolesModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange, applicationSelectList}) {
    
    let adminUserRolesFormOrder = {};
    
    let adminUserRolesFormStartDate = {};
    let startDateDefault = "";
    
    let adminUserRolesFormEndDate = {};
    let endDateDefault = "";
    
    let adminUserRolesFormActive = {};

    
    if (itemAppForms != null && itemAppForms.ADMIN_USER_ROLE_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_USER_ROLE_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_USER_ROLE_FORM[i].name) {
    		case "ADMIN_USER_ROLE_FORM_ORDER":
    			adminUserRolesFormOrder = itemAppForms.ADMIN_USER_ROLE_FORM[i];
    			break;
    		case "ADMIN_USER_ROLE_FORM_STARTDATE":
    			adminUserRolesFormStartDate = itemAppForms.ADMIN_USER_ROLE_FORM[i];
    			if (adminUserRolesFormStartDate.classModel != "") {
    				let startDateModel = JSON.parse(adminUserRolesFormStartDate.classModel);
    				if (item != null && item[startDateModel.field] != null) {
    					startDateDefault = item[startDateModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_ROLE_FORM_ENDDATE":
    			adminUserRolesFormEndDate = itemAppForms.ADMIN_USER_ROLE_FORM[i];
    			if (adminUserRolesFormEndDate.classModel != "") {
    				let endDateModel = JSON.parse(adminUserRolesFormEndDate.classModel);
    				if (item != null && item[endDateModel.field] != null) {
    					endDateDefault = item[endDateModel.field];
    				}
    			}
    			break;
    		case "ADMIN_USER_ROLE_FORM_ACTIVE":
    			adminUserRolesFormActive = itemAppForms.ADMIN_USER_ROLE_FORM[i];
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
			<h4 className="modal-title">User to Role</h4>
			{created}
			{modified}
			<div className="row">
				<div className="col-sm-4">
					<InputBuilder item={item} field={adminUserRolesFormOrder} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<Date item={item} field={adminUserRolesFormStartDate} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<Date item={item} field={adminUserRolesFormEndDate} inputFields={inputFields} errors={containerState.errors} onChange={inputChange}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<Switch item={item} field={adminUserRolesFormActive} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} />
				</div>
			</div>
			
			<button type="button" className="btn btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


UserRolesModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};