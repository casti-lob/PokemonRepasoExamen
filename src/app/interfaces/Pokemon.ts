export interface Pokemon {
    id:          number;
    name:        Name;
    type:        string[];
    base:        Base;
    species:     string;
    description: string;
    evolution:   Evolution;
    profile:     Profile;
    image:       Image;
}

export interface Base {
    HP:            number;
    Attack:        number;
    Defense:       number;
    "Sp. Attack":  number;
    "Sp. Defense": number;
    Speed:         number;
}

export interface Evolution {
    next: Array<string[]>;
}

export interface Image {
    sprite:    string;
    thumbnail: string;
    hires:     string;
}

export interface Name {
    english:  string;
    japanese: string;
    chinese:  string;
    french:   string;
}

export interface Profile {
    height:  string;
    weight:  string;
    egg:     string[];
    ability: Array<string[]>;
    gender:  string;
}
