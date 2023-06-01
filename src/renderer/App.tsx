import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Home from '../renderer/src/views/Home';
import Stream, { loader as streamLoader } from '../renderer/src/views/Stream';
const router = createMemoryRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/stream/:channel_name',
    element: <Stream />,
    loader: streamLoader,
  },
]);
declare global {
  interface Window {
    IVSPlayer: any;
  }
}

window.IVSPlayer = window.IVSPlayer || {};
export default function App() {
  return <RouterProvider router={router} />;
}
