export const handleToggleFavouriteImage = (currentImageIDs, imageIDToAdd) => {
    if (currentImageIDs.includes(imageIDToAdd)) {
        return currentImageIDs.filter(currentImageID => currentImageID !== imageIDToAdd)
    } else {
        return [...currentImageIDs, imageIDToAdd]
    }
}