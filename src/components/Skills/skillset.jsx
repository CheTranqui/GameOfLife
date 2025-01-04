"use client"

import React, {useState} from 'react';

const Skillset = () => {

    const [count, setCount] = useState(0);

    var listener = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <section>
                <p>
                    Click count: {count}
                </p>
                <button onClick={listener}>
                    Click me
                </button>
            </section>
        </div>
    );
};

export default Skillset;