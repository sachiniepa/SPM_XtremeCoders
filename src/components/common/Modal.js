import React from "react";
import classNames from "classnames";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

// @observer
// class Modal extends Component {
//  @observable isOpen = false;

//   @action open = (e) => {
//     if(e) { e.preventDefault();}
//     this.isOpen = true;
//   }

//   @action close = (e) => {
//     if(e) { e.preventDefault();}
//     this.isOpen = false;
//   }
//   render() {
//     const overlayClasses = classNames{{ open: this.isOpen }};
//   return (
//   <div id='modal' className={overlayClasses}>

//   </div>
//   );
// }
// }

// export default Modal;
