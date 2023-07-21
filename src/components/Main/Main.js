import React from 'react';
import styles from './Main.module.css'

const Main = () => {
    return (
        <main>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtYBXLAR-ObLSzoOJ8EJzM-_x67NGRlVjYLCQkOJ6xDTIoitV3DbohPrWvYyXplXUJ-0&usqp=CAU"
                alt="hello photo"
                className={styles.image}
            />
        </main>
    );
};

export default Main;