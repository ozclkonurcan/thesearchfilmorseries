import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {LogoutIcon} from 'react-native-heroicons/solid'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
const LogoutButton = () => {

    const handleLogout = async ()=>{
        await signOut(auth);
    }

  return (
 <>
    <TouchableOpacity className="bg-red-500 rounded-lg p-4 mt-4" onPress={handleLogout}>
      {/* <LogoutIcon name="logout" size={24} color="white" className="mr-2" /> */}
      <Text className="text-white font-bold text-lg">Logout</Text>
    </TouchableOpacity>
 </>
  )
}

export default LogoutButton