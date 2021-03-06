import { createSlice } from '@reduxjs/toolkit'

 // 03.03.2021 still no API, only hardcode for presentation components

 export const dialogsSlice = createSlice({
   name: 'dialogs',
   initialState: {
    dialogs: [
      {
        "id": 1,
        "userName": "Диоген",
        "messages": [
          {
            "id": 1,
            "date": "20.08.2021",
            "time": "15:45",
            "text": "Hello"
          },
          {
            "id": 2,
            "date": "04.10.2021",
            "time": "09:12",
            "text": "How are you?"
          },
          {
            "id": 3,
            "date": "11.12.2021",
            "time": "23:18",
            "text": "Where are all people?"
          },
        ]
      },
      {
        "id": 2,
        "userName": "Аристотель",
        "messages": [
          {
            "id": 1,
            "date": "06.03.2021",
            "time": "19:20",
            "text": "Boring..."
          },
          {
            "id": 2,
            "date": "15.07.2021",
            "time": "05:31",
            "text": "Still boring"
          },
          {
            "id": 3,
            "date": "08.09.2021",
            "time": "11:54",
            "text": "You kill me ... bang! bang!"
          },
        ]
      },
      {
        "id": 3,
        "userName": "Плутарх",
        "messages": [
          {
            "id": 1,
            "date": "01.02.2021",
            "time": "14:00",
            "text": "Skyrim for nords!"
          },
          {
            "id": 2,
            "date": "05.09.2021",
            "time": "18:46",
            "text": "damn brothers of the storm"
          },
        ]
      },
      {
        "id": 4,
        "userName": "Сократ",
        "messages": [
          {
            "id": 1,
            "date": "12.04.2021",
            "time": "00:18",
            "text": "spoon for mom"
          },
          {
            "id": 2,
            "date": "19.09.2021",
            "time": "08:34",
            "text": "spoon for dad"
          },
          {
            "id": 3,
            "date": "03.11.2021",
            "time": "20:02",
            "text": "a spoonful for Ner'zhul!"
          },
        ]
      },
    ]
  },
  reducers: {
    addDialog: (state, action) => {
      state.dialogs.push(action.payload)
    }
  }
 })


export const { addDialog } = dialogsSlice.actions

export default dialogsSlice.reducer