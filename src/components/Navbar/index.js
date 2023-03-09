import React,{useState} from "react";
// import Bookmark from "@mui/icons-material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddIcon from '@mui/icons-material/Add';
import "./styles.scss";
import AddMember from "../../AddMember";

export default function Navbar() {
  const [open,setOpen]=useState(false);
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <BookmarksIcon/>
            <h1>Board</h1>
          </div>
          <button className="addmember" onClick={()=>setOpen(!open)}><AddIcon/><h4>Add Member</h4>
          </button>
        </div>
        {open && <AddMember/>}
      </nav>
    </div>
  );
}
