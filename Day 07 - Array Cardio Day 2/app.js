
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

   
  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19?

  

  const isAdult = people.some( person => (new Date()).getFullYear() - person.year >= 19);

  console.log({isAdult})

 //Array.prototype.every() // is everyone 19?

    const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19)

    console.log({allAdult})

    //Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const comment = comments.find( comments => comments.id === 823423)
    console.log(comment)

     // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    const commentWithID = comments.findIndex( comments => comments.id === 823423)
    console.log(commentWithID)

     // comments.splice(index, 1); 
     const newCommentWithID = [
       ... comments.slice(0, commentWithID),
       ... comments.slice(commentWithID + 1)
     ];