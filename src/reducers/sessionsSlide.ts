import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Session = {
    id: string;
    title: string;
    summary: string;
    // description: string;
    date: string;
    // image: string;
    // duration: number;
  };

  export type SessionsState = {
    upcomingSessions: Session[]
  }

  const initialState: SessionsState ={
    upcomingSessions: []
  }

  const sessionSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        bookSession(state, action: PayloadAction<{id:string; title:string; summary:string; date:string;}>){
            if(state.upcomingSessions.some(session => session.id === action.payload.id)){
                return state
            }else{
                state.upcomingSessions.push(action.payload);
            }
            
        },
        cancelSession(state, action: PayloadAction<{id:string}>){
            state.upcomingSessions.filter((session) => session.id !== action.payload.id)
        }
    }
  });

  export default sessionSlice.reducer;
  export const { bookSession, cancelSession } = sessionSlice.actions;