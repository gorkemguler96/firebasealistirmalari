import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useEffect } from 'react';

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCCArq2wfMMHnI94ex0_51GgxVhfgjrV4E",
  authDomain: "patika-1032d.firebaseapp.com",
  projectId: "patika-1032d",
  storageBucket: "patika-1032d.appspot.com",
  messagingSenderId: "55013150446",
  appId: "1:55013150446:web:a214e45d4069703df82dff"
  };

  initializeApp(firebaseConfig);
  const db = getDatabase();

  function storeHighScore(userId, score) {
    const reference = ref(db, 'denemelik/' + userId);
    set(reference, {
      highscore: score,
    });
  }
  const userId ="id2"

  useEffect(()=>{
    const reference = ref(db, 'denemelik/' + userId);
    onValue(reference, (snapshot) => {
      const highscore = snapshot.val().highscore;
      console.log("New high score: " + highscore);
    });
  },[])
 

  return (
    <View style={styles.container}>
      <Button title={"ekleme yap"} onPress={()=>storeHighScore("id2",500)}/>
      <StatusBar style="auto" />
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
