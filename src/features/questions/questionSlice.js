import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";

const initialState = {
   questionData:[],
   deleteOne:[],
  
    isLoading: false,
    error: null,
  };
  
  
   
  const getAllquestions = createAsyncThunk('get/question', async (_, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          '/api/questions'
        //   , {
        //     headers: {
        //         Authorization:` Bearer ${token}` // Include token in the request headers
        //     }
        // }
        );
          console.log(response);
          console.log(response.data);
        return response.data;
      } catch (error) {
        return error
      }
    });

    // const getArticleCategoryById = createAsyncThunk('get/category-id', async (id, thunkAPI) => {
    //     try {
    //       const response = await baseUrl.post(
    //         `Articles-Categories/Get-Articles-From-Category?id=${id}`);
    //         console.log(response.data);
    //       return response.data;
    //     } catch (error) {
    //       return error
    //     }
    //   });
    const removeOneQuestion = createAsyncThunk('del/OneQuestion', async (token, thunkAPI) => {
        try {
          const response = await baseUrl.delete(
            `/api/questions/2`
            ,        { headers: { Authorization: `Bearer ${token}` } 
        } 
            );
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });
  
  



    const questionSlice = createSlice({
        name: 'question',
      
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder
            .addCase(getAllquestions.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getAllquestions.fulfilled, (state, action) => {
              state.questionData = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getAllquestions.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
            .addCase(removeOneQuestion.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(removeOneQuestion.fulfilled, (state, action) => {
              state.deleteOne = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(removeOneQuestion.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
  
           

            }}
            );
      export { getAllquestions , removeOneQuestion };
      
      export default questionSlice.reducer;