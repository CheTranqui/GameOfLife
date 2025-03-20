import React from "react";

const CharacterName = () => {


    let name = "Chaz"

    let title = "";

    let fullName = title.length > 1 ? `${title} ${name}` : name;

    return (                
        <select className="characterName">
            <option>{fullName}</option>
        </select>
    );
}

export default CharacterName;