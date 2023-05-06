const openButton = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__img");
const closeButtonOverlau = "popup__img";

class openAndClose {
  constructor(thatOpenAndClose, closeButton, openButton, closeButtonOverlau) {
    this._closeButton = closeButton;
    this._openButton = openButton;
    this._thatOpenAndClose = thatOpenAndClose;
    this._closeButtonOverlau = closeButtonOverlau;
  }
  setEventListeners() {
    this._openButton.addEventListener("click", () => {
      this._open();
    });

    this._closeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        this._close();
      }
      if (e.target.classList.contains(this._closeButtonOverlau)) {
        this._close();
      }
    });
  }
  _open() {
    this._thatOpenAndClose.classList.toggle("active");
  }
  _close() {
    this._thatOpenAndClose.classList.remove("active");
  }
}
class scrollLink {
  constructor(links) {
    this._links = links;
  }
  setEventListeners() {
    for (let link of this._links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        this._scroll(id);
      });
    }
  }
  _scroll(id) {
    document
      .querySelector("" + id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
const openAndClosePopup = new openAndClose(
  popup,
  popup,
  openButton,
  closeButtonOverlau
);
openAndClosePopup.setEventListeners();
