"use client"

import {default as classDefinitions} from "@app/data/classDefinitions.json"
import {default as skillsetDefinitions} from "@app/data/skillsetDefinitions.json";
import {default as skillDefinitions} from "@app/data/skillDefinitions.json";
import React, {createContext, useReducer} from 'react';

export const StorageContext = createContext();

const storageReducer = (state, action) => {
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
        case "getProfileByName":
            if (variable1 && variable1.length > 0){
                return getProfileFromStorage(variable1);
            }
            else{
                return null;
            }
        // case 
    }
}

const initialState = {
    profiles: {},
    currentProfile: {},
    classes: classDefinitions,
    skillsets: skillsetDefinitions,
    skills: skillDefinitions    
}

export function getClassDefinition(characterClassName = "Commoner"){
    let classDefinition = classDefinitions[characterClassName];
    return classDefinition ? classDefinition : null;
}

export function getSkillsetDefinition(skillsetName = "Management"){
    let skillsetDefinition = skillsetDefinitions[skillsetName];
    return skillsetDefinition ? skillsetDefinition : null;
}

export function getSkillDefinition(skillName){
    let skillDefinition = skillDefinitions[skillName];
    return skillDefinition ? skillDefinition : null;
}

export function getProfileFromStorage(name = ""){
    if (initialState.profiles.length == 0){
        initialState.profiles = loadProfilesFromStorage();
    }
    if (name.length > 0){
        
        initialState.profiles.forEach((golProfile) => {
            if (golProfile.Name == name){
                initialState.currentProfile = golProfile;
            }
        })
    }
}

export function loadProfilesFromStorage() {
    try {
        initialState.profiles = window.localStorage.getItem("gameOfLifeProfile");
    }
    catch{
        console.log("GameOfLife: No profiles found.")
    }
}

export function saveProfile(updatedProfile) {
    window.localStorage.setItem("gameOfLifeProfile", updatedProfile);
    initialState.currentProfile = updatedProfile;
    let profileFound = false;
    for (const profile of initialState.profiles){
        if (profile.Name == updatedProfile.Name){
            profile = updatedProfile;
            profileFound = true;
        }
    }
    if (!profileFound){
        initialState.profiles.add(updatedProfile);
    }
}

export function StorageProvider(props){
    const [state, dispatch] = useReducer(storageReducer, initialState);

    return <StorageProvider.Provider value={{state, dispatch}}>{props.children}</StorageProvider.Provider>
}