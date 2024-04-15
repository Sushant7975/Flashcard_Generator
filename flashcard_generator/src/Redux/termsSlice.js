import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
// Load state from local storage or use an empty array if no data is stored
const initialState = {
    terms: JSON.parse(localStorage.getItem('terms')) || [],
};

const termsSlice = createSlice({
    name: "terms",
    initialState: initialState,
    reducers: {
        addTerm: (state, action) => {
            const { flashcardId, title, definition, term_uploadimage } = action.payload;
            const newTerm = {
                id: nanoid(),
                flashcardId: flashcardId,
                title: title,
                definition: definition,
                term_uploadimage: term_uploadimage
            };
            state.terms.push(newTerm);
            // console.log('term state after adding:', state.terms[0]);

            // Save state to local storage
            localStorage.setItem('terms', JSON.stringify(state.terms));
        },
        removeTerm: (state, action) => {
            state.terms = state.terms.filter((term) => term.id !== action.payload);

            // Save state to local storage
            localStorage.setItem('terms', JSON.stringify(state.terms));
        },
        updateTerm: (state, action) => {
            const { id, title, definition, term_uploadimage } = action.payload;
            const termToUpdate = state.terms.find((term) => term.id === id);
            if (termToUpdate) {
                termToUpdate.title = title;
                termToUpdate.definition = definition;
                termToUpdate.term_uploadimage = term_uploadimage
            }

            // Save state to local storage
            localStorage.setItem('terms', JSON.stringify(state.terms));
        },
    },
});

// Export action creators
export const { addTerm, removeTerm, updateTerm } = termsSlice.actions;
export default termsSlice.reducer;