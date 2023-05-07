const openButton = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__img");
const closeButtonOverlau = "popup__img";
const nameLink = "popup__link";
const popupLinks = document.querySelectorAll(".popup__link");
const footerLinks = document.querySelectorAll(".footer__list-link");
const headerLinks = document.querySelectorAll(".header__link");
class openAndClose {
  constructor(
    thatOpenAndClose,
    closeButton,
    openButton,
    closeButtonOverlau,
    links
  ) {
    this._closeButton = closeButton;
    this._openButton = openButton;
    this._thatOpenAndClose = thatOpenAndClose;
    this._closeButtonOverlau = closeButtonOverlau;
    this._links = links;
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
      if (e.target.classList.contains(this._links)) {
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
  closeButtonOverlau,
  nameLink
);
openAndClosePopup.setEventListeners();
const scrollFoterLinks = new scrollLink(footerLinks);
scrollFoterLinks.setEventListeners();
const scrollPopupLinks = new scrollLink(popupLinks);
scrollPopupLinks.setEventListeners();
const scrollHeaderLinks = new scrollLink(headerLinks);
scrollHeaderLinks.setEventListeners();
