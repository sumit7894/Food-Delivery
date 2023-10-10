import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory =({data,showItems,setShowIndex})=>{
    
    function handleClick(){
        setShowIndex();
}
    return(
        <div>
        {/* Accordiance Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex flex-col border-b-gray-400">
           <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
           <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
           </div>
            {/* Accordiance Detials */}
            <div>
        {showItems && <ItemList items={data.itemCards}/>}
        </div>
        </div>
        
    </div>
    );
};

export default RestaurantCategory;