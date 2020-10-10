import migrateProject from "../../src/lib/project/migrateProject";

test("should migrate conditional events from 1.0.0 to 2.0.0", () => {
  const oldProject = {
    _version: "1",
    scenes: [
      {
        actors: [],
        triggers: [],
        collisions: [],
        script: [
          {
            command: "EVENT_IF_TRUE",
            true: [
              {
                command: "EVENT_TEXT",
                args: {
                  text: "Hello"
                }
              }
            ],
            false: [
              {
                command: "EVENT_TEXT",
                args: {
                  text: "World"
                }
              }
            ]
          }
        ]
      }
    ],
    backgrounds: [],
  };
  const newProject = JSON.parse(JSON.stringify(migrateProject(oldProject)));
  expect(newProject).toEqual({
    _version: "2.0.0",
    _release: "3",
    scenes: [
      {
        width: 32,
        height: 32,
        actors: [],
        triggers: [],
        collisions: [],
        script: [
          {
            command: "EVENT_IF_TRUE",
            children: {
              true: [
                {
                  command: "EVENT_TEXT",
                  args: {
                    text: "Hello"
                  }
                }
              ],
              false: [
                {
                  command: "EVENT_TEXT",
                  args: {
                    text: "World"
                  }
                }
              ]
            },
   
          }
        ],
        playerHit1Script: [],
        playerHit2Script: [],
        playerHit3Script: []
      },
    ],
    backgrounds: [],
    customEvents: []
  });
});

test("should migrate conditional events from 1.2.0 to 2.0.0", () => {
  const oldProject = {
    _version: "1.2.0",
    scenes: [
      {
        actors: [],
        triggers: [],
        collisions: [],
        script: [
          {
            command: "EVENT_IF_TRUE",
            children: {
              true: [
                {
                  command: "EVENT_TEXT",
                  args: {
                    text: "Hello"
                  }
                }
              ],
              false: [
                {
                  command: "EVENT_TEXT",
                  args: {
                    text: "World"
                  }
                }
              ]
            }
          }
        ],
      }
    ],
    backgrounds: []
  };
  const newProject = JSON.parse(JSON.stringify(migrateProject(oldProject)));
  expect(newProject).toEqual({
    _version: "2.0.0",
    _release: "3",
    scenes: [
      {
        width: 32,
        height: 32,        
        actors: [],
        triggers: [],
        collisions: [],
        script: [
          {
            command: "EVENT_IF_TRUE",
            children: {
              true: [
                {
                  command: "EVENT_TEXT",
                  args: {
                    text: "Hello"
                  }
                }
              ],
              false: [
                {
                  command: "EVENT_TEXT",
                  args: {
                    text: "World"
                  }
                }
              ]
            }
          }
        ],
        playerHit1Script: [],
        playerHit2Script: [],
        playerHit3Script: []        
      }
    ],
    backgrounds: [],
    customEvents: []    
  });
});
