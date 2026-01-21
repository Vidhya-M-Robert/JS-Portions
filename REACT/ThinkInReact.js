// 4 Criteria for splitting a UI into components :
    // 1)Logical seperation of content/layout
    // 2)Reusability  => if it can be reused or need to reuse
    // 3)Responsibilities / complexity  => doing too many different things / rely on too many props / too many pieces of state or effects / including jsx, too complex/ confusing
    // 4)Personal coding style


// General Guideline
// Creating a new component creates a new abstraction
// Name a component according to what it does or what it displays
//Never declare a new component inside another component
// Co-locate related components inside the same file

// Component Categories
// 1) Stateless / presentational components
    //No state 
    //Can receive props and simply present received data or other content
    //Usually small and reusable

//Stateful Components
    //Have state

// Structural Components
    //Pages,layouts, or screens of the app
    //Result of composition
    //Can be huge and non-reusable

// Prop drilling means pass some prop through several nested child components in order to get that data into some deeply nested component