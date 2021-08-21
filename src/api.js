import {API_URl} from "./config";

const getMealId = async (mealId) => {
    const response = await fetch(API_URl + "/lookup.php?i=" + mealId)
    return response.json()
    // return await response.json
    // const meal = await response.json
}
const getAllCategories = async () => {
    const response =  await fetch(API_URl + "/categories.php")
    return response.json()
}
// const getAllCategories = async () => {
//   return await fetch(API_URl + "/categories.php").then(data => {
//     return data.json()
//   })
// }
const getFilteredCategory = async (categoryName) => {
    const response = await fetch(API_URl + "/filter.php?c=" + categoryName)
    return response.json()
}
export {getMealId, getAllCategories, getFilteredCategory}