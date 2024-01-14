const { createSlice } = require("@reduxjs/toolkit");

// Try to retrieve data from localStorage on the client side, or use empty arrays if not present
const suggestedDataFromStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('suggestedData')) || [] : [];
const suggestedCityDataFromStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('suggestedCityData')) || [] : [];

const initialState = {
  selectedSuggestion: suggestedDataFromStorage,
  selectedCity: suggestedCityDataFromStorage,
};

const Slice = createSlice({
  name: "addSuggestionSlice",
  initialState,
  reducers: {
    addSuggestion: (state, action) => {
      const data = {
        id: action.payload.suggestion.id,
        name: action.payload.suggestion.text,
        title: action.payload.title
      };
      state.selectedSuggestion.push(data);

      // Save data to localStorage whenever it changes (on the client side)
      if (typeof window !== 'undefined') {
        localStorage.setItem('suggestedData', JSON.stringify(state.selectedSuggestion));
      }
    },
    addCity: (state, action) => {
      const data = {
        id: action.payload.id,
        name: action.payload.text,
      };
      state.selectedCity.push(data);

      // Save data to localStorage whenever it changes (on the client side)
      if (typeof window !== 'undefined') {
        localStorage.setItem('suggestedCityData', JSON.stringify(state.selectedCity));
      }
    },
    reset: (state) => {
      // Reset the state and clear localStorage (on the client side)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('suggestedData');
        localStorage.removeItem('suggestedCityData');
      }
      return initialState;
    },
  }
});

export const { addSuggestion, addCity, reset } = Slice.actions;
export default Slice.reducer;
