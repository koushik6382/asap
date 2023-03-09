import React, { useState } from "react"; 
import { Clear } from "@mui/icons-material";
import "./styles.scss";
const CardDetails = ({  listtitle,title,onClose }) => {
  const [description, setDescription] = useState("");
  const [checklist, setChecklist] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [completedPercentage, setCompletedPercentage] = useState(0);
  
  
  const handleAddChecklist = () => {
    const newChecklist = [...checklist, { task: "", completed: false }];
    setChecklist(newChecklist);
  };

  const handleChecklistChange = (e, index) => {
    const { name, value } = e.target;
    const newChecklist = [...checklist];
    newChecklist[index][name] = value;
    setChecklist(newChecklist);
    setCompletedPercentage(
      Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
    );
  };

  const handleChecklistToggle = (index) => {
    const newChecklist = [...checklist];
    newChecklist[index].completed = !newChecklist[index].completed;
    setChecklist(newChecklist);
    setCompletedPercentage(
      Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
    );
  };

  const handleAttachmentChange = (e) => {
    const newAttachments = [...attachments, e.target.files[0]];
    setAttachments(newAttachments);
  };

  const handleRemoveChecklist = (index) => {
    const newChecklist = [...checklist];
    newChecklist.splice(index, 1);
    setChecklist(newChecklist);
    setCompletedPercentage(
      Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the description, checklist, and attachments data
    onClose();
  };

  return (
    <div className="card-details-overlay">
      <div className="card-details-container">
        <form onSubmit={handleSubmit}>
          <div className="card-details-header">
            <h2>{listtitle}<h3>{title}</h3></h2>
            {/* <button type="button" onClick={onClose}>
              <Clear />
            </button> */}
          </div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Checklist:</label>
          <button type="button" onClick={handleAddChecklist}>
            Add Task
          </button>
          {checklist.map((task, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleChecklistToggle(index)}
              />
              <input
                type="text"
                name="task"
                value={task.task}
                onChange={(e) => handleChecklistChange(e, index)}
              />
              <button type="button" onClick={() => handleRemoveChecklist(index)}>
                <Clear />
              </button>
            </div>
          ))}
          <div className="completed-percentage">
            {completedPercentage}% Completed
          </div>

          <label>Attachments:</label>
          <input type="file" onChange={handleAttachmentChange} />

          <div className="buttons">
             <button type="submit" onClick={handleSubmit}>close</button>
           {/* <button type="button" onClick={onClose}>
              Cancel
            </button> */}
          </div>
         </form>
       </div>
     </div>
  );
}
export default CardDetails;
// import React, { useState, useRef, useEffect } from "react"; 
// import { Clear } from "@mui/icons-material";
// import "./styles.scss";

// const CardDetails = ({ onClose }) => {
//   const [description, setDescription] = useState("");
//   const [checklist, setChecklist] = useState([]);
//   const [attachments, setAttachments] = useState([]);
//   const [completedPercentage, setCompletedPercentage] = useState(0);
//   const overlayRef = useRef(null);

//   const handleAddChecklist = () => {
//     const newChecklist = [...checklist, { task: "", completed: false }];
//     setChecklist(newChecklist);
//   };

//   const handleChecklistChange = (e, index) => {
//     const { name, value } = e.target;
//     const newChecklist = [...checklist];
//     newChecklist[index][name] = value;
//     setChecklist(newChecklist);
//     setCompletedPercentage(
//       Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
//     );
//   };

//   const handleChecklistToggle = (index) => {
//     const newChecklist = [...checklist];
//     newChecklist[index].completed = !newChecklist[index].completed;
//     setChecklist(newChecklist);
//     setCompletedPercentage(
//       Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
//     );
//   };

//   const handleAttachmentChange = (e) => {
//     const newAttachments = [...attachments, e.target.files[0]];
//     setAttachments(newAttachments);
//   };

//   const handleRemoveChecklist = (index) => {
//     const newChecklist = [...checklist];
//     newChecklist.splice(index, 1);
//     setChecklist(newChecklist);
//     setCompletedPercentage(
//       Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
//     );
//   };

//   // const handleClickOutside = (event) => {
//   //   if (overlayRef.current && !overlayRef.current.contains(event.target)) {
//   //     onClose();
//   //   }
//   // };
  
//   useEffect(() => {
//     const handleClickOutside=(event)=>{
//       if(overlayRef.current && !overlayRef.current.contains(event.target)){
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose,handleClickOutside]);
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something with the description, checklist, and attachments data
//     onClose();
//   };

//   return (
//     <div className="card-details-overlay">
//       <div className="card-details-container" ref={overlayRef}>
//         <form onSubmit={handleSubmit}>
//           <h2>Add Card Details</h2>
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <label>Checklist:</label>
//           <button type="button" onClick={handleAddChecklist}>
//             Add Task
//           </button>
//           {checklist.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => handleChecklistToggle(index)}
//               />
//               <input
//                 type="text"
//                 name="task"
//                 value={task.task}
//                 onChange={(e) => handleChecklistChange(e, index)}
//               />
//               <button type="button" onClick={() => handleRemoveChecklist(index)}>
//                 {/* Remove */}
//                 <Clear />
//               </button>
//             </div>
//           ))}
//           <div className="completed-percentage">
//             {completedPercentage}% Completed
//           </div>

//           <label>Attachments:</label>
//           <input type="file" onChange={handleAttachmentChange} />

//           <div className="buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;




// import React, { useState } from "react"; --->2
// import { Clear } from "@mui/icons-material";
// import "./styles.scss";

// const CardDetails = ({ onClose }) => {
//   const [description, setDescription] = useState("");
//   const [checklist, setChecklist] = useState([]);
//   const [attachments, setAttachments] = useState([]);
//   const [completedPercentage, setCompletedPercentage] = useState(0);

//   const handleAddChecklist = () => {
//     const newChecklist = [...checklist, { task: "", completed: false }];
//     setChecklist(newChecklist);
//   };

//   const handleChecklistChange = (e, index) => {
//     const { name, value } = e.target;
//     const newChecklist = [...checklist];
//     newChecklist[index][name] = value;
//     setChecklist(newChecklist);
//     setCompletedPercentage(
//       Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
//     );
//   };

//   const handleChecklistToggle = (index) => {
//     const newChecklist = [...checklist];
//     newChecklist[index].completed = !newChecklist[index].completed;
//     setChecklist(newChecklist);
//     setCompletedPercentage(
//       Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
//     );
//   };

//   const handleAttachmentChange = (e) => {
//     const newAttachments = [...attachments, e.target.files[0]];
//     setAttachments(newAttachments);
//   };

//   const handleRemoveChecklist = (index) => {
//     const newChecklist = [...checklist];
//     newChecklist.splice(index, 1);
//     setChecklist(newChecklist);
//     setCompletedPercentage(
//       Math.round((newChecklist.filter((item) => item.completed).length / newChecklist.length) * 100)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something with the description, checklist, and attachments data
//     onClose();
//   };

//   return (
//     <div className="card-details-overlay">
//       <div className="card-details-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Add Card Details</h2>
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <label>Checklist:</label>
//           <button type="button" onClick={handleAddChecklist}>
//             Add Task
//           </button>
//           {checklist.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => handleChecklistToggle(index)}
//               />
//               <input
//                 type="text"
//                 name="task"
//                 value={task.task}
//                 onChange={(e) => handleChecklistChange(e, index)}
//               />
//               <button type="button" onClick={() => handleRemoveChecklist(index)}>
//                 {/* Remove */}
//                 <Clear/>
//               </button>
//             </div>
//           ))}
//           <div className="completed-percentage">
//             {completedPercentage}% Completed
//           </div>

//           <label>Attachments:</label>
//           <input type="file" onChange={handleAttachmentChange} />

//           <div className="buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;



// import React, { useState } from "react"; ---->1
// import "./styles.scss";

// const Popup = ({ onClose }) => {
//   const [description, setDescription] = useState("");
//   const [checklist, setChecklist] = useState([]);
//   const [attachments, setAttachments] = useState([]);

//   const handleAddChecklist = () => {
//     const newChecklist = [...checklist, { task: "", completed: false }];
//     setChecklist(newChecklist);
//   };

//   const handleChecklistChange = (e, index) => {
//     const { name, value } = e.target;
//     const newChecklist = [...checklist];
//     newChecklist[index][name] = value;
//     setChecklist(newChecklist);
//   };

//   const handleChecklistToggle = (index) => {
//     const newChecklist = [...checklist];
//     newChecklist[index].completed = !newChecklist[index].completed;
//     setChecklist(newChecklist);
//   };

//   const handleAttachmentChange = (e) => {
//     const newAttachments = [...attachments, e.target.files[0]];
//     setAttachments(newAttachments);
//   };

//   const handleRemoveChecklist = (index) => {
//     const newChecklist = [...checklist];
//     newChecklist.splice(index, 1);
//     setChecklist(newChecklist);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something with the description, checklist, and attachments data
//     onClose();
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Add Card Details</h2>
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <label>Checklist:</label>
//           <button type="button" onClick={handleAddChecklist}>
//             Add Task
//           </button>
//           {checklist.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => handleChecklistToggle(index)}
//               />
//               <input
//                 type="text"
//                 name="task"
//                 value={task.task}
//                 onChange={(e) => handleChecklistChange(e, index)}
//               />
//               <button type="button" onClick={() => handleRemoveChecklist(index)}>
//                 Remove
//               </button>
//             </div>
//           ))}

//           <label>Attachments:</label>
//           <input type="file" onChange={handleAttachmentChange} />

//           <div className="buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Popup;

