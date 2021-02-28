import React from "react";
import './Cards.scss';
import { Ingredient } from "./Ingredient";

interface CardProps {
    name: string,
    value: number,
    actions: string[],
    theme?: string,
}

const actions = ['play', 'draw'];

const ShrinkingBrew = {
    name: 'Shrinking Brew',
    value: 1,
    actions: actions,
    theme: 'mud-kicks',
};

const Bats = {
    name: 'Bats',
    value: 2,
    actions: actions,
};

const Toads = {
    name: 'Toads',
    value: 3,
    actions: actions,
};

const Newts = {
    value: 4,
    name: 'Newts',
    actions: actions,
}

const Mice = {
    value: 5,
    name: 'Mice',
    actions: actions,
}

const FrogJuice = {
    value: 6,
    name: 'Frog Juice',
    actions: actions,
    theme: 'forty-niners',
}

const Toadstools = {
    value: 7,
    name: 'Toadstools',
    actions: actions,
    theme: 'eighty',
}

const UnicornHorn = {
    value: 8,
    name: 'Unicorn Horn',
    actions: actions,
}

const MonkeyPowder = {
    value: 9,
    name: 'Monkey Powder',
    actions: actions,
}

const StarAndMoonDust = {
    value: 10,
    name: 'Star And Moon Dust',
    actions: actions,
}

const DeadlyNightshade = {
    value: 11,
    name: 'Deadly Nightshade',
    actions: actions,
}

const Prince = {
    value: 12,
    name: 'Prince',
    actions: actions,
}

const FairMaid = {
    value: 12,
    name: 'Fair Maid',
    actions: actions,
}

const cards = [
    ShrinkingBrew,
    Bats,
    Toads,
    Newts,
    Mice,
    FrogJuice,
    Toadstools,
    UnicornHorn,
    MonkeyPowder,
    StarAndMoonDust,
    DeadlyNightshade,
    FairMaid,
    Prince
]

const themes = [
    'moonlight',
    'hot-iron',
    'swimming-pool',
    'garden-dusk',
    'orange-slate',
    'cuban-blue',
    'utah',
    'bananas',
    'melon-soup',
    'creamsicle',
    'rage',
    'sunset',
    'toy-block',
    // 'gold-marble',
    // 'red-slate',
];

export function Cards() {
    const $cards = cards.map((c: CardProps, i) => (
        <Ingredient
            name={c.name}
            value={c.value}
            actions={c.actions}
            theme={c.theme || themes[i]}
        />
    ));
    return (
        <section className="cards" >
            { $cards}
        </section>
    );
}