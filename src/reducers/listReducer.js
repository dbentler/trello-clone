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
    }
];

const listsReducer = (state=initialState, action) => {
    switch (action.type){
        default: 
            return state;
    }
}

export default listsReducer;