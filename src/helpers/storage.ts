import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const setItem = async (key: string, value: any) => {
    await storage.set(key, value);
};

export const getItem = (key: string) => {
    return storage.getString(key);
};

export const removeItem = async (key: string) => {
    await storage.delete(key);
};

export const getAuthStatus = (): boolean | undefined => {
    return storage.getBoolean('token');
};
