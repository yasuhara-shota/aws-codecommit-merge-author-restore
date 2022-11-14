const LOCAL_STORAGE_NAME_KEY = "name";
const LOCAL_STORAGE_ADDR_KEY = "addr";

function init() {
  const interval = setInterval(() => {
    const [nameEl, addrEl] = document.querySelectorAll(
      ".awsui-input-container .awsui-input.awsui-input-type-text"
    );
    const submitButton = document.querySelector(
      ".dx-FormActions > div > awsui-button > .awsui-button.awsui-button-variant-primary.awsui-hover-child-icons"
    );

    if (nameEl != null && addrEl != null && submitButton != null) {
      clearInterval(interval);
      submitButton.addEventListener("click", () => {
        saveSubmitValues(nameEl, addrEl);
      });
      loadBeforeValue(nameEl, addrEl);
    }
  }, 500);
}

function loadBeforeValue(nameEl, addrEl) {
  const name = localStorage.getItem(LOCAL_STORAGE_NAME_KEY);
  const addr = localStorage.getItem(LOCAL_STORAGE_ADDR_KEY);

  nameEl.value = name;
  addrEl.value = addr;
}

function saveSubmitValues(nameEl, addrEl) {
  const name = nameEl.value;
  const addr = addrEl.value;

  localStorage.setItem(LOCAL_STORAGE_NAME_KEY, name);
  localStorage.setItem(LOCAL_STORAGE_ADDR_KEY, addr);
}

init();
