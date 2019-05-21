// @flow

import React from 'react';

function Sidebar(props) {
  const {sidebar, toggleSidebar} = props;
  return (
    <div className="wrapper">

      {sidebar && (
        <nav id="sidebar">
          <div id="dismiss">
            <button type="button" onClick={() => toggleSidebar()}>
              <i className="fas fa-arrow-left"/>
            </button>
          </div>
          <div className="sidebar">
            <h3>Cordeso SB</h3>
          </div>
        </nav>
      )}
      <div className={sidebar ? "overlay active" : "overlay"}></div>
    </div>
  )
}

export default Sidebar;


// <div className="wrapper">
// <nav id="sidebar">

//     <div id="dismiss">
//         <i className="fas fa-arrow-left"></i>
//     </div>

//     <div className="sidebar-header">
//         <h3>Bootstrap Sidebar</h3>
//     </div>

//     <ul className="list-unstyled components">
//         <p>Dummy Heading</p>
//         <li className="active">
//             <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
//             <ul className="collapse list-unstyled" id="homeSubmenu">
//                 <li>
//                     <a href="#">Home 1</a>
//                 </li>
//                 <li>
//                     <a href="#">Home 2</a>
//                 </li>
//                 <li>
//                     <a href="#">Home 3</a>
//                 </li>
//             </ul>
//         </li>
//         <li>
//             <a href="#">About</a>
//             <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
//             <ul className="collapse list-unstyled" id="pageSubmenu">
//                 <li>
//                     <a href="#">Page 1</a>
//                 </li>
//                 <li>
//                     <a href="#">Page 2</a>
//                 </li>
//                 <li>
//                     <a href="#">Page 3</a>
//                 </li>
//             </ul>
//         </li>
//         <li>
//             <a href="#">Portfolio</a>
//         </li>
//         <li>
//             <a href="#">Contact</a>
//         </li>
//     </ul>
// </nav>

// <div id="content">

//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">

//             <button type="button" id="sidebarCollapse" className="btn btn-info">
//                 <i className="fas fa-align-left"></i>
//                 <span>Toggle Sidebar</span>
//             </button>
//         </div>
//     </nav>
// </div>
// <div className="overlay"></div>
// </div>