import { initializeApp } from 'firebase/app';

const initFirebase = () => {
	const firebaseConfig = {
		apiKey: 'AIzaSyDdTPJopoWU5Sqe1wPe7gW_yWUreDNZJuo',
		authDomain: 'car-sharing-df1d7.firebaseapp.com',
		projectId: 'car-sharing-df1d7',
		storageBucket: 'car-sharing-df1d7.appspot.com',
		messagingSenderId: '412716492961',
		appId: '1:412716492961:web:a1b42c3d4573e2d1e3e8e0',
		measurementId: 'G-76K1E6Z6K3'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	return app;
};

export default initFirebase;
