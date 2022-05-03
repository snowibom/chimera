import { Injectable } from "@angular/core";

export interface IJobs {
    Name: string,
    Mv: number,
    Jm: number,
    Str: number,
    End: number,
    Int: number,
    Wil: number,
    Dex: number,
    Agi: number
}

@Injectable({
    providedIn: 'root'
})

export class JobsService {
    getJobs(): IJobs[] {
        return [
            {
                "Name": "Courier",
                "Mv": 4,
                "Jm": 3,
                "Str": 2,
                "End": 1,
                "Int": 0,
                "Wil": 0,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Artisan",
                "Mv": 3,
                "Jm": 3,
                "Str": 0,
                "End": 1,
                "Int": 0,
                "Wil": 1,
                "Dex": 0,
                "Agi": 1
            },
            {
                "Name": "Medic",
                "Mv": 3,
                "Jm": 3,
                "Str": 0,
                "End": 1,
                "Int": 0,
                "Wil": 2,
                "Dex": 0,
                "Agi": 2
            },
            {
                "Name": "Hunter",
                "Mv": 3,
                "Jm": 3,
                "Str": 2,
                "End": 0,
                "Int": 0,
                "Wil": 0,
                "Dex": 2,
                "Agi": 1
            },
            {
                "Name": "Fighter",
                "Mv": 3,
                "Jm": 3,
                "Str": 3,
                "End": 2,
                "Int": 0,
                "Wil": 0,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Scientist",
                "Mv": 3,
                "Jm": 3,
                "Str": -2,
                "End": 0,
                "Int": 5,
                "Wil": 2,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Counselor",
                "Mv": 3,
                "Jm": 3,
                "Str": 0,
                "End": 1,
                "Int": 3,
                "Wil": 3,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Mercenary",
                "Mv": 4,
                "Jm": 4,
                "Str": 2,
                "End": 0,
                "Int": 0,
                "Wil": 0,
                "Dex": 3,
                "Agi": 2
            },
            {
                "Name": "Monk",
                "Mv": 3,
                "Jm": 4,
                "Str": 3,
                "End": 4,
                "Int": -2,
                "Wil": -1,
                "Dex": 1,
                "Agi": 2
            },
            {
                "Name": "Naturalist",
                "Mv": 3,
                "Jm": 3,
                "Str": 0,
                "End": 1,
                "Int": 4,
                "Wil": 3,
                "Dex": -1,
                "Agi": 0
            },
            {
                "Name": "Occultist",
                "Mv": 3,
                "Jm": 3,
                "Str": 2,
                "End": 3,
                "Int": -1,
                "Wil": 5,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Tactician",
                "Mv": 3,
                "Jm": 3,
                "Str": 1,
                "End": 2,
                "Int": 4,
                "Wil": 2,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Knight",
                "Mv": 3,
                "Jm": 3,
                "Str": 4,
                "End": 4,
                "Int": -2,
                "Wil": 0,
                "Dex": 3,
                "Agi": 0
            },
            {
                "Name": "Outlander",
                "Mv": 4,
                "Jm": 3,
                "Str": 3,
                "End": 3,
                "Int": 0,
                "Wil": 3,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Astrologist",
                "Mv": 3,
                "Jm": 3,
                "Str": 0,
                "End": 2,
                "Int": 5,
                "Wil": 2,
                "Dex": 0,
                "Agi": 3
            },
            {
                "Name": "Assassin",
                "Mv": 4,
                "Jm": 4,
                "Str": 3,
                "End": 2,
                "Int": -1,
                "Wil": 0,
                "Dex": 4,
                "Agi": 4
            },
            {
                "Name": "Engineer",
                "Mv": 3,
                "Jm": 3,
                "Str": 4,
                "End": 2,
                "Int": 3,
                "Wil": 0,
                "Dex": 3,
                "Agi": 0
            },
            {
                "Name": "Performer",
                "Mv": 4,
                "Jm": 4,
                "Str": 3,
                "End": 1,
                "Int": 1,
                "Wil": 3,
                "Dex": 3,
                "Agi": 4
            },
            {
                "Name": "Psychic",
                "Mv": 3,
                "Jm": 3,
                "Str": 1,
                "End": 1,
                "Int": 4,
                "Wil": 4,
                "Dex": 4,
                "Agi": 1
            },
            {
                "Name": "Paladin",
                "Mv": 3,
                "Jm": 3,
                "Str": 3,
                "End": 3,
                "Int": 6,
                "Wil": 3,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Judge",
                "Mv": 3,
                "Jm": 3,
                "Str": 4,
                "End": 3,
                "Int": 5,
                "Wil": 3,
                "Dex": 0,
                "Agi": 0
            },
            {
                "Name": "Automaton",
                "Mv": 4,
                "Jm": 4,
                "Str": 5,
                "End": 5,
                "Int": 2,
                "Wil": 0,
                "Dex": 3,
                "Agi": 3
            }
        ]
    }
}