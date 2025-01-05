"use client"

import React, {useState} from "react";
import { default as skillsetDefinitions } from "../../app/data/skillDefinitions.json";

const Skillset = (props) => {
    const [skillset, setSkillset] = useState(skillsetDefinitions[props.skillsetName]);

    return (
        <div>
            <section>
                <h2>
                    {skillset.name}
                </h2>
                <ul>
                    {skillset.skills.map((skill) => {
                        return (
                            <li key={skill}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
};

export default Skillset;