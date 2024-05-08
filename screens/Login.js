import { Alert, View , Button} from "react-native"
import { Text, TextInput } from "react-native-paper"
import { useMyContext } from "../store"
import { Image } from "react-native"
import { useState } from "react"
import auth from "@react-native-firebase/auth"
import firestore from"@react-native-firebase/firestore"
const Login =()=>{
  
    const USERS = firestore().collection("USERS")
    const [email,setEmail] = useState("")
    const [fullname,setFullName] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirm,setPasswordConfirm] = useState("")
    const hasErrorFullName =()=>fullname==""
    const createAccount =()=>{
        auth().createUserWithEmailAndPassword(email,password)
        .then(
            ()=>
                {
                USERS.doc(email).set({fullname,email,})
                Alert.alert("Tao tai khoan thanh cong")
                    }
                
                )
                .catch(e=>Alert.alert(e.message))
        
    }
    return (
        <View style={{flex:1}} >
            <Image source={require("../assets/logo.jpg")}
            style={{alignSelf:"center",
                marginTop:75,
                marginBottom:30
            
            }}

            />
         <TextInput
            label={"Full name"}
            value={fullname}
            onChangeText={setFullName}
            
         />
        
         <TextInput
            label={"Password"}
            value={password}
         placeholder="nhap email"
            onChangeText={setPassword}
         />
         
        <Button
        title="Submit"
    
        disabled={!email} // Disable button nếu email rỗng
      />
        </View>
    )
}
export default Login