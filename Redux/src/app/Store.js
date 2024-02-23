import {configureStore} from 'react-redux';
import TodoReducer from '../feature/Todo/TodoSlice';

export const store = configureStore({
    reducer:TodoReducer
});