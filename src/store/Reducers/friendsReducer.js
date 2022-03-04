// create function for reciving followed users from API, it will be "friends"

const initialState = {
  friends: [
    {
      "id": 1,
      "name": "Borsi Bullet Untoucher"
    },
    {
      "id": 2,
      "name": "Jackie Chan"
    },
    {
      "id": 3,
      "name": "Leonid from Sparta"
    },
    {
      "id": 4,
      "name": "Jean-Claude Van Damme"
    },
    {
      "id": 5,
      "name": "Steven Seagal"
    },
    {
      "id": 6,
      "name": "Chuck Norris"
    },
  ]
}

export const friendsReducer = (state = initialState, action) => {
  return state
}