"use client"

import React from "react";
import { default as skillsetDefinitions } from "../../app/data/skillsetDefinitions.json";
import { default as skillDefinitions } from "../../app/data/skillDefinitions.json";

const Skillset = (props) => {
    const skillset = skillsetDefinitions[props.skillsetName];

    return (
        <section className="skillsetWrapper">
            <h2 className="skillsetName">
                {skillset.Name}
                <div className="skillsetNameTooltip skillsetTooltip">
                    {skillset.Description}
                </div>
            </h2>
            <ul className="skillList">
                {skillset.Skills.map((skill) => {
                    return (
                        <li className="skill" key={skill}>
                            {skill}
                            <div className="skillTooltip skillsetTooltip">
                                {skillDefinitions[skill].Description}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Skillset;