import React, { useEffect, useState } from 'react'
import * as FlexLayout from 'flexlayout-react';
import { useSelector } from 'react-redux';
import { getModel } from '../Redux/flexLayoutSlice';
import 'flexlayout-react/style/light.css'


const FlexLayoutReact = () => {

    const modelJson = useSelector(getModel);
    console.log("model JSON" , modelJson)

    const [layoutJson ,  setLayoutJson] = useState(modelJson);

    
    useEffect(() => {
        
        setLayoutJson(modelJson)

    }, [modelJson]);

    const model = FlexLayout.Model.fromJson(layoutJson);

    const factory = (node) => {
        const comp = node.getComponent();
        if(comp === 'chart'){
            return <h2>chart</h2>
        }
    }

    return (
        <div style={{position:'relative' , height:'100vh'}}>
            <FlexLayout.Layout model={model} factory={factory} />
        </div>
    )
}

export default FlexLayoutReact
