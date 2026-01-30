import React, { useEffect } from 'react'

const ConUseEffect = (WrappedComponet) => {

const ComponenteConEffec =(props)=>{
    useEffect(()=>{
        console.log(`${WrappedComponet.name} chupame la pinga`);

    },[])
    return <WrappedComponet {...props}/>;
} 
return ComponenteConEffec  
};

export default ConUseEffect
