import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Charts from 'react-chartjs-2';

export default function DashboardView({currentState, fields, texts, labels, onChangeLogin,
  onChangeRegistration, fieldChangeEvent, onForgotPassword,
  fieldBlurEvent, buttonClick, handleChange, changeView }) {

    let x = {
      datasets: [{
        data: [0, 10, 5, 2, 20, 30, 45]
      }]}

    let options = {
      scales: {
        xAxes: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
}


    return (
      <div style={{background:'#e8e8e8'}}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"  >
            <div className="sm-res-mg-t-30 tb-res-mg-t-30" style={{display: 'flex', padding: '20px', background:'#00c292', color:'#fff'}}>
              <div>
                <h4> Status Number</h4>
                <p> Status Label </p>
              </div>
              <div className="status-tile" style={{marginLeft: 'auto', marginTop: '10px'}}>
              <Charts
                type= 'bar'
                data= {x}
                options={options}
               />
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
