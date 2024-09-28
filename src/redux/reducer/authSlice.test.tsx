import authReducer from './authSlice';
import { login, logout } from './authSlice';

describe('auth slice', () => {
  describe('login action', () => {
    it('should set isAuthenticated to true and store token', () => {
      const initialState = authReducer(undefined, { type: '' });
      const newState = authReducer(initialState, login('QpwL5tke4Pnpja7X4'));
      expect(newState.isAuthenticated).toBe(true);
      expect(newState.token).toBe('QpwL5tke4Pnpja7X4');
    });
  });

  describe('logout action', () => {
    it('should set isAuthenticated to false and clear token', () => {
      const initialState = authReducer(undefined, { type: '' });
      const loggedState = authReducer(initialState, login('QpwL5tke4Pnpja7X4'));
      const newState = authReducer(loggedState, logout());
      expect(newState.isAuthenticated) });
    })
})
