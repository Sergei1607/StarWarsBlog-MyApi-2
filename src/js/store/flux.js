const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			characters: [],
			favoritesplanets: [],
			favoritescharacters: [],
			numberfavorites: 0,
			planetsindex: [],
			characterindex: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://3000-yellow-horse-zyw3t8nq.ws-us03.gitpod.io/planets", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ planets: data }))
					.catch(error => console.log("error", error));

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://3000-yellow-horse-zyw3t8nq.ws-us03.gitpod.io/characters", requestOptions)
					.then(res2 => res2.json())
					.then(data2 => setStore({ characters: data2 }))
					.catch(err2 => console.error(err2));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			setlistFavoritesPlanets(val) {
				const store = getStore();
				setStore({ favoritesplanets: [...store.favoritesplanets, val] });
			},

			setlistFavoritesCharacters(val) {
				const store = getStore();
				setStore({ favoritescharacters: [...store.favoritescharacters, val] });
			},

			removelistFavoritesPlanets(val) {
				const store = getStore();
				setStore({
					favoritesplanets: store.favoritesplanets.filter(item => {
						return item !== val.toString();
					})
				});
			},

			removelistFavoritesCharacters(val) {
				const store = getStore();
				setStore({
					favoritescharacters: store.favoritescharacters.filter(item => {
						return item !== val.toString();
					})
				});
			},
			sumFavorites() {
				const store = getStore();
				setStore({ numberfavorites: store.numberfavorites + 1 });
			},

			lessFavorites() {
				const store = getStore();
				setStore({ numberfavorites: store.numberfavorites - 1 });
			},

			setplanetindex(val) {
				const store = getStore();
				setStore({ planetsindex: [...store.planetsindex, val] });
			},

			removePlanetsindex(val) {
				const store = getStore();
				setStore({
					planetsindex: store.planetsindex.filter(item => {
						return item !== val;
					})
				});
			},

			setcharacterindex(val) {
				const store = getStore();
				setStore({ characterindex: [...store.characterindex, val] });
			},

			removecharacterindex(val) {
				const store = getStore();
				setStore({
					characterindex: store.characterindex.filter(item => {
						return item !== val;
					})
				});
			},
			loginUser(email, password) {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-yellow-horse-zyw3t8nq.ws-us03.gitpod.io/login", requestOptions)
					.then(response => response.json())
					.then(result => sessionStorage.setItem("token", result.token))
					.catch(error => console.log("error", error));
			},

			getfavorites() {
				const store = getStore();
				let counter = 0;
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));

				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://3000-yellow-horse-zyw3t8nq.ws-us03.gitpod.io/getfavorites", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ favorites: result }))
					.then(console.log(store.favorites))
					.catch(error => console.log("error", error));
			},
			deletefavoritefromdatabase(index) {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					planetid: index + 1
				});

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-yellow-horse-zyw3t8nq.ws-us03.gitpod.io/deletefavoriteplanet", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
