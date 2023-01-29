import { Component } from 'react';
import { createPortal } from 'react-dom';

import * as basicLightbox from 'basiclightbox';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    const {
      currentImage: { alt, src },
    } = this.props;

    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

// class Modal extends Component {

//   render() {
//     const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//          <img src="" alt="" />
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

//     return <div className={css.overlay}>{instance}</div>;
//   }
// }

// instance.show()
