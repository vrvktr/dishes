import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DishCategories from './Components/DishCategories';
import Dish from './Components/Dish';
const Dishes = (props) => {
    const [isDish, setDish] = useState();
    const [isDishCategories, setDishCategories] = useState();
    const [isSelectedCategories, setSelectedCategories] = useState();
    const [isActiveTab, setActiveTab] = useState(0);

    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`)
            .then(res => {
                const data = res.data[0];
                const table_items = data.table_menu_list;
                const selectedDishes = table_items[0];
                let selectedDish = selected(selectedDishes);
                setSelectedCategories(selectedDish);
                setDishCategories(table_items);
                setDish(data);
            });
    }, []);

    const selected = (data) => {
        var x = [];
        let category_dishes = data.category_dishes;
        category_dishes.forEach((selected) => {
            selected["value"] = 0;
            x.push(selected);
        });
        return x;

    }
    const minus = (id, value) => {
        var x = [];
        if (value > 0) {
            isSelectedCategories.forEach((selected) => {
                if (selected.dish_id === id) {
                    selected.value--;
                }
                x.push(selected);
            });
            props.cart('minus');
            setSelectedCategories(x);
        }
    }
    const plus = (id, value) => {
        var x = [];
        if (value >= 0) {
            isSelectedCategories.forEach((selected) => {
                if (selected.dish_id === id) {
                    selected.value++;
                }
                x.push(selected);

            });
            props.cart('plus');
            setSelectedCategories(x);
        }

    }

    const onChangeTab = (id,tab) => {
        setSelectedCategories();

        let data = isDishCategories.filter((item) => item.menu_category_id == id);
        let select = data[0];
        let selectedDish = selected(select);
        setSelectedCategories(selectedDish);
        setActiveTab(tab);
    }



    return (
        <>

            {isDish && (
                <>
                    <div>
                        <div class="row py-3">
                            <div className="cart d-flex">
                                {isDishCategories.map((item, index) => (
                                    <DishCategories items={item} index={index} onChangeTab={onChangeTab} key={index} isActive={isActiveTab} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {isSelectedCategories.length > 0 && (
                        <div className="px-2">
                            <Dish isSelectedCategories={isSelectedCategories} minus={minus} plus={plus} />
                        </div>
                    )}
                    {/* <div>
                        {isSelectedCategories.map((selected, index) => (
                            <>
                                <Dish item={selected} minus={minus} plus={plus} key={index} />
                            </>
                        ))}
                    </div> */}

                </>
            )}

        </>
    )
}

export default Dishes
