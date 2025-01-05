"use client"

import React, {useState} from "react";
import { default as skillsetDefinitions } from "../../app/data/skillsetDefinitions.json";

const Skillset = (props) => {
    const [skillset, setSkillset] = useState(skillsetDefinitions[props.skillsetName]);

    return (
        <section>
            <h2>
                {skillset.Name}
            </h2>
            <ul>
                {skillset.Skills.map((skill) => {
                    return (
                        <li key={skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Skillset;