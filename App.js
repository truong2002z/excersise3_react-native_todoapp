import { View } from "react-native"
import { Text } from "react-native-paper"
import firestore from "@react-native-firebase/firestore"
import { MyContextControllerProvider } from "./store"
import Register from "./screens/Register"
import Login from "./screens/Login"
const App =() =>{
    firestore()
    return (
        <MyContextControllerProvider>
           <Login/>
          
        </MyContextControllerProvider>
    )
}
export default App;