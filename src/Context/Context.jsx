import React, { createContext, useState } from 'react'
import { run } from '../Config/gemini';


export const context = createContext();

const Context = (props) => {

    const [Input , setInput] = useState('');
    const [resultData , setResultData] = useState('');
    const [loading , setLoading] = useState(false);
    const [showResult , setShowResult] = useState(false)
    const [resultSearch , setResultSearch] = useState('')
    const [recentSearch , setRececntSearch] = useState([])



    const delayText = (index , newText) => {
        setTimeout(function() {
            setResultData(prev => prev + newText);
        }, 75*index)
    }
    const newChat = () => {
        setLoading(false)
        setShowResult(false)

    }



    const onSent = async () => {
        setLoading(true)
        setResultData('')
        setShowResult(true)
        setResultSearch(Input)
        setRececntSearch(prev => [...prev , Input])
        const res =  await run(Input);
        let resArray = res.split('**');
        let newRes = '';
        for(let i = 0 ; i < resArray.length ; i++ ) {
            if( i === 0 ,  i%2 !== 1) {
                newRes += resArray[i];
            } else {
                newRes += "<b>" + resArray[i] + "</b>"
            }
        }
        let newRes2 = newRes.split('*').join("<br/>")
        let resultRes = newRes2.split(" ");
        for(let i = 0; i < resultRes.length; i++) {
            const nextText = resultRes[i];
            delayText(i,nextText + " ")
        }
        setLoading(false)
        setInput('')
    }
  

    const value = {
        Input,
        setInput,
        onSent,
        resultData,
        showResult,
        resultSearch,
        loading,
        setRececntSearch,
        recentSearch,
        newChat
    }


    return (
        <context.Provider value={value} >
            {props.children}
        </context.Provider>

    )
}

export default Context
