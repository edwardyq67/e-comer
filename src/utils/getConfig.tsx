const getConfig = (): { headers: { Authorization: string } } => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

export default getConfig;