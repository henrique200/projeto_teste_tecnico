import React, { createContext, useState } from "react";

export const AnnotationContext = createContext({});

interface AnnotationData {
    id: string,
    name: string, 
}


function AnnotationProviders({children}: any){
    const [annotations, setAnnotations] = useState<AnnotationData[]>([]);
    const [myData, setMyData] = useState({});


    function handleAddNewAnnotation(annotation: any){
        if(annotation !== ''){
            const data = {
                id: String(new Date().getTime()),
                name: annotation,
            }
            setAnnotations(oldState => [...oldState, data])

            setMyData({...data})
        }
    }

    

    return(
        <AnnotationContext.Provider value={{handleAddNewAnnotation, myData, annotations}}>
            {children}
        </AnnotationContext.Provider>
    );
}

export default AnnotationProviders;