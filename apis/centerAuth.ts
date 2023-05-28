import axios from "axios";

const CenterSchoolsAuthConfig = axios.create({
	baseURL: "https://localhost:8000/api/1.1",
});
