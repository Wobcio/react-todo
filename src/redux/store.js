import { isCursorAtStart } from '@testing-library/user-event/dist/utils';
import { createStore } from 'redux';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import initialState from './initialState';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;
export const getColumnByList = ({ columns }, columnId) => columns
  .filter(column => column.listId === columnId);

export  const getAllLists = state => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearching = payload => ({type: 'UPDATE_SEARCHING', payload})
export const addList = payload => ({type: 'ADD_LIST', payload})

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN' :
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHING':
      return {...state, searchString: action.payload}
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;