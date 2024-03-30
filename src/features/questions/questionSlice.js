import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";

const initialState = {
   questionData:[],
   deleteOne:[],
   createQuestion:[],
   editQuestion:[],
  
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

  
    const removeOneQuestion = createAsyncThunk('del/OneQuestion-id', async (id, thunkAPI) => {
        try {
          const response = await baseUrl.delete(
            `/api/questions/${id}`
        //     ,        { headers: { Authorization: `Bearer ${token}` } 
        // } 
            );
            console.log(response);
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });
  
  
      const createOneQuestion = createAsyncThunk('create/question', async (formData, thunkAPI) => {
        try {
          const response = await baseUrl.post(
            `/api/questions`,
            formData
            // , 
            // { headers: {
            //         Authorization: `Bearer ${token}` // Include token in the request headers
            //     }
            // }
            );
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });

      const EditOneQuestion = createAsyncThunk('edit/question', async ({formData , id}, thunkAPI) => {
        try {
          const response = await baseUrl.put(
            `/api/questions/${id}`,
            formData
            // , 
            // { headers: {
            //         Authorization: `Bearer ${token}` // Include token in the request headers
            //     }
            // }
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


            .addCase(createOneQuestion.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(createOneQuestion.fulfilled, (state, action) => {
              state.createQuestion = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(createOneQuestion.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            

            .addCase(EditOneQuestion.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(EditOneQuestion.fulfilled, (state, action) => {
              state.editQuestion = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(EditOneQuestion.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
  
           

            }}
            );
      export { getAllquestions , removeOneQuestion , createOneQuestion , EditOneQuestion };
      
      export default questionSlice.reducer;