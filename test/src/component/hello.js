import styles from './Hello.module.css'
import { useState } from 'react';

const Hello = function ({age, name}) {
    return <div>
        <h1>Hello {name}!</h1>
        <h2>your age is {age}</h2>

    </div>
};

export default Hello;