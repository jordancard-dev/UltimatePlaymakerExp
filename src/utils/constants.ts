

export const AbreviationsForFootballPositions = {
    quarterback: 'QB',
    runningBack1: 'RB1',
    runningBack2: 'RB2',
    wideReceiver1: 'WR1',
    wideReceiver2: 'WR2',
    tightEnd: 'TE',
    fullback: 'FB',
    rightTackle: 'RT',
    leftTackle: 'LT',
    center: 'C',
    leftGuard: 'LG',
    rightGuard: 'RG',
};
export const AmericanFootballOfensiveFormations: FootballFormation[] = [
    {
        id: 1,
        name: 'I-Formation',
        description: 'A traditional formation with one quarterback and two running backs.',
        initialPlayersPositions: {
            center: { x: 150, y: 70 },
            leftGuard: { x: 135, y: 70 },
            rightGuard: { x: 160, y: 70 },
            rightTackle: { x: 180, y: 70 },
            leftTackle: { x: 120, y: 70 },
            tightEnd: { x: 195, y: 70 },
            quarterback: { x: 145, y: 80 },
            runningBack1: { x: 145, y: 95 },
            runningBack2: { x: 145, y: 105 },
            wideReceiver1: { x: 50, y: 70 },
            wideReceiver2: { x: 230, y: 80 },
        }
    },
    {
        id: 2,
        name: '4-4-2',
        description:
            'A classic formation with four defenders, four midfielders, and two forwards.',
        initialPlayersPositions: {
            goalkeeper: { x: 50, y: 10 },
            leftBack: { x: 30, y: 20 },
            rightBack: { x: 70, y: 20 },
            centerBack1: { x: 40, y: 20 },
            centerBack2: { x: 60, y: 20 },
            leftMidfielder1: { x: 25, y: 40 },
            leftMidfielder2: { x: 35, y: 40 },
            rightMidfielder1: { x: 65, y: 40 },
            rightMidfielder2: { x: 75, y: 40 },
            forward1: { x: 45, y: 60 },
            forward2: { x: 55, y: 60 }
        }
    }
]

export const AmericanFootballDefensiveFormations: FootballFormation[] = [
    {
        id: 1,
        name: '3-4 Defense',
        description: 'A defensive formation with three defensive linemen and four linebackers.',
        initialPlayersPositions: {
            leftDefensiveEnd: { x: 120, y: 70 },
            rightDefensiveEnd: { x: 180, y: 70 },
            noseTackle: { x: 150, y: 70 },
            leftOutsideLinebacker: { x: 100, y: 90 },
            rightOutsideLinebacker: { x: 200, y: 90 },
            insideLinebacker1: { x: 130, y: 90 },
            insideLinebacker2: { x: 170, y: 90 },
            cornerback1: { x: 80, y: 50 },
            cornerback2: { x: 220, y: 50 },
            freeSafety: { x: 150, y: 50 },
            strongSafety: { x: 150, y: 30 }
        }
    },
    {
        id: 2,
        name: '4-3 Defense',
        description: 'A defensive formation with four defensive linemen and three linebackers.',
        initialPlayersPositions: {
            leftDefensiveEnd: { x: 120, y: 70 },
            rightDefensiveEnd: { x: 180, y: 70 },
            defensiveTackle1: { x: 150, y: 70 },
            defensiveTackle2: { x: 150, y: 90 },
            leftOutsideLinebacker: { x: 100, y: 90 },
            rightOutsideLinebacker: { x: 200, y: 90 },
            middleLinebacker: { x: 150, y: 90 },
            cornerback1: { x: 80, y: 50 },
            cornerback2: { x: 220, y: 50 },
            freeSafety: { x: 150, y: 50 },
            strongSafety: { x: 150, y: 30 }
        }
    }
];

export const SupportedSports: Sport[] = [
    {
        id: 1,
        name: 'American Football',
        description: 'A team sport played with an oval ball on a rectangular field with goalposts at each end.',
        isActive: true
    },
    {
        id: 2,
        name: 'Baseball',
        description: 'A bat-and-ball game played between two teams of nine players each on a diamond-shaped field.',
        isActive: true
    },
    {
        id: 3,
        name: 'Football',
        description: 'A team sport played with a spherical ball on a rectangular field with goalposts at each end.',
        isActive: true
    },
    {
        id: 4,
        name: 'Basketball',
        description: 'A team sport played on a rectangular court where two teams try to score points by shooting a ball through the opponent\'s hoop.',
        isActive: true
    }
];