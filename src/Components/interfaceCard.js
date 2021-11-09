import React, { useEffect, useRef } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { InitialChartBuild, UpdateChart } from './chartConfigs';
const $ = require('jquery');
$.DataTable = require('datatables.net');


export  function InterfaceCard(props){
  const interfacesChart = useRef(null)
  const interfacesRef = React.createRef()


  useEffect(() => {
    if(interfacesChart.current !== null){
      try{
        let updatedChart = UpdateChart(interfacesChart.current, parseInt(props.value['statistics']['tx-kbps']),parseInt(props.value['statistics']['rx-kbps']));
        updatedChart.update()
        interfacesChart.current = updatedChart
      }
      catch{}
    }
    
  }, [props.value, interfacesRef])
  

  useEffect(() => {
    try{
      let chart = InitialChartBuild(interfacesRef.current.getContext('2d'), parseInt(props.value['statistics']['tx-kbps']), parseInt(props.value['statistics']['rx-kbps']));
      interfacesChart.current = chart
    }
    catch{}
  }, [props.value, interfacesRef])


return      <div id={props.value.name}>
            <Row>
              <canvas ref={interfacesRef} height="300px"/>
            </Row>
            <br/>
              <Row style={{textAlign: 'left'}}>
                  <Col xl={3}>
                    <p >Speed:</p>
                    <p >Status:</p>
                    <p >IP:</p>
                    <p >MTU:</p>
                    <p >Mbps Out:</p>
                    <p >Mbps In:</p>
                    <p >Mbps Out Diff:</p>
                    <p >Mbps In Diff:</p>
                  </Col>
                  <Col xl={4}>
                    <p >{Math.round(parseInt(props.value.speed) / 1000000000) * 1000 } (Mbps)</p>
                    <p >{props.value['oper-status']}</p>
                    {props.value.ipv4 ? <p >{props.value.ipv4}</p> : <p >n/a</p>}
                    <p >{props.value.mtu}</p>
                    <p >{props.value['statistics']['tx-kbps']}</p>
                    <p >{props.value['statistics']['rx-kbps']}</p>
                    <p >{props.value.outbandwidthDiff}</p>
                    <p >{props.value.inbandwidthDiff}</p>
                  </Col>
                  <Col xl={2}>
                    <p >PPs Out:</p>
                    <p >PPs In:</p>
                    <p >InDis:</p>
                    <p >OutDis:</p>
                    <p >InErr:</p>
                    <p >InDis:</p>
                    <p >CRC:</p>
                    <p >InDis:</p>
                  </Col>
                  <Col xl={2}>
                    <p >{props.value['statistics']['rx-pps']}</p>
                    <p >{props.value['statistics']['tx-pps']}</p>
                    <p >{props.value['statistics']['in-discards']}</p>
                    <p >{props.value['statistics']['out-discards']}</p>
                    <p >{props.value['statistics']['in-errors']}</p>
                    <p >{props.value['statistics']['out-errors']}</p>
                    <p >{props.value['statistics']['in-crc-errors']}</p>
                    <p >{props.value['statistics']['num-flaps']}</p>
                    
                  </Col>
                </Row>
                <Row style={{textAlign: 'left'}}> 
                  <Col xl={3} className="mt-3">
                  <p >Description:</p>
                    <p >LastChange:</p>
                  </Col>
                  <Col xl={9} className="mt-3">
                    {props.value.description ? <p >{props.value.description}</p>: <p  >n/a</p>}
                    <p >{props.value['statistics']['discontinuity-time'].split('.')[0]}</p>
                  </Col>
                
                </Row>
                </div>

  }
  