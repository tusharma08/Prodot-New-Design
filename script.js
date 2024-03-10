// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import './App.css';
// import Post from "./Post";
// import Header from "./Header";
// import {Route, Routes} from "react-router-dom";
// import Layout from "./Layout";
// import IndexPage from "./pages/IndexPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import {UserContextProvider} from "./UserContext";
// import CreatePost from "./pages/CreatePost";
// import PostPage from "./pages/PostPage";
// import EditPost from "./pages/EditPost";

// function App() {
//   return (
//     <UserContextProvider>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<IndexPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/post/:id" element={<PostPage />} />
//           <Route path="/edit/:id" element={<EditPost />} />
//         </Route>
//       </Routes>
//     </UserContextProvider>
//   );
// }

// export default App;


// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

