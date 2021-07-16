import React,{useState} from 'react'

const DishCategories = (props) => {
    const [isDish, setDish] = useState(props.items);
    console.log("props",props);
    
    return (
        <div>
            <button className={props.isActive==props.index?"btn btn-link isactive text-nowrap":"btn btn-link text-nowrap"} onClick={()=>(props.onChangeTab(isDish.menu_category_id,props.index))}>
            {isDish.menu_category}
            </button>
        </div>
    )
}

export default DishCategories
