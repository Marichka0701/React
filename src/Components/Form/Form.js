import React, {useRef} from 'react';
import { Link } from "react-router-dom";

import styles from './Form.module.css'

const Form = () => {
    const brandRef = useRef('');
    const priceRef = useRef(null);
    const yearRef = useRef(null);

    const idRef = useRef(null);

    const handleClickAdd = (e) => {
        e.preventDefault();
        console.log(brandRef.current.value, priceRef.current.value, yearRef.current.value);

        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(
                {
                    brand: brandRef.current.value,
                    price: priceRef.current.value,
                    year: yearRef.current.value,
                }
            )
        })
            .then(response => response.json())
            .then(cars => console.log(cars))

        // у мене било помилку, коли я додала одну машинку, потім стерла дані з інпутів, вписала нові -
        // в мене в консольці (14 рядок) почало той об'єкт нової машини бути у вигляді масиву, де 0 елемент то той об'єкт
        // у мене не було інших варіантів.
        // цей варіант гуд?

        brandRef.current.value ='';
        priceRef.current.value ='';
        yearRef.current.value ='';
    }

    const handleClickDelete = (e) => {
        e.preventDefault();
        console.log(typeof (+idRef.current.value));

        try {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${+idRef.current.value}`, {
                method: 'DELETE'})
                .then(response=> response.json())
                .then(car => console.log(car))
        }
        catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.createCar}>
                    <h2>ADD A NEW CAR</h2>
                    <form action='#'>
                        <label>
                            Brand:
                            <input type="text" required ref={brandRef}/>
                        </label>
                        <label>
                            Price:
                            <input type="number" required ref={priceRef}/>
                        </label>
                        <label>
                            Year:
                            <input type="number" required ref={yearRef}/>
                        </label>

                        <div className={styles.buttons}>
                            <button
                                className={styles.btn}
                                type="submit"
                                onClick={handleClickAdd}
                            >Add a new car
                            </button>
                            <Link to='/show-cars'>
                                <button className={styles.showCarsBtn}>
                                    Show cars
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>

                {/*тут б'є помилку, але машинку видаляє*/}
                <div className={styles.deleteCar}>
                    <h2>DELETE A CAR</h2>
                    <form action='#'>
                        <label>
                            Id:
                            <input type="number" required ref={idRef} />
                        </label>

                        <button
                            className={styles.btn}
                            type="submit"
                            onClick={handleClickDelete}
                        >Delete a car
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;