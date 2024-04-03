export enum GameStatus {
    UNKNOWN = 'UNKNOWN',
    STOPPED = 'STOPPED',
    FINISHED = 'FINISHED',
    STARTED = 'STARTED',
}

export async function fetchAndProcess() {
    try {
        const response = await fetch('https://m.ssplaywin.club/exchangeapi/xgame/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '1444116',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Process data here as needed
        const processedData = processData(data);

        return processedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            GameStatus: 'STOPPED',
            Spades: {
                status: 'IN_PLAY',
                position: 0,
                distance: 0,
            },
            Hearts: {
                status: 'IN_PLAY',
                position: 0,
                distance: 0,
            },
            Clubs: {
                status: 'IN_PLAY',
                position: 0,
                distance: 0,
            },
            Diamonds: {
                status: 'IN_PLAY',
                position: 0,
                distance: 0,
            },
        };
    }
}

function processData(x) {
    var gdata = {
        GameStatus: 'STOPPED',
        Spades: {
            status: 'IN_PLAY',
            position: 0,
            distance: 0,
        },
        Hearts: {
            status: 'IN_PLAY',
            position: 0,
            distance: 0,
        },
        Clubs: {
            status: 'IN_PLAY',
            position: 0,
            distance: 0,
        },
        Diamonds: {
            status: 'IN_PLAY',
            position: 0,
            distance: 0,
        },
    };
    if (x.channel.game.gameData) {
        let gd = x.channel.game.gameData;
        if (gd.objects && Array.isArray(gd.objects)) {
            if (gd.objects.length > 0) {
                gd.objects.forEach((b) => {
                    if (b.name !== 'Cards') {
                        gdata[b.name].status = b.status;

                        if (b.properties && Array.isArray(b.properties) && b.properties.length > 0) {
                            b.properties.forEach((p) => {
                                if (p.name == 'Place') {
                                    gdata[b.name].position = p.value;
                                }
                                if (p.name == 'Segment') {
                                    if (parseFloat(p.value) > 0) {
                                        if (gdata[b.name].status != 'IN_PLAY') {
                                            gdata.GameStatus = 'FINISHED';
                                        } else {
                                            gdata.GameStatus = 'STARTED';
                                        }
                                        gdata[b.name].distance = parseFloat(p.value) + 0.5;
                                    }
                                }
                            });
                            return gdata;
                        }
                    }
                });
            }
        }
    }
    return gdata;
}
