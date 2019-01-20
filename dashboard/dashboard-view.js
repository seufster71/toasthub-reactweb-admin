import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Charts from 'react-chartjs-2';
import StatTile from '../../coreView/common/stat-tile';

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

    let option1 = {
      scales: {
				xAxes: [{
          display: false,
          gridLines: {
                display:false,
            },
				}],
				yAxes: [{
          display: false,
          gridLines: {
                display:false,
            },
				}]
			},
      legend: {
            display: false
         }
    }

    let option2 = {
      scales: {
				xAxes: [{
				}],
				yAxes: [{
				}]
			},
    }
    let v1 = "2";
    let v2 = "15,000";
    return (
      <div>
        <div className="Row" style={{padding:'20px'}}>
            <StatTile
              value={v1}
              desc="Members Online"
              data={data1}
              option={option1}
              />
              <StatTile
                value={v2}
                background="#ffe066"
                desc="Site Views"
                data={data1}
                option={option1}
                />
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="sm-res-mg-t-30 tb-res-mg-t-30" style={{display: 'flex', padding: '20px', background:'#5a5b5b', color:'#fff'}}>
                <div>
                  <h2>+12,000</h2>
                  <p> Development Hours </p>
                </div>
                <div className="status-tile" style={{marginLeft: 'auto', marginTop: '10px', width:'50%'}}>
                  <Charts
                    type= 'bar'
                    data= {data1}
                    options={option1}
                   />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="sm-res-mg-t-30 tb-res-mg-t-30" style={{display: 'flex', padding: '20px', background:'#ff9933', color:'#fff'}}>
                <div>
                  <h2>1</h2>
                  <p> New Subscriber </p>
                </div>
                <div className="status-tile" style={{marginLeft: 'auto', marginTop: '10px', width:'50%'}}>
                  <Charts
                    type= 'bar'
                    data= {data1}
                    options={option1}
                   />
                </div>
              </div>
            </div>
        </div>
        <div className="Row" style={{display:'flex', padding:'20px'}}>
          <div style={{width:'70%'}} >
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12" style={{display: 'block', width:'100%',}}>
            <div>
              <h2> Website Analytics </h2>
            </div>
            <div className="Chart1_Bar" style={{padding:'20px'}}>
              <Charts
                type= 'bar'
                data= {data2}
                options={option2}
               />
            </div>
          </div>
          </div>
          <div style={{margin:'20px', padding:'10px', width:'30%', background:'#f8f8f8'}}>
            <h2 style={{margin:'0px'}}> Task Progress </h2>
            <div className="Task" style={{background:'#FFF', margin:'20px', padding:'10px'}}>
              <div style={{display:'flex'}}>
                <p style={{fontWeight:'bold'}}> Dashboard </p>
                <p style={{paddingLeft:'10%'}}> 20% </p>
              </div>
              <progress max='100' value='20' style={{width:'100%'}}></progress>
            </div>
            <div className="Task" style={{background:'#FFF', margin:'20px', padding:'10px'}}>
              <div style={{display:'flex'}}>
                <p style={{fontWeight:'bold'}}> Admin List View </p>
                <p style={{paddingLeft:'10%'}}> 80% </p>
              </div>
              <progress max='100' value='80' style={{width:'100%'}}></progress>
            </div>
            <div className="Task" style={{background:'#FFF', margin:'20px', padding:'10px'}}>
              <div style={{display:'flex'}}>
                <p style={{fontWeight:'bold'}}> Login Authentication </p>
                <p style={{paddingLeft:'10%'}}> 100% </p>
              </div>
              <progress max='100' value='100' style={{width:'100%'}}></progress>
            </div>
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
