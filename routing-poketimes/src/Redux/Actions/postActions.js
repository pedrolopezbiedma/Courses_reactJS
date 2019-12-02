export const deletePost = (clickedID) => {
    return{
        type: 'DELETE_POST',
        id: clickedID
    }
}