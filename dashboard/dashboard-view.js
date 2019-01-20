import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Charts from 'react-chartjs-2';
import StatTile from '../../coreView/common/stat-tile';
import Graph from '../../coreView/common/graphs';
import ProgressBar from '../../coreView/common/progress-bar';

export default function DashboardView({currentState, fields, texts, labels, onChangeLogin,
  onChangeRegistration, fieldChangeEvent, onForgotPassword,
  fieldBlurEvent, buttonClick, handleChange, changeView }) {

    let data1 = {
      datasets: [{
         backgroundColor: "#FFF",
         data: [Math.random() * 100],
      },{
         backgroundColor: "#FFF",
         data: [Math.random() * 100],
      },{
         backgroundColor: "#FFF",
         data: [Math.random() * 100],
      },{
         backgroundColor: "#FFF",
         data: [Math.random() * 100],
      }]
    }

    let data2 = {
      datasets: [{
         label: "Admin Changes",
         backgroundColor: "#e8e8e8",
         data: [Math.random() * 25],
      },{
         label: "Users Online",
         backgroundColor: "#ffe066",
         data: [Math.random() * 25],
      },{
         label: "New Subscribers",
         backgroundColor: "#00c292",
         data: [Math.random() * 25],
      },{
         label: "Bugs Reported",
         backgroundColor: "#5a5b5b",
         data: [Math.random() * 25],
      }]
    }

    let v1 = "2";
    let v2 = "15,000";
    let v3 = "+12,000";
    let v4 = "1";

    return (
      <div>
        <div className="Row" style={{padding:'20px'}}>
            <StatTile
              value={v1}
              desc="Members Online"
              data={data1}
              />
              <StatTile
                value={v2}
                background="#ffe066"
                desc="Site Views"
                data={data1}
                />
              <StatTile
                value={v3}
                background="#5a5b5b"
                desc="Development Hours"
                data={data1}
                />
              <StatTile
                value={v4}
                background="#ff9933"
                desc="New Subscriber"
                data={data1}
                />
        </div>
        <div className="Row" style={{display:'flex', padding:'20px'}}>
          <div style={{width:'70%'}} >
          <Graph
            header ="Website Analytics"
            data = {data2}
            />
          </div>
          <div style={{margin:'20px', padding:'10px', width:'30%', background:'#f8f8f8'}}>
            <h2 style={{margin:'0px'}}> Task Progress </h2>
            <ProgressBar
              value = "20"
              desc = "Dashboard"
            />
            <ProgressBar
              value = "80"
              desc = "Admin List View"
            />
            <ProgressBar
              value = "100"
              desc = "Login"
            />
          </div>
        </div>
      </div>
    );
}


DashboardView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object,
  texts: PropTypes.object,
  labels: PropTypes.object,
  onChangeLogin: PropTypes.func,
  onChangeRegistration: PropTypes.func,
  onForgotPassword: PropTypes.func,
  fieldChangeEvent: PropTypes.func,
  fieldBlurEvent: PropTypes.func,
  buttonClick: PropTypes.func,
  handleChange: PropTypes.func,
  changeView: PropTypes.func
};
