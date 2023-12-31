
import { Text, View , TextInput , Image} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'


export default  function FilterScreen() {
  
   const [allIsChecked, setallIsChecked]= useState(false)
   const [documentsIsChecked, setDocumentsIsChecked]= useState(false)
   const [tawasolIsChecked, setTawasolIsChecked]= useState(false)
   const [eventsIsChecked, setEventsIsChecked]= useState(false)
   const [counsilIsChecked, setCounsilIsChecked]= useState(false)
   const [newsIsChecked, setNewsIsChecked]= useState(false)
   const [xIsChecked, setxIsChecked]= useState(false)


    return (
      <View   style= {{ backgroundColor : '#1F2128' }} className=" flex-1 ">
        <StatusBar style="light"  />

         {/* advanced  search title */}
       <View style={{ backgroundColor : '#16181F'}} className=" mt-14 flex-row  justify-around items-center   h-[60]">
       <Text className= "  text-white pl-24 ">Advanced Search</Text>
       <Text className=" text-sm text-blue-600 mr-[-20]">Reset</Text>
       </View>
       {/* search by keywords bar */}
        <View className=" justify-center items-center">
       <View className="bg-white/10  mt-5 mb-3 w-[320] h-[50] rounded-2xl  justify-center p-4 ">
             <TextInput   placeholder="Search by keywords... "  placeholderTextColor={'gray'}/>
             
       </View>
       </View>
        {/* title */}
        <View className="ml-4 mb-2">
       <Text className="text-white text-lg">Type</Text>
        </View>

         {/* checkbox */}
        <View className=" flex-row flex-wrap space-y-4 items-center ml-4 mr-4 mb-2">
         
          <View className="flex-row items-center mr-5 ">
            {/* <View className="w-[29] h-[29] rounded-xl border-0.5 border-white/40 mr-2">
            </View> */}
            <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={allIsChecked} color={allIsChecked ? '#3661EB' : undefined}  onValueChange={setallIsChecked} />
            <Text className="text-white/40 text-xs">All</Text>
          </View>
          

        
         <View className="ml-4 flex-row items-center mr-3 ">
            
         <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={documentsIsChecked} color={documentsIsChecked ? '#3661EB' : undefined}  onValueChange={setDocumentsIsChecked} />
            <Text className="text-white/40 text-xs">Documents</Text>
            
          </View>
         
         <View className="ml-4 flex-row items-center ">
         <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={tawasolIsChecked} color={tawasolIsChecked ? '#3661EB' : undefined}  onValueChange={setTawasolIsChecked} />
            <Text className="text-white/40 text-xs">Tawasol</Text>
          </View>
         
         <View className=" flex-row items-center mr-10">
         <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={eventsIsChecked} color={eventsIsChecked? '#3661EB' : undefined}  onValueChange={setEventsIsChecked} />
            <Text className="text-white/40 text-xs">Events & Meetings</Text>
          </View>

           
         <View className=" flex-row items-center ">
         <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={counsilIsChecked} color={counsilIsChecked ? '#3661EB' : undefined}  onValueChange={setCounsilIsChecked} />
            <Text className="text-white/40 text-xs">Executive Counsil</Text>
          </View>
             
         <View className=" flex-row items-center mr-8">
         <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={newsIsChecked} color={newsIsChecked ? '#3661EB' : undefined}  onValueChange={setNewsIsChecked} />
            <Text className="text-white/40 text-xs">News /Artical</Text>
          </View>
 
         
         <View className=" flex-row items-center ">
         <Checkbox style={{ width:29 , height:29 , borderRadius:12, marginRight:10, borderColor: '#808080', borderWidth:0.5  }}  value={xIsChecked} color={xIsChecked ? '#3661EB' : undefined}  onValueChange={setxIsChecked} />
            <Text className="text-white/40 text-xs">X</Text>
          </View>
        </View> 

         {/* title */}
         <View className="ml-4 mb-3">
       <Text className="text-white text-lg">Entity</Text>
        </View>
         {/* section */}
      
        <View className="bg-white/10 w-[320] h-[35]  mb-5  mr-4 ml-4 rounded-lg items-center justify-between p-2 flex-row ">
       <Text className="text-white "> Invest Bank</Text>
       <Image  source={require("../assets/images/Path2.png")}/>
    
   
       </View>
         {/* title */}
       <View className="ml-4 mb-3">
       <Text className="text-white text-lg">Date</Text>
        </View>
         {/* section */}
         
       <View className="bg-white/10  w-[320] h-[35] mr-4 ml-4 mb-4 rounded-lg justify-between items-center flex-row p-2  ">
       <Text className="text-white ">Last 12 Months</Text>
       <Image  source={require("../assets/images/Path2.png")}/>
       </View>
       {/* status */}
       <View className="ml-4 mb-3">
       <Text className="text-white text-lg">Status</Text>
        </View>

        <View className="flex-row w-[270] ml-2">
          
          {/* elements */}
          {/* element */}
         <View className=" flex-row items-center ml-3 mr-2">
            <View className="w-[29] h-[29] rounded-xl border-0.5 border-white/40 mr-1">
            </View>
            <Text className="text-white/40 text-xs mr-2">All</Text>
          </View>

           {/* element */}
         <View className=" flex-row items-center ">
            <View style={{ backgroundColor : "#3661EB"}} className="w-[29] h-[29]  items-center justify-center rounded-xl  border-0.5 mr-1">
            <Image source={ require("../assets/images/Path3.png")} />
            </View>
            <Text className="text-white  text-xs pr-1 mr-2">Approved</Text>
          </View>
           {/* element */}
         <View className=" flex-row items-center mr-4 ">
            <View className="w-[29] h-[29] rounded-xl border-0.5 border-white/40 mr-1">
            </View>
            <Text className="text-white/40 text-xs">Decline</Text>
          </View>
 
           {/* element */}
         <View className=" flex-row items-center ">
            <View className="w-[29] h-[29] rounded-xl border-0.5 border-white/40 mr-1">
            </View>
            <Text className="text-white/40 text-xs">Waiting</Text>
          </View>
        </View>     

            {/* Apply filters */}
            <View className="justify-center items-center">
            <View style={{ backgroundColor: "#3661EB"}} className="w-[320] h-[45] mt-14  rounded-xl items-center justify-center">

            <Text className="text-white">Apply filters</Text>
            </View>
            </View>
      </View>
      
    )
  }

