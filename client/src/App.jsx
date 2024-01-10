import { useEffect } from "react";
import { Handler } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import MapMeetups from "./pages/MapMeetups";
import CreateMeetUp from "./pages/CreateMeetUp";
import ListMeetups from "./pages/ListMeetups";
function App() {
  const { myData, setMyData,setmenuOn } = Handler();

  useEffect(() => {
    setMyData("hello");
    console.log(myData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myData]);
  return (
    <main 
    onClick={(e)=>{e.stopPropagation();setmenuOn(false)}}
    className={` min-h-screen relative bg-zinc-50`}>
      <Nav />
      <SideBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/list/meetups" element={<ListMeetups />} />
        <Route path="/meetups/map" element={<MapMeetups />} />
        <Route path="/new/meetup" element={<CreateMeetUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
