const data = {
    name: 'Lebron James',
    age: 31,
    isMvp: true,
    isCoach: false,
    car: null,
    address: {
        country: 'USA',
        province: 'LosAngle',
    },
    mvpYears: [2012, '2013', 2014, [2015, 2016]],
    honour: {
        teams: ['Heats', 'Lakers', 'Cels'],
        mvpCount: 6,
        fmvpCount: 4,
        championCount: 4,
        appraise: {
            mvp: 'Most Valuable Player',
            fmvp: 'Finals Most Valuable Player',
            champion: 'Champion',
        },
    },
    say: () => {
        console.log('I am the best player in the world!');
    },
};

// eslint-disable-next-line import/no-default-export
export default data;
