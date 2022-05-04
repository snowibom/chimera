import { Injectable } from "@angular/core";

export interface IMobs {
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

export class MobsService {
    getMobs(): IMobs[] {
        return [
            {
                "Name": "Goblin",
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
                "Name": "Goo",
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
                "Name": "Beetle",
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
                "Name": "Wolf",
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
                "Name": "Blight",
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
                "Name": "Dodo",
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
                "Name": "Crayfish",
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
                "Name": "Ciceda",
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
                "Name": "Shroom",
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
                "Name": "Spirit",
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
                "Name": "Elk",
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
                "Name": "Demihuman",
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
                "Name": "Lizard",
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
                "Name": "Sea Angel",
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
                "Name": "Corvid",
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
                "Name": "Wurm",
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
                "Name": "Manta",
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
                "Name": "Behemoth",
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
                "Name": "Strix",
                "Mv": 3,
                "Jm": 3,
                "Str": 4,
                "End": 3,
                "Int": 5,
                "Wil": 3,
                "Dex": 0,
                "Agi": 0
            },            {
                "Name": "Dryad",
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
                "Name": "Wyvern",
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
                "Name": "Golem",
                "Mv": 4,
                "Jm": 4,
                "Str": 5,
                "End": 5,
                "Int": 2,
                "Wil": 0,
                "Dex": 3,
                "Agi": 3
            },
        ]
    }
}