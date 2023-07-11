import React from 'react';

import styles from './Company.module.css'
const Company = ({company}) => {
    const { name, catchPhrase, bs } = company;
    return (
        <div className={styles.company}>
            <div> <b>COMPANY_ NAME: </b> {name} </div>
            <div> <b>CATCH_PHRASE: </b> {catchPhrase} </div>
            <div> <b>BS: </b> {bs} </div>
        </div>
    );
};

export default Company;