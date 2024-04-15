import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
// Load state from local storage or use an empty array if no data is stored
const initialState = {
    flashcards: JSON.parse(localStorage.getItem('flashcards')) || [],
};

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: initialState,
    reducers: {
        addFlashcard: (state, action) => {
            const { title, description, uploadImage, terms, termsLength} = action.payload;
            const newFlashcard = {
                id: nanoid(), // Generate unique ID
                title: title,
                uploadImage: uploadImage,
                description: description,
                terms:terms, // Initialize terms array
                termsLength: termsLength,
            };
            state.flashcards.push(newFlashcard);
            // console.log('Flashcards state after adding:', state.flashcards);

            // Save state to local storage
            localStorage.setItem('flashcards', JSON.stringify(state.flashcards));
        },
        removeFlashcard: (state, action) => {
            state.flashcards = state.flashcards.filter((flashcard) => flashcard.id !== action.payload);

            // Save state to local storage
            localStorage.setItem('flashcards', JSON.stringify(state.flashcards));
        },
        // Other reducers for updating flashcards
    },
});

// Export action creators
export const { addFlashcard, removeFlashcard } = flashcardsSlice.actions;
export default flashcardsSlice.reducer;