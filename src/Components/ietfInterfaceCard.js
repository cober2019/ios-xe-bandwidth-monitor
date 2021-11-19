import React, { useEffect, useRef } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { InitialChartBuild, UpdateChart } from './chartConfigs';
const $ = require('jquery');
$.DataTable = require('datatables.net');


export  function IetfInterfaceCard(props){
  const interfacesChart = useRef(null)
  const interfacesRef = React.createRef()


  useEffect(() => {
    if(interfacesChart.current !== null){
      try{
        let updatedChart = UpdateChart(interfacesChart.current, parseInt(props.value['mbps_out']), parseInt(props.value['mbps_in']));
        updatedChart.update()
        interfacesChart.current = updatedChart
      }
      catch{}
    }
    
  }, [props.value, interfacesRef])
  

  useEffect(() => {
    try{
      let chart = InitialChartBuild(interfacesRef.current.getContext('2d'), parseInt(props.value['mbps_out']), parseInt(props.value['mbps_in']));
      interfacesChart.current = chart
    }
    catch{}
  }, [props.value, interfacesRef])

  console.log(props.value)

return      <div id={props.key}>
            <Row>
              <canvas ref={interfacesRef} height="300px"/>
            </Row>
            <br/>
              <Row >
                  <Col xl={3} style={{textAlign: "left"}}>
                    <p className="card-text">Descr:</p>
                    <p className="card-text">IP Address:</p>
                    <p className="card-text">Speed:</p>
                    <p className="card-text">Status:</p>
                    <p className="card-text">Mbps Out:</p>
                    <p className="card-text">Mbps In:</p>
                    <p className="card-text">LastChange:</p>
                  </Col>
                  <Col xl={9} style={{textAlign: "left"}}>
                    <p className="card-text">{props.value['description']}</p>
                    <p className="card-text">{props.value['ip_address']}</p>
                    <p className="card-text">{Math.round(parseInt(props.value.speed) / 1000000000) * 1000 } (Mbps)</p>
                    <p className="card-text">{props.value['oper-status']}</p>
                    <p className="card-text">{Math.round(parseInt(props.value['mbps_out']))}</p>
                    <p className="card-text">{Math.round(parseInt(props.value['mbps_in']))}</p>
                    <p className="card-text">{props.value['statistics']['discontinuity-time'].split('.')[0]}</p>
                  </Col>
                
                </Row>
                </div>

  }
  
  
