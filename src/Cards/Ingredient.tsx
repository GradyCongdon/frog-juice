import React from 'react';
import './Card.scss';
import './themes.css';

interface IngredientProps {
    name: string,
    value: number,
    actions: string[]
    theme: string,
}


const cls = (x: string[]) => x.join(' ');
const kabob = (x: string) => x.split(' ').map(x => x.toLowerCase()).join('-');

export const Ingredient = ({ name, value, actions, theme }: IngredientProps) => {
    const $actions = actions.map(a => <button onClick={() => console.log(a)}>{a}</button>);
    const classes = cls([
        'card',
        kabob(name),
        theme,
    ]);
    return (
        <article className={classes}>
            <header>
                <h2 className="name">{name}</h2>
                <h3 className="value">{value}</h3>
            </header>
            <nav>
                {$actions}
            </nav>
        </article>
    )
}