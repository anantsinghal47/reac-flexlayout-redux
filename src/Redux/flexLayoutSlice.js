import { createSlice } from "@reduxjs/toolkit"


const layout = {
    model: {
        global: {},
        borders: [],
        layout: {
            type: "row",
            weight: 100,
            children: [
                {
                    type: "tabset",
                    weight: 50,
                    children: [
                        {
                            type: "tab",
                            name: "One",
                            component: "button",
                        }
                    ]
                },

            ]
        }
    },

    currentLayout: {
        name: "layout 1",
            layout: {

            }
    },

    layouts: [

        {
            name: "layout 1",
            layout: {

            }
        }

    ]
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState: layout,
    reducers: {
        addLayout(state, action) {
            const { children } = action.payload;


            const newState = {
                model: {
                    ...state.model,
                    layout: {
                        ...state.model.layout,
                        children: [
                            ...state.model.layout.children,
                            ...children
                        ]
                    }
                }
            }

            console.log("newstate", newState);
            return newState;

        },
        saveLayout(state, action) {
            const { layout } = action.payload;
            const newState = {
                ...state.model,
                layouts: [
                    ...state.layouts,
                    layout
                ]
            }

            return newState;

        },

    }
})


export const getModel = state => state.layout.model;
export const getAllLayouts = state => state.layout.layouts;
export const getCurrentLayout = state => state.layout.currentLayout;

export const { addLayout, updateLayout } = layoutSlice.actions
export default layoutSlice.reducer;