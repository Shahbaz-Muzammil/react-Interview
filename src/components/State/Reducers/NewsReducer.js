

export const initialState= {
   newsData: [{
       title:"Global News",
       Image:"https://www.pexels.com/photo/unrecognizable-pedestrians-walking-in-city-district-on-rainy-day-7210061/",
       discription:"htis is the main news heading about the new and fresh news data all over the globe and country and state",


    },
    {
        title:"Nation News",
        Image:"https://www.pexels.com/photo/unrecognizable-female-crossing-road-among-blooming-sakura-trees-7210062/",
        discription:"htis is the main news heading about the new and fresh news data all over the globe and country and state",
 
 
     },
     {
        title:"State News",
        Image:"https://www.pexels.com/photo/people-waiting-for-bus-303315/",
        discription:"htis is the main news heading about the new and fresh news data all over the globe and country and state",
 
 
     },
  

]
}
export const NewsReducer =(state= initialState, action )=>{
    return state;

};