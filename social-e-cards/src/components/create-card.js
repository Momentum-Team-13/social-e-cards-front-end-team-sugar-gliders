// import axios from "axios";
// import { useState } from "react";

// export default function AddCard () {
// //   const [image, setImage] = useState("");
//   const [inmessage, setInnerMessage]= useState("");
//   const [outmessage, setOuterMessage] = useState("");
//   const [color, setColor] = useState("");

// const Social_Cards = [
//     { pk: 1, outermessage: "hello", innermessage: "Note 1", color: "blue" },
//     { pk: 2, outermessage: "wassup", innermessage: "Note 2", color: "yellow" },
//     { pk: 3, outermessage: "hey", innermessage: "Note 3", color: "pink" },
//   ];

// Not sure about the ajax request but it should look something like this

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post(
//         "https://sg-ecard-api.herokuapp.com"
//         {
//           image: image
//           inner_message: inmessage
//           outer_message: outmessage,
//           color: color,

//         //   outer_font: msgfont,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         setSubmitted(true);
//         setInnerMessage("");
//         setOuterMessage("");
//         setColor("");
//         setImage("");
//         // setMsgfont("");
//         return res;
//       });
//   };

//   return (
//     <>
//       <div className="addcard">
//         <div id="preview">
//           <h2>Card Preview</h2>
//           {/* <h3>Title: {title}</h3> */}
//             <div
//               className={`background_block ${color}`}
//             >
//               <h4>{message}</h4>
//             </div>
//           </div>
//         </div>
//         <div id="cardform">
//           <h2>Customize your card!</h2>
//   {/* <form onSubmit={handleSubmit} id="add-card">
//     <div className="input-field" id="card-title-field">
//       <label htmlFor="title" id="title-label">
//         Title:
//       </label>
//       <br />
//       <input
//         id="title"
//         type="text"
//         value={title}
//         name="title"
//         placeholder="Give your card a title!"
//         onChange={(e) => setTitle(e.target.value)}
//       /> */}
//             </div>
//             <div className="message-options">
//               <div className="input-field" id="card-message-field">
//                 <label htmlFor="message">Inner Message:</label>
//                 <br />
//                 <input
//                   type="textarea"
//                   value={inmessage}
//                   name="message"
//                   placeholder="Give your card a message!"
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </div>
//               <div className="message-options">
//               <div className="input-field" id="card-message-field">
//                 <label htmlFor="message">Outer Message:</label>
//                 <br />
//                 <input
//                   type="textarea"
//                   value={outmessage}
//                   name="message"
//                   placeholder="Give your card a message!"
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </div>
//               <div className="bgcolors">
//                 <label htmlFor="bgcolor"> Color:</label>
//                 <br />
//                 <button
//                   type="button"
//                   className="pink"
//                   value="pink"
//                   onClick={(e) => setBgcolor(e.target.value)}
//                 ></button>
//                 <button
//                   type="button"
//                   className="blue"
//                   value="blue"
//                   onClick={(e) => setBgcolor(e.target.value)}
//                 ></button>
//                 <button
//                   type="button"
//                   className="green"
//                   value="green"
//                   onClick={(e) => setBgcolor(e.target.value)}
//                 ></button>
//                 <br />
//                 <button
//                   type="button"
//                   className="white"
//                   value="white"
//                   onClick={(e) => setBgcolor(e.target.value)}
//                 ></button>
//                 <button
//                   type="button"
//                   className="black"
//                   value="black"
//                   onClick={(e) => setBgcolor(e.target.value)}
//                 ></button>
//                 <button
//                   type="button"
//                   className="purple"
//                   value="purple"
//                   onClick={(e) => setBgcolor(e.target.value)}
//                 ></button>
//               </div>
//             </div>
//             <button type="submit" id="submit">
//               Done!
//             </button>
//         </div>
//       </div>
//     </>
//   );
// };
