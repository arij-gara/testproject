
import { StatusBar } from 'expo-status-bar'
import { Text, View , TextInput ,Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function SearchScreen () {
   const navigation = useNavigation();
    return (
      <View  style= {{ backgroundColor : '#1F2128' }}className=" flex-1 ">
        <StatusBar style="light"  />
        {/* advanced  search title */}
       <View style={{ backgroundColor : '#16181F'}} className=" mt-14 flex-row  justify-around items-center h-[60]">
       <Text className= "   text-white pl-24 ">Advanced Search</Text>
       <Text className=" text-sm text-blue-600 mr-[-20]">Reset</Text>
       </View>
       {/* search filter section */}
       <View className=" flex flex-row items-center ml-2 mr-2 ">
       <View className=" bg-white/10 p-4 rounded-xl  mt-5 mr-1 w-[280] h-[50] flex-row justify-between">
             <TextInput placeholder="Search a document... "  placeholderTextColor={'gray'}/>
             <Image source={ require("../assets/images/search.png") } />
       </View>
       <View>
         <TouchableOpacity
          onPress={()=> navigation.navigate("FilterScreen")}
         >
          <View className=" bg-white/10 rounded-xl  w-[50] h-[50] mt-5 items-center justify-center">
          <Image  source={require("../assets/images/filter.png")}/>
          </View>
          </TouchableOpacity>
          </View>
       </View>
       {/* list items */}
        <View className="pl-3 pr-3 mt-5 space-y-1.5 "> 
           {/* first element */}
            <View   style={{ backgroundColor : '#16181F'}} className="  rounded-xl h-[57] flex-row items-center justify-between pr-3 ">

             <View className=" flex-row items-center justify-center">
             <View className="">
             <View className=" m-2.5  bg-white/10 h-[40] w-[40] rounded-lg items-center justify-center ">

                <Image  source={require("../assets/images/money.png")}/>
                
             </View>
             <Image className="absolute right-0 " source={require("../assets/images/Ellipse.png")}/>
             </View>
             <View>
                <Text className="text-white">New budget 2023</Text>
                <Text className="text-white/40"> Budget</Text>
             </View>
             </View>
             
             <Image  source={require("../assets/images/Path.png")}/>
            </View>

            {/* Second element */}
            <View   style={{ backgroundColor : '#16181F'}} className="  rounded-xl h-[57] flex-row items-center justify-between pr-3 ">

             <View className=" flex-row items-center justify-center">
             <View>
             <View className=" m-2.5  bg-white/10 h-[40] w-[40] rounded-lg items-center justify-center ">
                <Image source={require("../assets/images/logo.png")}/>
             </View>
             <Image className="absolute right-0 " source={require("../assets/images/Ellipse.png")}/>
             </View>
             <View>
                <Text className="text-white">Plans for Shams SMC Mall</Text>
                <Text className="text-white/40"> Plan</Text>
             </View>
             </View>
             
             <Image  source={require("../assets/images/Path.png")}/>
            </View>
            
            {/* Third element */}
            <View style={{ backgroundColor : '#16181F'}} className="  rounded-xl h-[57] flex-row items-center justify-between pr-3 ">
            

             <View className=" flex-row items-center justify-center">
             <View className=" m-2.5  bg-white/10 h-[40] w-[40] rounded-lg items-center justify-center ">
                <Image source={require("../assets/images/money.png")}/>
             </View>
             <View>
                <Text className="text-white">Preview budget 2023 Shams SMC</Text>
                <Text className="text-white/40"> Budget</Text>
             </View>
             </View>
             
             <Image  source={require("../assets/images/Path.png")}/>
            </View>
          
             {/* Fourth element */}
            <View  style={{ backgroundColor : '#16181F'}} className="  rounded-xl h-[57] flex-row items-center justify-between pr-3 ">

          <View className=" flex-row items-center justify-center">
        <View className=" m-2.5  bg-white/10 h-[40] w-[40] rounded-lg items-center justify-center ">
             <Image source={require("../assets/images/paper.png")}/>
            </View>
            <View>
            <Text className="text-white">Contrat Shmas SMC office</Text>
           <Text className="text-white/40"> Contrat</Text>
            </View>
            </View>

             <Image  source={require("../assets/images/Path.png")}/>
            </View>

            
           {/* Fifth  element */}
           <View style={{ backgroundColor : '#16181F'}} className=" rounded-xl h-[57] flex-row items-center justify-between pr-3 ">

                <View className=" flex-row items-center justify-center">
             <View className=" m-2.5  bg-white/10 h-[40] w-[40] rounded-lg items-center justify-center ">
                 <Image source={require("../assets/images/money.png")}/>
                  </View>
                     <View>
                 <Text className="text-white">New budget Shams SMC 2022</Text>
                        <Text className="text-white/40"> Budget</Text>
                      </View>
                    </View>

                    <Image  source={require("../assets/images/Path.png")}/>
                    </View>
              

          {/* Sixth element */}
          <View  style={{ backgroundColor : '#16181F'}}className=" rounded-xl h-[57] flex-row items-center justify-between pr-3 ">

         <View className=" flex-row items-center justify-center">
            <View className=" m-2.5  bg-white/10 h-[40] w-[40] rounded-lg items-center justify-center ">
               <Image source={require("../assets/images/money.png")}/>
            </View>
           <View>
                 <Text className="text-white">Budget 2021 Shams SMC</Text>
               <Text className="text-white/40"> Budget</Text>
             </View>
               </View>

                   <Image  source={require("../assets/images/Path.png")}/>
                         </View>

            
        </View>
        {/* Bottom icons  */}
         <View style={{ backgroundColor : '#16181F'}} className="h-[90]  m-3 rounded-3xl mt-20 flex-row items-center justify-around ">
            {/* item */}
          <View className="justify-center items-center pl-2">
           <Image source ={require('../assets/images/home.png' )}/>
           <Text className="text-white/40 text-xs pt-2">Home</Text>
          </View>

            {/* item */}
            <View className="justify-center items-center ">
           <Image source ={require('../assets/images/ssearch.png' )}/>
           <Text className="text-white/40 text-xs pt-2">Search</Text>
          </View>
            {/* item */}
            <View className="justify-center items-center pl-2">
           <Image source ={require('../assets/images/bank.png' )}/>
           <Text className="text-white/40 text-xs pt-2">Entities</Text>
          </View>
            {/* item */}
            <View className="justify-center items-center pl-2">
           <Image source ={require('../assets/images/calendar.png' )}/>
           <Text className="text-white/40 text-xs pt-2">Calendar</Text>
          </View>
            {/* item */}
            <View className="justify-center items-center pl-2">
           <Image source ={require('../assets/images/services.png' )}/>
           <Text className="text-white/40 text-xs pt-2">Services</Text>
          </View>
         </View>
         </View>
    )
  }
