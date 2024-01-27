// Maps go here

var mapNo = 1;

var map1 = `                                                       +------------------------------------------------+
                                                       | XXXXX            X     XX          X   X       |
                                               ,       | X   XX    X       X  X  XX   XXX   XX  XX      +--------------------------------------------+
   .   ,                                   .     .     |      XX   XX   X     XX X XX X     XX XXX   X  +                  XX                 XX     |
              .        .               ,         ,     |      XX    X   X     XXX    XX   XX  XX     X          XX         XXXX      XXXXXX    XX    |
    ,      ,    ,                  .                   | XXXXX       X XXXXXXXX  XXXX              XXX  +      X                          XX   XXX   |
           .          .                                | X  XXX  XX   X  XX       X                     +---------------------------+  X   X  X      |
      .      .                  .    ,                 | X                                              |                           |  XXX    X      |
         ,             ,           .          ,        | X   X +-------------------------+---+ +---+----+                   , .     |    X           |
   .               .          ,            .           |       |                         |         |             ,      .  ,    ,   |   X    XX      |
     ,                     .      ,     ,        .     |       |         +---------+     |  X      |         .     .       .    .   |       XX       |
+-------------+------------------+-------------+   +---+--+ +--+---------+  TXXX   |     | X     XX|     ,         ,         .      |        X       |
|   X  .   .  | , X ,  .     X,. |       XX X  |   |   X                    XXXX   | ,   | X      X| .                   ,          |       XX       |
|  , ,  X ,   |  X.X.  ,  S  .,  | XXXXXXX  X  |   +---------------------+ XXXXX   |   . | X XX   X|                                |  XX        X   |
|   X X  P X  |.  X. X     X X . | X XX XXXXX  |   .    , .    ,         |XXXXXXX  |   , |  XX   XX|   ,                            |   X        XX  |
| X .    T    |  X ,X  X    X .X |XXXXXX  XXXX |      .      .           |  XXXX   |     |  X    X | .          ,                   |  XX       XX   |
+-------+  +--+--------+   +-------------+   +-+ ,      ,                |  XX     |     |XXX    XX|                                |                |
|     T     .        T         ,       T       |     ,     ,,     ,      |         |     |         |                        +-------+-------+ +------+--------+
|        ,    ,            .     .             +-------------------------+---+ +---+-----+---+ +---+---+              ,     |                                 |
|        .             ,         ,       .     |T           X          X    .    T      .          X   |          .     .   |   +---------------------------+ |
|          .       .                  ,    ,   +            XXX        XX,    ,      ,    , XXXX  XX   +      ,         ,   |   |                           | |
+---------+#+-+                       .               XX      X         X.           .      XXXXX XXX  #  .                 |   |   +--------------------+  + |
|  XX   XXX  X|      ,                  .      +     X XX                  .     T     .  XXXXXX    XX +                    |   |                        |    |
| X XX XX  XX |    .          ,     ,          +-------------------------+---+ +---+-------------------+    ,               |   |   +                  E |  + |
+-------------+--------------------------------+                         |         |  .   ,               .          ,      | . |   +--------------------+  | |
                  .   ,                                   .              | p%d p%d |             .        .               , |   +---------------------------+ |
      .    ,                 .        .               ,                  |         |   ,      ,    ,                  .     +---------------------------------+
         .         ,      ,    ,                  .                      | p%d p%d |          .         ,..
                          .          .                                   |         |     .      .   .  ,    ,      .    ,
       ,,     ,      .      .                  .    ,                    | p%d p%d |        ,          .    .         .
                        ,             ,           .                      |  T      |  .                  .       ,            .
                  .               .          ,            .              |   +-----+    ,            ,               ,     ,
                    ,                     .      ,     ,                 +---------+
`.split("\n");
var map2 = `                                                                                                 +---------------------+-----------+
                                                                                                 |                     |           |
                                                                                                 |  +------------+     +-----------+
                                                                                                 |                                 |
     +----------------+                                                                          |                          T      |
     |                |                                                                          |  +------------+                 |
     |                |                                                                          |                                 |
     |                +--------------------------------------------------------------------+----------------------------+          |
     |                                                                                     |     |                                 |
     |   E   S                                                                             |     |                                 |
     |                                                                                     v     v                      +----------+
     |                +-------------+   +----------------------+   +-------------+      T                               |
     |                |             |   |                      |   |             |         ^     ^                      |
     |                |             |   |                      |   |             |         |     |                      |
     +----------------+             |   |                      |   |             |         |     |                      |         +
                                    |   |                      |   |             +---------+-----+-------------+        |    X    |
                                    |   |                      |   |                                           |        |         |
              +--+--+--+--+--+--+---+   +----------------+ +---+   +--+--------------------------------------+ |        |  X   X  +---+
              |  |  |  |  |  |  |   |   |                | |          |                                      | |        +XXX  XXX X   XX  +-----------------+
              |  v  |  |  |  |  |   +> <+     +------+   | |          |                                      | |       +  XXXXXXXX     XXX|    +------------|
              |     |  |  |  |  |           +-+  ||  +-+ | |          |                                      | |       |    XXXXXX   T    |X   |           ||
              |     |  |  |  |  |           | |  ||  | | | |          +--------------------------------------+ |       |  X   X     +----------+     XX XX ||
              |     |  v  |  |  |           +-+  ++  +-+ | |                             T                   | |   X+--+                 X| X  |      X X  ||
              |     |     |  v  |            T|      |   | |                                                 | |  XX    X   +---------+XXX|XX  +------------|
              |     |     v     |           +-+      +-+ | |                                                 | |     X    V +XX      XX   X---------X-------+
              |     |           v           | | +--+ | | | |                                                 | |   T            ?   X
              | T   v                       +-+------+-+ | |                                                 | |X         X   X  + XX           X     X
              |                                          | +-----+ +-------+   +-----+ +-----+   +-----------+ | X  X   X   XXXXX|X XX     X
              +------------------------------------------+ |               |   |             |   |           | |   XX+       ? XX++ X X
                                                           |               |   |             |   +           | |  XXX+--+-+   XXX   XX           X
+-------------------------------------------------+        |      T        |   |             |       T V     | |        |    V     X
|                        XXXXXXXXXXXXXXXXX        |        |               |   |             |   +           | |        |      X  X
|                         XXXXXXXXXXXXXX          |        |               |   |           T |   |           | |        |  XXXX XX
|   +----------+         XXXXXXXXXXXXX            |        +---------------+---+-------------+---+-----------+ |        |XXX
|   |       I  |          X X XXXXXXX             |                                                            |        |XX
|   |          v        XX       XX XX            +------------------------------------------------------------+        |
|   |   T        T       X    T                       X           X  X     X    X     X           X                     |
|   |          ^           X                   X              X           X                   X               T         |
|   |          |                                X       X        X  X             X          X X   X                    |
|   +----------+                                  +---------------------------------------------------------------------+
|                                    X            |
|                                                 |
+-------------------------------------------------+
`.split("\n");

var mapArray = [map1];
var mapPortalDictionary = {
    1: {
        "23,151": [map2, 2] // formatted: [map object, map no]
    },
    2: {
        "9,9": [map1, 1]
    }
}

// Dialogue goes here

var dialogueObjects = {
    1: {
        // T ELEMENTS
        "15,9": `Amidst the rubble, you can see a defunct rover.`,
        "11,76": `A small plushie of a seal. You are unsure as to the power it may contain and what may hide, so you leave it alone.`,
        "17,6": `A sign that reads the following:<br>NAME: ROV17<br>CONDITION: UNDER MAINTENANCE<br>NOTES: See Incident VRF001#A451`,
        "17,21": `A sign that reads the following:<br>NAME: ROV18<br>CONDITION: NEEDS REPAIRS<br>NOTES: See Incident VRF001#A517`,
        "17,39": "A sign that reads the following:<br>NAME: ROV19<br>CONDITION: UNDER MAINTENANCE<br>NOTES: See Incident VRF001#A402",
        "19,48": "A sign that reads the following:<br>ROVER STATIONS A",
        "19,81": "A sign that reads the following:<br>CARGO AREA LWING",
        "22,81": "A sign that reads the following:<br>CAFETARIA AREA",
        "30,76": "A spilled liquid that seems to have not dried has been detected on the floor. The liquid is in the item database:<br>SAVORY APPETITE UNLOADING SUSTENANCE.<br>SAUS.",
        "23,151": `You find a crumpled paper with unintelligable writing.`,
        // # ELEMENTS
        "18,78": "",
        "21,11": "",
        "21,103": ""
    },
    2: {
        "26,16": `What seems to be a highly damaged garage. The halting barriers and scanning devices to your right are highly damaged.`,
        "30,66": `In the radiation lab, you can tell what eradicated life in this area. All forms of devices are clicking inside your suit.`,
        "32,91": `The weapons bay is almost completely empty. Not that you needed ammunition, but did they have that many dangers to face?`,
        "30,101": `"Please save us from this madness."`,
        "25,115": `The entire side of the wall has been completely destroyed. Blood and rubble stain the ground. What caused this?`,
        "36,17": `The elevator seems to be running on auxiliary power. A lever with a light above it is seen inside.`,
        "23,45": `It's a standard Worldsoc humvee. Extra armor plating, better engine, and a better turret on top.<br>It seemed to be under maintenance.`,
        "22,89": `Looked like a lab where samples of whatever needed to be tested on were put under the microscope.<br>It's wrecked.`,
        "11,88": `A double-sided security gate. It was just wide enough for you to pass through.<br>Not that it would matter, with the entire facility being decommissioned.`,
        "4,124": `The cafeteria was empty, left in the midst of a pizza Friday lunch.<br>It was rotting.`,
        "20,133": `The remnants of a Leopard 2A6 main battle tank. The turret was decapitated and set back on the engine of the tank.<br>Whatever caused this might still be around.`,
        "37,110": `The hallway stretches on for a while. Blood and corpses line the floor.`,
        "36,30": `An enormous mass of flesh, bodies, and carcasses; a mass grave.`,
        "36,8": `Hello, everyone.<br>Thanks for playing this little demo. It was really fun to make, if slightly annoying.<br>Huge thanks to Hellbie for helping me out and providing many of the internal code segments that make this thing work.<br>This will be updated, so if you liked it I recommend you keep it to check in later.<br>Thanks again,<br>NavyEOD_24.`,

        // BODIES
        "30,103": `A woman lies on the ground, her body cut 43 times. The entire top portion of her head was missing, eaten by a creature of some sorts.<br>Her mouth was stuck in an expression of pain.`,
        "24,122": `A male security guard wearing a standard uniform would be stuck against the wall, rebar piercing his chest.<br>His left arm was still hanging onto the metal.`,
        "30,125": `The body is unrecognizable, only an arm sticking out from underneath the concrete.`,

        //UNKNOWNS
        "25,128": `This creature was abhorrent to look at. The body didn't look like it could move at all.<br>Large, scythe-esque arms formed at the wrist and extended for meters.<br>It might even be able to pierce your armor.`,
        "28,125": `The mass of flesh looked more like a clump of faces and bodies rather than a collective, composed being.<br>It writhed and still flinched when you walked close to it, and you saw a pair of eyes look at your visor.<br>Without hesitation, you exterminated it.`
    }
}

// DO NOT CHANGE //

function findLoc(map, char) {
    var locations = [];
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == char) {
                locations.push(i + "," + j);
            }
        }
    }
    return locations;
}

function findLocArr(map, char) {
    var locations = [];
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == char) {
                locations.push([i, j]);
            }
        }
    }
    return locations;
}