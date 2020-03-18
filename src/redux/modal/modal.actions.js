export const openModal = image => ({
    type: "OPEN_MODAL",
    payload: image
})

export const closeModal = () => ({
    type: "CLOSE_MODAL",
})