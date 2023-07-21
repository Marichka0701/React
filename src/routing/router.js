import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AlbumsPage from "../pages/AlbumsPage/AlbumsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import Main from "../components/Main/Main";
import {MainRoutes} from "./MainRoutes/MainRoutes";
import PostPage from "../pages/PostPage/PostPage";

const router = createBrowserRouter([
    {
        path: MainRoutes.main,
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: MainRoutes.main,
                element: <Main />
            },
            {
                path: MainRoutes.albums,
                element: <AlbumsPage />
            },
            {
                path: MainRoutes.comments,
                element: <CommentsPage />,
            },
            {
                path: MainRoutes.todos,
                element: <TodosPage />
            },
            {
                path: MainRoutes.post,
                element: <PostPage />
            },
        ]
    }
])

export {
    router,
}