import { PayloadAction } from '@reduxjs/toolkit';
export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}
export declare const authSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    setCredentials: (state: import("immer").WritableDraft<AuthState>, action: PayloadAction<{
        access_token: string;
    }>) => void;
    logout: (state: import("immer").WritableDraft<AuthState>) => void;
}, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<AuthState>>;
export declare const setCredentials: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<{
    access_token: string;
}, "auth/setCredentials">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">;
declare const _default: import("redux").Reducer<AuthState>;
export default _default;
