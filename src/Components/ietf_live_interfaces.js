import React from 'react';
import { useQuery } from 'react-query'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {useRecoilState} from 'recoil';
import { ErrorBoundary } from  'react-error-boundary'
import { AES, enc }from 'crypto-js';
import { IetfInterfaceCard } from './ietfInterfaceCard'
import { Navigation } from './navbar';
import { CreateCard } from './jsxCard';
import { IsErrorFallback } from "./errorComponent";
import { PageLoader } from './pageLoader';
import { BandwidthDiff } from './bandwidthFunctions';
import { ShowInterface } from './interfaceModal';
import { SetInterval } from './pollingInterval';
import {encytpKey, client}  from '../App'

export function IetfLiveInterfaces(){
  const [decrypt] = useRecoilState(encytpKey);
  const [intervalMs, setIntervalMs] = React.useState(20000)
  const [cache] = useRecoilState(client);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectInterface, setSelectInterface] = React.useState(undefined)
  const passwordDecrypt = AES.decrypt(localStorage.getItem('password'), decrypt);
  const { isLoading, error, data, isFetching } = useQuery(localStorage.getItem('ip') + 'interface_stats_ietf', async () => {

    const data = await axios.post('/interface_stats_ietf', {'pollingInterval': localStorage.getItem('pollingInterval')})
    console.log(data)

    return data
        
    },
    {
      refetchInterval: parseInt(localStorage.getItem('pollingInterval')),
    }
  )

  const interfaceFocus = (interfaceDetails) => {
    setSelectInterface(interfaceDetails)
    setModalShow(true)
  }

  const closeInterface = () => {
    setSelectInterface(undefined)
    setModalShow(false)
  }

  if(error){
    return  <div>
              <Navigation/>
              <h4 className="text-center fade-in" style={{marginTop: 100}}>Error Collecting Data. I'll Keep Trying</h4>
              <div className="warning-loader text-center"></div>
            </div>
  }
  else if (data){
        return  <Container fluid>
                    <ErrorBoundary  FallbackComponent={IsErrorFallback}>
                      <Navigation update={data} ip={localStorage.getItem('ip')} fetchingStatus={isFetching} cpu={data.cpu} mem={data.mem}/>
                      </ErrorBoundary>
                      <Row>
                      <Col xl={2}>
                        <Row>
                          
                          { data.data.stats.map((value) => (
                                <button key={value} type="button" style={{marginBottom: "10px"}} className="btn btn-success btn-md" onClick={()=> interfaceFocus(value)}>{value.name}</button>
                                ))}
                        </Row>
                        <Row className="border-bottom mb-3 mt-3" style={{color: 'black'}}/>
                        <SetInterval/>
                      </Col>
                      <Col xl={10}>
                        <Row>
                            { data.data.stats.map((value) => (
                                <Col xl={4} key={value}>
                                {CreateCard(<IetfInterfaceCard key={value.name} isPolling={isFetching} value={value}/>, value.name)}
                                </Col>
                            ))}
                        </Row>
                      </Col>
                      </Row>
                      {modalShow ? <ShowInterface interface={selectInterface.interface} component={<IetfInterfaceCard key={selectInterface.name}  value={selectInterface}/>} show={modalShow} onHide={() => closeInterface()}/>
                        :  
                        <></>}
                </Container>
  }
  else if (isLoading){

    return <>
              {PageLoader(localStorage.getItem('ip'), localStorage.getItem('serial'), localStorage.getItem('model'), localStorage.getItem('uptime'), localStorage.getItem('software'))}
            </>
  }


  }
    