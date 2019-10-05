interface Person {
    name: string,
    lastName: string
}

function clap (person: Person) {
    console.log(`The person ${person.name} ${person.lastName} is clapping`)
}

clap({
    name: 'Asdrubal',
    lastName: 'Suarez'
})