import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../coreView/common/modal';
import Input from '../../coreView/common/text-input';
import MultiLangTextInput from '../../coreView/common/multi-lang-text-input';
import Select from '../../coreView/common/select-input';
import CheckBox from '../../coreView/common/checkBox';
import Switch from '../../coreView/common/switch';

export default function RolesModifyView({containerState, item, inputFields, appPrefs, itemAppForms, onSave, onCancel, inputChange}) {
    
    let adminRoleFormTitle = {};

    let adminRoleFormCode = {};
    let codeDefault = "";
    let adminRoleFormActive = {};
    let activeDefault = true;
    let activeOptions = [];

    
    if (itemAppForms != null && itemAppForms.ADMIN_ROLE_FORM != null) {
    	for (let i = 0; i < itemAppForms.ADMIN_ROLE_FORM.length; i++) {
    		switch (itemAppForms.ADMIN_ROLE_FORM[i].name) {
    		case "ADMIN_ROLE_FORM_TITLE":
    			adminRoleFormTitle = itemAppForms.ADMIN_ROLE_FORM[i];
    			break;
    		case "ADMIN_ROLE_FORM_CODE":
    			adminRoleFormCode = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormCode.classModel != "") {
    				let codeModel = JSON.parse(adminRoleFormCode.classModel);
    				if (item != null && item[codeModel.field] != null) {
    					codeDefault = item[codeModel.field];
    				}
    			}
    			break;
    		case "ADMIN_ROLE_FORM_ACTIVE":
    			adminRoleFormActive = itemAppForms.ADMIN_ROLE_FORM[i];
    			if (adminRoleFormActive.classModel != "") {
    				let activeModel = JSON.parse(adminRoleFormActive.classModel);
    				if (item != null && item[activeModel.field] != null) {
    					activeDefault = item[activeModel.field];
    				}
    				activeOptions = JSON.parse(adminRoleFormActive.value);
    			}
    			break;
    		}
    	}
    }
    return (
    	<div className="col-lg-12">
    		
			<h4 className="modal-title">Role</h4>

			<div className="row">
				<div className="col-sm-4">
					<MultiLangTextInput formField={adminRoleFormTitle} item={item} inputFields={inputFields} errors={containerState.errors} onChange={inputChange} appPrefs={appPrefs}/>		
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<Input name={adminRoleFormCode.name} inputType={adminRoleFormCode.htmlType} label={adminRoleFormCode.label} rendered={adminRoleFormCode.rendered} required={adminRoleFormCode.required} errors={containerState.errors} onChange={inputChange(adminRoleFormCode.name)} value={(inputFields != null && inputFields[adminRoleFormCode.name] != null)?inputFields[adminRoleFormCode.name]:codeDefault}/>
				</div>
			</div>
			<div className="row">
				{adminRoleFormActive.rendered && 
					<div className="col-md-4">
						<Switch name={adminRoleFormActive.name} label={adminRoleFormActive.label} required={adminRoleFormActive.required} fieldName={adminRoleFormActive.name} options={activeOptions.options} value={(inputFields != null && inputFields[adminRoleFormActive.name] != null)?inputFields[adminRoleFormActive.name]:activeDefault}  onClick={inputChange} />
					</div>
				}
			</div>
			
			<button type="button" className="btn ai-btn-primary" onClick={onSave()}>Save</button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel()}>Cancel</button>
    	</div>
    );
}


RolesModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemAppForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
