export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateObject
    }
}