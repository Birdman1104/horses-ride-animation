# playables-template-pixi

// Step 1 :

// gameData : We only focus on the Spades, Hearts, Clubs, Diamonds
// if segment value is zero means race is not started.
// if any one of these card segment value is not zero its means race is started. now check the place value .

// if Status of these object is IN_PLAY then we will check if place object have and value of place (1,2,3) is the number of hourse , 1 is first 2 is second, 3 is 3rd and so on.

{
...// just the name
...name: "Spaded" | "Hearts" | "Clubs" | "Diamonds"
...// TO ASK
...status: "IN_PLAY"
...// PROPERTIES
...properties: [
......{
.........// if (segment === 0) game has not started
.........// if any segment !== 0, game started
.........// TOASK - maximal value of the segment
.........name: "segment"
.........value: number
......},
......{
............// TOASK - place - final place or current place?
............name: "place"
............// [1, 4]
............value: number
......},

    ]

}

gameData: {
objects: [

        {
            status: 'IN_PLAY',
            properties: [
                {
                    name: 'Segment',
                    value: '10',
                },
                {
                    name: 'Place',
                    value: '3',
                },
            ],
            name: 'Spades',
        },
        {
            status: 'IN_PLAY',
            properties: [
                {
                    name: 'Segment',
                    value: '11',
                },
                {
                    name: 'Place',
                    value: '2',
                },
            ],
            name: 'Hearts',
        },
        {
            status: 'IN_PLAY',
            properties: [
                {
                    name: 'Segment',
                    value: '3',
                },
                {
                    name: 'Place',
                    value: '4',
                },
            ],
            name: 'Clubs',
        },
        {
            status: 'IN_PLAY',
            properties: [
                {
                    name: 'Segment',
                    value: '18',
                },
                {
                    name: 'Place',
                    value: '1',
                },
            ],
            name: 'Diamonds',
        },
    ],

},
