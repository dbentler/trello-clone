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
                text: "But I need a job"
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