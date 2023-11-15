import  { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import moment from 'moment/moment'
export default function TimerScreen () {

const [currentdate,setcurrentdate]= useState("")
const [countdown, setCountdown] = useState([]);

  useEffect(() => {
    const currentDatewithmoment =moment().format('MMMM Do YYYY, h:mm:ss a'); 
     setcurrentdate(currentDatewithmoment); 

    const getNextEvent = () => {
      const today = moment();
      let nextEvent;

      // Dates for the events
      const eventDates = [
        moment().day("Monday").hour(17).minute(0).second(0),
        moment().day("Thursday").hour(2).minute(37).second(0),
        moment().day("Saturday").hour(14).minute(54).second(0)
      ];

      // Find the next upcoming event
      for (let i = 0; i < eventDates.length; i++) {
        if (today < eventDates[i]) {
          nextEvent = eventDates[i];
          break;
        }
      }

      // If no upcoming event today, get the first event of the next week
      if (!nextEvent) {
        nextEvent = moment(eventDates[0]).add(7, 'days');
      }

      const timeRemaining = moment.duration(nextEvent.diff(today));
      setCountdown(

       
        [
            timeRemaining.days(),
            timeRemaining.hours(),
            timeRemaining.minutes(),
            timeRemaining.seconds(),
        ]
      );
    };

    // Update countdown every second
    const interval = setInterval(getNextEvent, 1000);

       return () => clearInterval(interval);

      
       }, []);

    return (
      <View className=" bg-lime-200 flex-1  items-center pt-32  space-y-32">
        {/* dispalying current date */}
        <View className="items-center  space-y-6">
        <Text className="font-bold text-xl">  The current Date:  </Text>
        <Text className="font-medium">  {currentdate}</Text>
        </View>
        {/*  displaying the countdown */}
         
        <View className="flex-  items-center ">
        <Text className="font-bold mb-6 text-xl" >countdown :</Text>
         <View className="flex-row space-x-2">

          {/* days */}
         <View className="flex-column space-y-1 items-center">
        <View className="bg-lime-700 h-20 w-14 justify-center items-center  "> 
         <Text className="text-white">{countdown[0]}</Text>
         </View>
         <Text>Days</Text>
         </View>   
         {/* hours */}
         <View className="flex-column space-y-1 items-center">
        <View className="bg-lime-700  h-20 w-14 justify-center items-center  "> 
         <Text className="text-white">{countdown[1]}</Text>
         </View>
         <Text>Hours</Text>
         </View>
         
        {/* minutes */}
         <View className="flex-column  space-y-1 items-center">
        <View className="bg-lime-700  h-20 w-14 justify-center items-center  "> 
         <Text className="text-white">{countdown[2]}</Text>
         </View>
         <Text>Minutes</Text>
         </View> 

         {/* seconds */}
         <View className="flex-column  space-y-1 items-center">
        <View className="bg-lime-700  h-20 w-14 justify-center items-center  "> 
         <Text className="text-white">{countdown[3]}</Text>
         </View>
         <Text>Seconds</Text>
         </View> 


         </View>
        </View>












































































































      </View>
    )
  
}
