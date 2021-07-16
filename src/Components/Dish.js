import React, { useState,useEffect } from 'react'

const Dish = (props) => {
    useEffect(() => {
        
        
    });
    const [isSelectedCategories, setSelectedCategories] = useState(props.isSelectedCategories);
    return (
        <>
            {isSelectedCategories && (
                <>
                    {props.isSelectedCategories.map((item, index) => (
                        <>
                            <div className="row addBorder py-2">
                                <div className="col-12 col-lg-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>{item.dish_name}</h6>
                                        </div>
                                        <div className="col-3 text-right">
                                            {`${item.dish_calories} calories`}
                                        </div>
                                        <div className=" col-3 p-2">

                                            <img src={item.dish_image} className="DishImages" alt={item.dish_image} />
                                        </div>
                                    </div>
                                    <div>
                                    <p>{item.dish_description}</p>
                                    </div>
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                                <button type="button" className="btn btn-success " onClick={() => props.minus(item.dish_id, item.value)} >
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </span>
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-success " >
                                                    {item.value}
                                                </button>
                                            </span>

                                            <span class="input-group-btn">
                                                <button type="button" className="btn btn-success" onClick={() => props.plus(item.dish_id, item.value)} >
                                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {item.addonCat.length>0&&<p className="addOns">Customization available</p>}
                                </div>

                            </div>
                        </>
                    ))}
                </>
            )}

        </>

    )
}

export default Dish
