/*
export function someMutation (state) {
}
*/
export const setUser = (state, opened) => {
    state.user = opened
}
export const stateDialogLogin = (state, opened) => {
    state.dialog_login = opened
}
