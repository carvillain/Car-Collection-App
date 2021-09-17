import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        year: "2020",
        car_make: "Jeep",
        car_model: "Grand Cherokee",
        color: "Silver",
        name: "Sheila",
        horsepower: "300",
        top_speed: "140",
        modifications: "none"
    },
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload},
        chooseCarMake: (state, action) => { state.car_make = action.payload},
        chooseCarModel: (state, action) => { state.car_model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseName: (state, action) => { state.name = action.payload},
        chooseHorsepower: (state, action) => { state.horsepower = action.payload},
        chooseSpeed: (state, action) => { state.top_speed = action.payload},
        chooseMods: (state, action) => { state.modifications = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseYear, chooseCarMake, chooseCarModel, chooseColor, chooseName, chooseHorsepower, chooseSpeed, chooseMods } = rootSlice.actions;