
/*
** findUserByUsername **

Write a function called ***findUserByUsername*** which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

// const users = [
//     { username: 'mlewis' },
//     { username: 'akagen' },
//     { username: 'msmith' }
// ];

function findUserByUsername(arr, value) {
    return arr.find(function (el) {
        return el.username === value
    })
}


/*
removeUser

Write a function called *** findUserByUsername *** which accepts an array of objects, each with a key of username, and a string.The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'jackalow') // undefined
*/

const users = [
    { username: 'mlewis' },
    { username: 'akagen' },
    { username: 'msmith' }
];

function removeUser(arr, value) {

    let idxNum = arr.findIndex((el) => {
        return el.username === value
    })

    if (idxNum === -1) {
        return undefined
    }

    return arr.splice(idxNum, 1)
}
