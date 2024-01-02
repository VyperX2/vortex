export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		async authorized({ auth, request }: any) {
			console.log(auth);
			return true;
		},
	},
};
