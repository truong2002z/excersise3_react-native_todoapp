import { act, createContext, useContext, useMemo, useReducer } from "react";

const MyContext = createContext()
const reducer = (state,action)=>{
    switch (action.type){
    case "LOGIN":
        return {...state,userLogin:action.value};
        case "LOGOUT":
            return {...state,userLogin:null}
            default : break;
    }
}
const MyContextControllerProvider =({children})=>{
    const initialState = {
        userLogin:null,
    }
    const [controller, dispatch] = useReducer(reducer,initialState)
    const valye = useMemo(()=>[controller,dispatch],[controller,dispatch])
    return (
        <MyContext.Provider value={null}>
          {children}
        </MyContext.Provider>
    )
}
const useMyContext =()=>{
    const context = useContext(MyContext)
    if(context==null)
        return new Error("useMyContext phai nam trong MyContextControllerProvider")
}
export{
    MyContextControllerProvider,
    useMyContext,

}