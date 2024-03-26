export const DATA = {
    channel: {
        status: 'RUNNING',
        game: {
            round: 4,
            bettingWindowTime: 25,
            bettingWindowPercentageComplete: 13,
            gameData: {
                objects: [
                    {
                        properties: [
                            {
                                name: 'Handicap',
                                value: '8,5,10,15,19,16,35,38,26,40,39,47',
                            },
                            {
                                name: 'Used',
                                value: '33,49,20',
                            },
                            {
                                name: 'Current',
                                value: '28,22,2',
                            },
                        ],
                        name: 'Cards',
                    },
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
            markets: {
                markets: [
                    {
                        status: 'ACTIVE',
                        commissionRate: -196.0,
                        marketType: 'SINGLE_WINNER_OR_TIE',
                        selections: {
                            selections: [
                                {
                                    name: 'Spades',
                                    resource: {
                                        href: 'https://api.games.betfair.com/rest/v1/selection/tradeActivity?marketId=87899162&selectionId=1032056&type=json',
                                        title: 'Trade Activity',
                                        responseType: 'selectionTradeActivity',
                                    },
                                    status: 'IN_PLAY',
                                    amountMatched: 0.0,
                                    profitLoss: 0.0,
                                    bestAvailableToBackPrices: {
                                        prices: [
                                            {
                                                value: 4.75,
                                                amountUnmatched: 507.0,
                                            },
                                            {
                                                value: 4.7,
                                                amountUnmatched: 1370.0,
                                            },
                                            {
                                                value: 4.6,
                                                amountUnmatched: 2958.0,
                                            },
                                        ],
                                    },
                                    bestAvailableToLayPrices: {
                                        prices: [
                                            {
                                                value: 4.85,
                                                amountUnmatched: 498.0,
                                            },
                                            {
                                                value: 4.95,
                                                amountUnmatched: 1329.0,
                                            },
                                            {
                                                value: 5.1,
                                                amountUnmatched: 2791.0,
                                            },
                                        ],
                                    },
                                    id: 1032056,
                                },
                                {
                                    name: 'Hearts',
                                    resource: {
                                        href: 'https://api.games.betfair.com/rest/v1/selection/tradeActivity?marketId=87899162&selectionId=1032055&type=json',
                                        title: 'Trade Activity',
                                        responseType: 'selectionTradeActivity',
                                    },
                                    status: 'IN_PLAY',
                                    amountMatched: 0.0,
                                    profitLoss: 0.0,
                                    bestAvailableToBackPrices: {
                                        prices: [
                                            {
                                                value: 6.3,
                                                amountUnmatched: 382.0,
                                            },
                                            {
                                                value: 6.2,
                                                amountUnmatched: 1039.0,
                                            },
                                            {
                                                value: 6.1,
                                                amountUnmatched: 2225.0,
                                            },
                                        ],
                                    },
                                    bestAvailableToLayPrices: {
                                        prices: [
                                            {
                                                value: 6.5,
                                                amountUnmatched: 374.0,
                                            },
                                            {
                                                value: 6.6,
                                                amountUnmatched: 997.0,
                                            },
                                            {
                                                value: 6.7,
                                                amountUnmatched: 2094.0,
                                            },
                                        ],
                                    },
                                    id: 1032055,
                                },
                                {
                                    name: 'Clubs',
                                    resource: {
                                        href: 'https://api.games.betfair.com/rest/v1/selection/tradeActivity?marketId=87899162&selectionId=1032053&type=json',
                                        title: 'Trade Activity',
                                        responseType: 'selectionTradeActivity',
                                    },
                                    status: 'IN_PLAY',
                                    amountMatched: 0.0,
                                    profitLoss: 0.0,
                                    bestAvailableToBackPrices: {
                                        prices: [
                                            {
                                                value: 9.4,
                                                amountUnmatched: 256.0,
                                            },
                                            {
                                                value: 9.2,
                                                amountUnmatched: 698.0,
                                            },
                                            {
                                                value: 9.0,
                                                amountUnmatched: 1503.0,
                                            },
                                        ],
                                    },
                                    bestAvailableToLayPrices: {
                                        prices: [
                                            {
                                                value: 9.6,
                                                amountUnmatched: 253.0,
                                            },
                                            {
                                                value: 9.7,
                                                amountUnmatched: 676.0,
                                            },
                                            {
                                                value: 9.9,
                                                amountUnmatched: 1419.0,
                                            },
                                        ],
                                    },
                                    id: 1032053,
                                },
                                {
                                    name: 'Diamonds',
                                    resource: {
                                        href: 'https://api.games.betfair.com/rest/v1/selection/tradeActivity?marketId=87899162&selectionId=1032054&type=json',
                                        title: 'Trade Activity',
                                        responseType: 'selectionTradeActivity',
                                    },
                                    status: 'IN_PLAY',
                                    amountMatched: 0.0,
                                    profitLoss: 0.0,
                                    bestAvailableToBackPrices: {
                                        prices: [
                                            {
                                                value: 1.87,
                                                amountUnmatched: 1294.0,
                                            },
                                            {
                                                value: 1.84,
                                                amountUnmatched: 3574.0,
                                            },
                                            {
                                                value: 1.8,
                                                amountUnmatched: 7881.0,
                                            },
                                        ],
                                    },
                                    bestAvailableToLayPrices: {
                                        prices: [
                                            {
                                                value: 1.9,
                                                amountUnmatched: 1274.0,
                                            },
                                            {
                                                value: 1.93,
                                                amountUnmatched: 3398.0,
                                            },
                                            {
                                                value: 1.96,
                                                amountUnmatched: 7135.0,
                                            },
                                        ],
                                    },
                                    id: 1032054,
                                },
                            ],
                            type: 'MainBets',
                        },
                        id: 87899162,
                        nextId: 87899216,
                    },
                ],
                currency: 'GBP',
            },
            id: 91612760,
        },
        id: 1444116,
        name: 'Card Racer',
        gameType: 'CARD_RACER',
    },
};

// Step 1 :

// gameData :  We only focus on the Spades, Hearts, Clubs, Diamonds
// if segment value is zero means race is not started.
// if any one of these card segment value is not zero its means race is started. now check the place value .

// if Status of these object is IN_PLAY then we will check if place object have and value of place (1,2,3) is the number of hourse , 1 is first 2 is second, 3 is 3rd and so on.
