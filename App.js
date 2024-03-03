// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, ImageBackground } from 'react-native';
// import Colors from './Colors';
// import { AntDesign } from '@expo/vector-icons';
// import tempData from './TemPData';
// import TodoList from './components/TodoList';
// import React, { useState,useEffect } from 'react';
// import AddListModal from './components/AddListModal';



// export default function App() {

//   const [addTodoVisible, setAddTodoVisible] = useState(false);
//   const [lists, setLists] = useState(tempData);
 


//   const renderList = (list) => {
//     // console.log(list);
//     return <TodoList list={list} deleteMe={deleteMe} updateList={updateList} />
//   }

 

//   const deleteMe=(list)=>{
   
//     console.log(list)
//     setLists(lists.filter((item)=>item.id!==list.id));
//   }

 

//   const toggleAddTodoModal = () => {
//     setAddTodoVisible(!addTodoVisible);
   
//   }


//   const addList = (list) => {

//     console.log(list);
    
//     setLists([...lists, { ...list, id: lists.length + 1, todos: [] }]);



//   }

//   const updateList=(list)=>{
  
//     // console.log(list);
//     setLists(lists.map(item=>{

//       return item.id===list.id?list:item;
//     })
//   );
//   };

//   const DeleteList=(list)=>{
//     setLists([]);
   
//   }


//   return (
//     // <ImageBackground source={require('./Todoimage.jpg')} resizeMode='cover' style={{flex:1}}>
//     <View style={styles.container}>
//       <Modal animationType='slide' visible={addTodoVisible}>

//         <AddListModal addList={(item) => addList(item)} closeModal={() => toggleAddTodoModal()} />

//       </Modal>
    
//       {/* ADDING DIVIDER */}
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.divider} />

//         <Text style={styles.title}>
//           Todo<Text style={{ fontWeight: '400', color: Colors.blue }}>Lists App</Text>
//         </Text>

//         <View style={styles.divider} />
//       </View>

//       <View style={{ marginHorizontal: 23, marginVertical: 40, justifyContent: 'center', flexDirection: 'row' }}>
//         <TouchableOpacity style={styles.addList} onPress={() => toggleAddTodoModal()}>
//           <AntDesign style={{ alignSelf: 'flex-start' }} name="plussquareo" size={65} color="white" />
//           <Text style={styles.add}>Add Lists:)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.addList} onPress={(list) => DeleteList(list)}>
//           <AntDesign style={{ alignSelf: 'flex-end',marginRight:12, }} name="delete" size={65} color="white" />
//           <Text style={styles.delete}>Delete Lists:(</Text>
//         </TouchableOpacity>



//         {/* <TouchableOpacity style={styles.addList} onPress={()=>DeleteLastList(list)}>
//           <AntDesign style={{ alignSelf: 'center' }} name="minussquareo" size={65} color="white" />
//           <Text style={styles.add}>Delete Lists</Text>
//         </TouchableOpacity> */}


//       </View>

//       <View style={{ height: 275, paddingLeft: 32 }}>
//         <FlatList data={lists}
//           keyExtractor={item => item.name}
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) =>
//             renderList(item)
//           }
//           keyboardShouldPersistTaps="always"
//         />


//       </View>
//     </View>
//     // </ImageBackground>

//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//     backgroundColor: '#2D3436',
//     alignItems: 'center',
//     justifyContent: 'center',
   
//   },

//   divider: {
//     backgroundColor: Colors.lightBlue,
//     height: 15,
//     flex: 1,
//     alignSelf: 'center',
//   },
//   title: {
//     fontSize: 38,
//     fontWeight: '800',
//     color: Colors.white,
//     paddingHorizontal: 13,
//     marginBottom:23,
//   },

//   add: {
//     color: Colors.blue,
//     fontWeight: '600',
//     fontSize: 26,
//     marginTop: 8,
//     position:'relative',
//     left:-22,
//     textDecorationLine: 'underline',
   
//   },
//   delete: {
//     color: Colors.blue,
//     fontWeight: '600',
//     fontSize: 26,
//     marginTop: 8,
//     marginRight: 3,
//     marginLeft: 43,
//     textDecorationLine: 'underline',
//     alignSelf: 'flex-end',
//     position:'relative',
//     right:-35,
//   },

// });

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MainScreen from './components/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { mystore } from './reduxfolder/store';

const Stack = createNativeStackNavigator();

const App=()=> {
  return (

    <Provider store={mystore}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}  />
      <Stack.Screen name="To Do App" component={MainScreen} options={{headerShown:true, headerStyle: {
            backgroundColor: '#cd6090',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 900,
          },}}  />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

export default App;