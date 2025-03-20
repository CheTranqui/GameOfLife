export function updateProfile(name, characterClassName) {
    let myClassName = "Commoner"
    if (characterClassName != undefined && characterClassName.length > 0){
        myClassName = characterClassName;
    }

    let myClass = getClassDefinition(myClassName);

    let myProfile = getProfile(name);

    return (myProfile ?? {
        Name : name.length > 0 ? name : "Unknown",
        CharacterClass : characterClass.length > 0 ? characterClass : myClass.Name,
        Primary : myClass.Primary,
        SecondaryFirst : myClass.SecondaryFirst,
        SecondarySecond : myClass.SecondarySecond,
        TertiaryFirst : myClass.TertiaryFirst,
        TertiarySecond : myClass.TertiarySecond,
        Skills: myProfile.Skills,
        Titles : ["Class Title 1", "Class Title 2"]
    });
}