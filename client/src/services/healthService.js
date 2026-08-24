import api from "./api";

export const checkServerHealth = async () => {
    const response = await api.get("/health");

    return response.data;
};