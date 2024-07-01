import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const login = ({ email, password }) => async (dispatch) => {
  try {
    // Replace with actual API call to authenticate user
    const response = await fetch('https://music-player-mel3.onrender.com/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const { token } = await response.json();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: { error: error.message },
    });
  }
};
