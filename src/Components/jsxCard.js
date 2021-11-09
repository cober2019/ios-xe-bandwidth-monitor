import { ErrorBoundary } from  'react-error-boundary'
import Card from "react-bootstrap/Card";
import { IsErrorFallback } from "./errorComponent";

export function CreateCard(component, title, extra){

    const card =  <Card bg="dark" className="mb-3 border-0 overflow-auto">
                    <Card.Body>
                        <Card.Title className="mb-3">{title}</Card.Title>
                        {extra}
                        <ErrorBoundary  FallbackComponent={IsErrorFallback}>
                            {component}
                        </ErrorBoundary>
                    </Card.Body>
                </Card>

    return card
    
}
