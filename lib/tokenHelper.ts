// tokenHelper.ts
//$$$ lib/tokenHelper.ts       Will now update the token in localStorage and emits a custom event to notify other components (we are using it so that over nav bar profile component can be aware of any change in login state and and can update it self accordingly, previously it wasn't needed as nav wasn't in layout and useEffect( , []) was fine). it's instead of 'localStorage.setItem("token", data.token);' in auth/signin .tsx
//updateToken()  is now called by all login and logout functions
 
export const updateToken = (newToken: string | null) => {
  if (newToken) {
    localStorage.setItem("token", newToken);
  } else {
    localStorage.removeItem("token");
  }
  // Emit custom event to notify token changes
  window.dispatchEvent(new Event("tokenUpdated"));
};
  