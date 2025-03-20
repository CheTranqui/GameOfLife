import React, {createContext, useReducer} from 'react';

export const ProfileContext = createContext();

const initialState = {
    profile: getProfile(),
}

const profileReducer = (state, action) => {
    // using action.type
    // the type is the name of the method
    // it accepts up to three variables
    // each variable must be preceeded by a dash
    let parts = action.type.split("-");
    let act = parts[0];
    let variable1 = "";
    let variable2 = "";
    let variable3 = "";
    if (parts.length > 1){
        variable1 = parts[1];
    }
    if (parts.length > 2){
        variable2 = parts[2];
    }
    if (parts.length > 3){
        variable3 = parts[3];
    }
    switch (act){

    }
};

const getProfile = (name = "") => {
    let profile = {};
    if (name.length > 0){
        //get profile from StorageProvider
    }
    
    return {
        Name : name.length > 0 ? name : "Unknown",
        CharacterClass : characterClass.length > 0 ? characterClass : myClass.Name,
        Primary : myClass.Primary,
        SecondaryFirst : myClass.SecondaryFirst,
        SecondarySecond : myClass.SecondarySecond,
        TertiaryFirst : myClass.TertiaryFirst,
        TertiarySecond : myClass.TertiarySecond,
        Skills: myProfile.Skills,
        Titles : ["Class Title 1", "Class Title 2"]
    }};

export function ProfileProvider(props){
    const [state, dispatch] = useReducer(profileReducer, initialState);

    return <ProfileContext.Provider value={{state, dispatch}}>{props.children}</ProfileContext.Provider>
}