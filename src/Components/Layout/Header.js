import React from 'react';
import classes from './Header.module.css';
import ModalImg from '../../Asserts/meals.jpg';
import HeaderCart from './HeaderCart';

const Header = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                 <HeaderCart/>
            </header>
            <div className={classes['modal-img']}>
                <img src={ModalImg} alt="Tasty and delicious food table"></img>
            </div>
        </React.Fragment>
    )
}

export default Header;