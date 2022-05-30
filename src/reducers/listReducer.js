import { CONSTANTS } from "../actions";

let listID = 2;

const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Lorem Ipsum"
            },
            {
                id: 1,
                text: "I don't know the rest."
            }
        ]
    },
    {
        title: "I'm figuring it out",
        id: 1,
        cards: [
            {
                id: 0,
                text: "React is actually pretty good"
            },
            {
                id: 1,
                text: "I'm lying"
            },
            {
                id: 2,
                text: "But I"
            }
        ]
    }
];

const listsReducer = (state=initialState, action) => {
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            listID += 1;
            return [...state, newList]
        default: 
            return state;
    }
}

export default listsReducer;