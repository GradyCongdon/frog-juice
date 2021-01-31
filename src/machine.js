import { Machine } from 'xstate';

const spellsStates = {
  initial: 'self',
  states: {
    self: {
      on: {
        SELF: 'self',
        TABLE: 'table',
      }
    },
    table: {
      on: {
        TABLE: 'table',
        OPPONENTS: 'opponents',
      }
    },
    opponents: {
      on: {
        OPPONENTS: 'opponents',
        END: 'end',
      }
    },
    end: {type: 'final'},
  }
}

const blackCatStates = {
  initial: 'start',
  states: {
    start: {
      on: {
        SELECT: 'end',
        SKIP: 'end',
      }
    },
    end: { type: 'final'},
  }
}

const captureStates = {
  initial: 'start',
  states: {
    start: {
      on: {
        SELECT: 'start',
        END: 'end',
      }
    },
    end: { type: 'final'},
  }
}

const witchStates = {
  initial: 'start',
  states: {
    start: {
      on: {
        WITCH: 'end',
        WASH: 'end',
      }
    },
    end: { type: 'final'}
  }
}

const actionStates = {
  initial: 'start',
  states: {
    start: {
      on: {
        CAPTURE: 'capture',
        BLACK_CAT: 'black_cat',
        WITCH: 'witch',
        SPELL: 'spell',
        PASS: 'pass',
      },
    },
    capture: {
      type: 'final',
      ...captureStates,
    },
    black_cat: {
      type: 'final',
      ...blackCatStates,
    },
    witch: {
      type: 'final',
      ...witchStates,
    },
    spell: { type: 'final'},
    pass: { type: 'final'},
  }
};

const turnStates = {
  initial: 'start',
  states: {
    start: {
      on: {
        DRAW: 'start',
        ACTION: 'action',
      }
    },
    action: {
      on: {
        SPELLS: 'spells',
      },
      ...actionStates,
    },
    spells: {
      ...spellsStates,
      on: {
        END: 'discard',
      }
    },
    discard: {
      on: {
        DISCARD: 'done',
        SKIP: 'done',
      },
    },
    done: { type: 'final'},
  }
}

export const gameMachine = Machine({
  id: 'game',
  initial: 'start',
  states: {
    start: {
      on: {
        TURN: 'turn',
      }
    },
    turn: {
      ...turnStates,
      on: {
        END: 'end',
      },
    },
    end: {
      type: 'final'
    }
  }
});