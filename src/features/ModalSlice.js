import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openModalId:  null,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.openModalId = action.payload;
        },
        closeModal: (state) => {
            state.openModalId = null;
        },
        toggleModal: (state, action) => {
            if(state.openModalId === action.payload) {
                state.openModalId = null;
            } else {
                state.openModalId = action.payload;
            }
        }
    }
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;