import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ActivityIndicator,FlatList } from 'react-native';
import React, {useState,useEffect} from 'react'

export default function App() {
 const [isLoading,setLoading] = useState(true);
 const [data,setData] = useState([]);
  

 const api = async() => {
  const url = "http://127.0.0.1:5090/api";
  const response = await fetch(url,{
    method: "GET",
    
  })
  const serverData = await response.json();
  setData(serverData)
  setLoading(false)
 }

 useEffect(() => {
    api()
},[])


  return (
    <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator /> : 
      <FlatList
       data = {data}
       keyExtractor = {item => item.Message}
       renderItem = {(character) => 
         <Text style={{textAlign: 'center',backgroundColor:'blue'}}>
           result:<Text></Text>{character.item} 
           </Text> // הנתיב תמיד יהיה קודם מה שבתוך הרנדר-אייטם ואז נקודה ואז מה שהכנו בקי-אקסטרקטור ואז לפי הגייסון של האייפיי - איי
       }
      />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
